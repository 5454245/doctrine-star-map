import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { IsmNode, IsmRelationship, CategoryType } from '../types/ism';
import { audioEngine } from '../utils/audioEngine';
import { computeRelaxedConstellationLayout } from '../utils/layoutOptimizer';
import { Volume2, VolumeX, Maximize2, Compass } from 'lucide-react';

interface ConstellationCanvasProps {
  nodes: IsmNode[];
  relationships: IsmRelationship[];
  selectedNodeId: string | null;
  highlightedNodeId: string | null;
  filterCategory: CategoryType | 'all';
  searchQuery: string;
  onSelectNode: (node: IsmNode) => void;
  onHoverNode?: (node: IsmNode | null) => void;
  flyToNodeId?: string | null;
}

interface PhysicsNode {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  radius: number;
  data: IsmNode;
  isDragging?: boolean;
}

interface BackgroundStar {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
}

interface ClickShockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
  lineWidth: number;
}

interface ClickSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

export const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({
  nodes,
  relationships,
  selectedNodeId,
  highlightedNodeId,
  filterCategory,
  searchQuery,
  onSelectNode,
  onHoverNode,
  flyToNodeId,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Viewport transformation: pan (tx, ty) & zoom scale
  const transformRef = useRef({ tx: 0, ty: 0, scale: 0.95 });
  const isDraggingCanvasRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const canvasMouseDownPosRef = useRef<{ x: number; y: number } | null>(null);
  const isCanvasMovedRef = useRef(false);
  const activeDraggedNodeRef = useRef<PhysicsNode | null>(null);
  const nodeDragStartScreenRef = useRef<{ x: number; y: number } | null>(null);

  // Audio mute state synced with audioEngine
  const [isAudioMuted, setIsAudioMuted] = useState(() => audioEngine.getMuted());

  useEffect(() => {
    return audioEngine.subscribeBackgroundState((state) => {
      setIsAudioMuted(state.isMuted);
    });
  }, []);

  // Hover state with 300ms dwell delay to protect user attention
  const [hoveredNode, setHoveredNode] = useState<IsmNode | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingHoverNodeIdRef = useRef<string | null>(null);

  // Telemetry HUD state
  const [telemetryZoom, setTelemetryZoom] = useState('95%');
  const [telemetryCoords, setTelemetryCoords] = useState('0, 0');

  // Physics simulation nodes & cached lookups
  const physicsNodesRef = useRef<PhysicsNode[]>([]);
  const nodeMapRef = useRef<Map<string, PhysicsNode>>(new Map());
  const backgroundStarsRef = useRef<BackgroundStar[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  // Interactive feedback particles
  const shockwavesRef = useRef<ClickShockwave[]>([]);
  const sparksRef = useRef<ClickSpark[]>([]);

  // Simulation energy for high performance (sleeps when stable!)
  const simEnergyRef = useRef(100);

  // Initialize or update physics nodes using collision-free layout optimizer
  useEffect(() => {
    // 1. Calculate spacious, non-overlapping coordinates (>= 135px distance guarantee)
    const relaxedPositions = computeRelaxedConstellationLayout(nodes);

    const existingMap = new Map<string, PhysicsNode>(
      physicsNodesRef.current.map((n) => [n.id, n])
    );

    const newNodes = nodes.map((node) => {
      const relaxed = relaxedPositions.get(node.id) || node.initialPosition || { x: 0, y: 0 };
      const existing = existingMap.get(node.id);
      if (existing) {
        existing.data = node;
        existing.targetX = relaxed.x;
        existing.targetY = relaxed.y;
        return existing;
      }
      return {
        id: node.id,
        x: relaxed.x,
        y: relaxed.y,
        vx: 0,
        vy: 0,
        targetX: relaxed.x,
        targetY: relaxed.y,
        radius: 20,
        data: node,
      };
    });

    physicsNodesRef.current = newNodes;
    nodeMapRef.current = new Map(newNodes.map((n) => [n.id, n]));
    simEnergyRef.current = 60; // smooth settle
  }, [nodes]);

  // Clean up hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Generate background ambient stars once
  useEffect(() => {
    const stars: BackgroundStar[] = [];
    for (let i = 0; i < 280; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 4400,
        y: (Math.random() - 0.5) * 3600,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
      });
    }
    backgroundStarsRef.current = stars;
  }, []);

  // Center camera initially
  useEffect(() => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      transformRef.current = {
        tx: rect.width / 2,
        ty: rect.height / 2,
        scale: 0.85,
      };
      setTelemetryZoom('85%');
      setTelemetryCoords(`${Math.round(rect.width / 2)}, ${Math.round(rect.height / 2)}`);
    }
  }, []);

  // Spawn visual and acoustic click feedback with layered shockwaves & chromatic starburst
  const triggerClickFeedback = useCallback((node: PhysicsNode) => {
    const starAccent = node.data.color || '#38bdf8';

    // 1. Acoustic feedback
    audioEngine.playStarClick(node.data.category);

    // 2. Primary Quantum shockwave in exclusive star accent color
    shockwavesRef.current.push({
      x: node.x,
      y: node.y,
      radius: node.radius * 0.9,
      maxRadius: node.radius + 130,
      alpha: 1.0,
      color: starAccent,
      lineWidth: 2.8,
    });

    // Secondary delayed concentric echo wave
    setTimeout(() => {
      shockwavesRef.current.push({
        x: node.x,
        y: node.y,
        radius: node.radius * 0.5,
        maxRadius: node.radius + 85,
        alpha: 0.65,
        color: starAccent,
        lineWidth: 1.8,
      });
    }, 110);

    // 3. Energetic starlight sparks burst in star's chromatic accent
    const sparkCount = 20;
    for (let i = 0; i < sparkCount; i++) {
      const angle = (i / sparkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
      const speed = Math.random() * 4.8 + 2.2;
      sparksRef.current.push({
        x: node.x,
        y: node.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1.0,
        color: i % 3 === 0 ? '#ffffff' : starAccent,
        size: Math.random() * 2.6 + 1.2,
      });
    }

    // Wake up physics for gentle recoil
    simEnergyRef.current = Math.max(simEnergyRef.current, 45);
  }, []);

  // Smoothly Fly camera to specific node when requested (enhanced scale, visible centering & deep space ease)
  useEffect(() => {
    if (!flyToNodeId || !canvasRef.current) return;
    const targetNode = nodeMapRef.current.get(flyToNodeId);
    if (!targetNode) return;

    triggerClickFeedback(targetNode);

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // If detail drawer is open (or user is navigating from details), center in the visible workspace area
    const isDrawerOpen = !!selectedNodeId;
    let visibleCenterX = rect.width / 2;
    if (isDrawerOpen) {
      if (window.innerWidth >= 1024) {
        visibleCenterX = Math.max(160, (rect.width - 540) / 2);
      } else if (window.innerWidth >= 640) {
        visibleCenterX = Math.max(120, (rect.width - 480) / 2);
      }
    }

    // Enhanced scale for deep-space immersion (1.28x)
    const targetScale = 1.28;
    const targetTx = visibleCenterX - targetNode.x * targetScale;
    const targetTy = rect.height / 2 - targetNode.y * targetScale;

    const startTx = transformRef.current.tx;
    const startTy = transformRef.current.ty;
    const startScale = transformRef.current.scale;
    const startTime = performance.now();
    const duration = 850; // Luxuriously smooth 850ms cinematic camera glide

    const animateCamera = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Premium quintic ease-out: starts with swift poise and settles with velvety deceleration
      const ease = 1 - Math.pow(1 - progress, 4);

      transformRef.current.tx = startTx + (targetTx - startTx) * ease;
      transformRef.current.ty = startTy + (targetTy - startTy) * ease;
      transformRef.current.scale = startScale + (targetScale - startScale) * ease;

      setTelemetryZoom(`${Math.round(transformRef.current.scale * 100)}%`);
      setTelemetryCoords(`${Math.round(transformRef.current.tx)}, ${Math.round(transformRef.current.ty)}`);

      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      }
    };

    requestAnimationFrame(animateCamera);
  }, [flyToNodeId, selectedNodeId, triggerClickFeedback]);

  // Main High-Performance Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.02;

      // Ensure canvas dimensions match container
      const parent = canvas.parentElement;
      if (parent) {
        if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
        }
      }

      const { width, height } = canvas;
      const { tx, ty, scale } = transformRef.current;

      // 1. Deep Obsidian Void: Pitch Black (#000000) with faint radial nebula
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const nebula = ctx.createRadialGradient(
        width / 2,
        height / 2,
        60,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.85
      );
      nebula.addColorStop(0, 'rgba(10, 16, 28, 0.45)');
      nebula.addColorStop(0.5, 'rgba(4, 6, 12, 0.7)');
      nebula.addColorStop(1, '#000000');
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(tx, ty);
      ctx.scale(scale, scale);

      // 2. Render background ambient stars with subtle twinkle
      const stars = backgroundStarsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const twinkle = Math.sin(time * 2 + i) * 0.25 + 0.75;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * twinkle * 0.65})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. High-Performance Physics Step: Settles smoothly at relaxed anchors
      const pNodes = physicsNodesRef.current;
      if (simEnergyRef.current > 0.04) {
        let maxMovement = 0;
        for (let i = 0; i < pNodes.length; i++) {
          const nodeA = pNodes[i];
          if (nodeA.isDragging) continue;

          // Spring towards pre-calculated collision-free anchor
          const dx = nodeA.targetX - nodeA.x;
          const dy = nodeA.targetY - nodeA.y;
          nodeA.vx += dx * 0.06;
          nodeA.vy += dy * 0.06;

          // Damping
          nodeA.vx *= 0.75;
          nodeA.vy *= 0.75;
          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;

          const movement = Math.abs(nodeA.vx) + Math.abs(nodeA.vy);
          if (movement > maxMovement) maxMovement = movement;
        }

        // Decay simulation energy until peaceful sleep
        simEnergyRef.current = maxMovement;
      }

      // Fast node lookup
      const nodeMap = nodeMapRef.current;

      // 4. Determine Active and Connected Sets
      const isSelectedMode = !!selectedNodeId;
      const activeId = isSelectedMode
        ? selectedNodeId
        : (hoveredNode?.id || highlightedNodeId || null);

      const connectedNodeIds = new Set<string>();
      if (activeId) {
        connectedNodeIds.add(activeId);
        for (let i = 0; i < relationships.length; i++) {
          const rel = relationships[i];
          if (rel.source === activeId) connectedNodeIds.add(rel.target);
          if (rel.target === activeId) connectedNodeIds.add(rel.source);
        }
      }

      // Viewport frustum bounds in world coordinates
      const viewMinX = -tx / scale - 120;
      const viewMaxX = (width - tx) / scale + 120;
      const viewMinY = -ty / scale - 120;
      const viewMaxY = (height - ty) / scale + 120;

      // 5. Render Constellation Network Lines (Batch Drawing for 60fps)
      // Pass A: Background faint lines
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < relationships.length; i++) {
        const rel = relationships[i];
        const isHighlighted = activeId && (rel.source === activeId || rel.target === activeId);
        if (isHighlighted) continue;

        const sourceNode = nodeMap.get(rel.source);
        const targetNode = nodeMap.get(rel.target);
        if (!sourceNode || !targetNode) continue;

        // Frustum culling for lines
        if (
          (sourceNode.x < viewMinX && targetNode.x < viewMinX) ||
          (sourceNode.x > viewMaxX && targetNode.x > viewMaxX) ||
          (sourceNode.y < viewMinY && targetNode.y < viewMinY) ||
          (sourceNode.y > viewMaxY && targetNode.y > viewMaxY)
        ) {
          continue;
        }

        let isVisible = true;
        if (filterCategory !== 'all') {
          isVisible = sourceNode.data.category === filterCategory || targetNode.data.category === filterCategory;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchA = sourceNode.data.name.toLowerCase().includes(q);
          const matchB = targetNode.data.name.toLowerCase().includes(q);
          isVisible = isVisible && (matchA || matchB);
        }

        if (!isVisible) continue;

        ctx.moveTo(sourceNode.x, sourceNode.y);
        ctx.lineTo(targetNode.x, targetNode.y);
      }
      ctx.strokeStyle = activeId ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.12)';
      ctx.stroke();

      // Pass B: Active highlighted relationship lines
      if (activeId) {
        for (let i = 0; i < relationships.length; i++) {
          const rel = relationships[i];
          const isHighlighted = rel.source === activeId || rel.target === activeId;
          if (!isHighlighted) continue;

          const sourceNode = nodeMap.get(rel.source);
          const targetNode = nodeMap.get(rel.target);
          if (!sourceNode || !targetNode) continue;

          let strokeColor = '#38bdf8'; // Cyan
          let lineDash: number[] = [];

          if (rel.type === 'opposition') {
            strokeColor = '#f43f5e'; // Crimson
            lineDash = [6, 4];
          } else if (rel.type === 'fusion') {
            strokeColor = '#10b981'; // Emerald
            lineDash = [3, 3];
          } else if (rel.type === 'evolution') {
            strokeColor = '#38bdf8'; // Cyan
            lineDash = [];
          } else {
            strokeColor = '#ffffff';
            lineDash = [2, 2];
          }

          ctx.save();
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 2.2;
          ctx.setLineDash(lineDash);
          ctx.beginPath();
          ctx.moveTo(sourceNode.x, sourceNode.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();

          // Animated energy photon packet along active line
          const progress = (time * 1.5 + i * 0.3) % 1;
          const px = sourceNode.x + (targetNode.x - sourceNode.x) * progress;
          const py = sourceNode.y + (targetNode.y - sourceNode.y) * progress;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Telemetry Label Badge on active line
          const midX = (sourceNode.x + targetNode.x) / 2;
          const midY = (sourceNode.y + targetNode.y) / 2;
          const label = rel.label || rel.type;

          ctx.font = 'bold 9px "Plus Jakarta Sans", monospace';
          const textWidth = ctx.measureText(label).width;
          ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1;
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.roundRect(midX - textWidth / 2 - 5, midY - 8, textWidth + 10, 16, 4);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(label, midX, midY);

          ctx.restore();
        }
      }

      // 6. Render Click Particles & Quantum Shockwaves
      // Shockwaves
      const shockwaves = shockwavesRef.current;
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 3.2;
        sw.alpha -= 0.028;
        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.strokeStyle = sw.color;
        ctx.globalAlpha = sw.alpha;
        ctx.lineWidth = sw.lineWidth;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Sparks
      const sparks = sparksRef.current;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.94;
        sp.vy *= 0.94;
        sp.alpha -= 0.026;
        if (sp.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 7. Render Ideology Star Nodes
      for (let i = 0; i < pNodes.length; i++) {
        const node = pNodes[i];
        const isSelected = selectedNodeId === node.id;
        const isHovered = hoveredNode?.id === node.id;
        const isHighlighted = highlightedNodeId === node.id;
        const isConnected = connectedNodeIds.has(node.id);

        // Frustum culling check
        if (
          node.x < viewMinX ||
          node.x > viewMaxX ||
          node.y < viewMinY ||
          node.y > viewMaxY
        ) {
          continue;
        }

        // Filtering
        let isDimmed = false;
        if (filterCategory !== 'all' && node.data.category !== filterCategory) {
          isDimmed = true;
        }
        if (searchQuery.trim()) {
          const match =
            node.data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            node.data.englishName.toLowerCase().includes(searchQuery.toLowerCase());
          if (!match) isDimmed = true;
        }
        if (activeId && !isConnected && !isSelected) {
          isDimmed = true;
        }

        const baseAlpha = isDimmed ? 0.18 : 1.0;
        const starColor = node.data.color || '#38bdf8';
        const accentColor = starColor; // Exclusive stereotypical accent color

        // Star Core Glow & Natural Deep-Space Harmonic Respiration
        ctx.save();
        ctx.globalAlpha = baseAlpha;

        // 1. Organic Breathing Pulse (every star has unique phase derived from its ID/era)
        const breathPhase = time * 2.2 + (node.data.eraYear ? (node.data.eraYear % 360) * 0.05 : i * 0.45);
        const breath = Math.sin(breathPhase) * 0.5 + 0.5; // Smooth 0 to 1
        const auraRadius = node.radius * (1.35 + 0.45 * breath);

        // Soft chromatic atmospheric aura
        const auraGrad = ctx.createRadialGradient(node.x, node.y, 2, node.x, node.y, auraRadius);
        auraGrad.addColorStop(0, starColor);
        auraGrad.addColorStop(0.4, `${starColor}35`);
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, auraRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Focused Selected Star: Target Lock Reticle in Exclusive Accent Color
        if (isSelected) {
          ctx.save();
          const selHaloRadius = node.radius * 2.8;
          const radial = ctx.createRadialGradient(node.x, node.y, 3, node.x, node.y, selHaloRadius);
          radial.addColorStop(0, accentColor);
          radial.addColorStop(0.5, `${accentColor}55`);
          radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = radial;
          ctx.beginPath();
          ctx.arc(node.x, node.y, selHaloRadius, 0, Math.PI * 2);
          ctx.fill();

          // 4-Corner Target Bracket Reticle [  ] in Exclusive Accent Color
          const bracketLen = 9;
          const boxR = node.radius + 8;
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 2.0;

          // Top-left
          ctx.beginPath();
          ctx.moveTo(node.x - boxR, node.y - boxR + bracketLen);
          ctx.lineTo(node.x - boxR, node.y - boxR);
          ctx.lineTo(node.x - boxR + bracketLen, node.y - boxR);
          ctx.stroke();

          // Top-right
          ctx.beginPath();
          ctx.moveTo(node.x + boxR - bracketLen, node.y - boxR);
          ctx.lineTo(node.x + boxR, node.y - boxR);
          ctx.lineTo(node.x + boxR, node.y - boxR + bracketLen);
          ctx.stroke();

          // Bottom-left
          ctx.beginPath();
          ctx.moveTo(node.x - boxR, node.y + boxR - bracketLen);
          ctx.lineTo(node.x - boxR, node.y + boxR);
          ctx.lineTo(node.x - boxR + bracketLen, node.y + boxR);
          ctx.stroke();

          // Bottom-right
          ctx.beginPath();
          ctx.moveTo(node.x + boxR - bracketLen, node.y + boxR);
          ctx.lineTo(node.x + boxR, node.y + boxR);
          ctx.lineTo(node.x + boxR, node.y + boxR - bracketLen);
          ctx.stroke();

          // Concentric dashed quantum orbit
          ctx.save();
          ctx.setLineDash([4, 4]);
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 1.55 * (1 + 0.05 * Math.sin(time * 3.5)), 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();

          ctx.restore();
        }

        // 3. Subtle Outer Orbit Ring (ALWAYS preserves starColor, NEVER turns white on hover!)
        const ringPulse = Math.sin(time * 2.6 + i) * 0.12 + 0.92;
        ctx.strokeStyle = isSelected ? accentColor : starColor;
        ctx.lineWidth = isSelected ? 2.4 : isHovered ? 1.8 : 1.0;
        ctx.globalAlpha = isSelected ? 1.0 : isHovered ? 0.85 : 0.4 * baseAlpha;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (isSelected ? 1.25 : 1.12) * ringPulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = baseAlpha;

        // 4. Star Core Body (Deep dark body with luminous chromatic rim)
        ctx.fillStyle = '#06080e';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isSelected ? accentColor : starColor;
        ctx.lineWidth = isSelected ? 2.8 : isHovered ? 2.4 : 1.8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glowing starlight jewel
        ctx.fillStyle = isSelected ? accentColor : isHovered ? starColor : '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, isSelected ? 4.2 : isHovered ? 3.2 : 2.5, 0, Math.PI * 2);
        ctx.fill();

        // 5. Star Label & Telemetry Capsule
        // Show labels when scale is sufficient or if active/hovered/connected
        const showLabel = scale > 0.45 || isSelected || isHovered || isConnected;
        if (showLabel) {
          ctx.font = isSelected || isHovered
            ? 'bold 12px "Plus Jakarta Sans", monospace'
            : '11px "Plus Jakarta Sans", monospace';

          const label = node.data.name;
          const textWidth = ctx.measureText(label).width;
          const badgeY = node.y + node.radius + 12;

          ctx.fillStyle = isSelected
            ? 'rgba(12, 14, 22, 0.95)'
            : 'rgba(8, 10, 15, 0.85)';
          // Border preserves starColor/accentColor, never shifts to harsh white!
          ctx.strokeStyle = isSelected
            ? accentColor
            : isHovered
            ? starColor
            : 'rgba(255, 255, 255, 0.15)';
          ctx.lineWidth = isSelected ? 1.8 : isHovered ? 1.4 : 1.0;

          ctx.beginPath();
          ctx.roundRect(
            node.x - textWidth / 2 - 7,
            badgeY - 7,
            textWidth + 14,
            18,
            6
          );
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isSelected ? '#ffffff' : isHovered ? '#ffffff' : '#e4e4e7';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(label, node.x, badgeY + 2);
        }

        ctx.restore();
      }

      ctx.restore();

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    animationFrameIdRef.current = requestAnimationFrame(render);
    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [
    relationships,
    selectedNodeId,
    hoveredNode,
    highlightedNodeId,
    filterCategory,
    searchQuery,
  ]);

  // Find node under screen coordinates (sx, sy)
  const getNodeAtScreenPos = useCallback(
    (sx: number, sy: number): PhysicsNode | null => {
      const { tx, ty, scale } = transformRef.current;
      const wx = (sx - tx) / scale;
      const wy = (sy - ty) / scale;

      const pNodes = physicsNodesRef.current;
      for (let i = pNodes.length - 1; i >= 0; i--) {
        const n = pNodes[i];
        const distSq = (n.x - wx) * (n.x - wx) + (n.y - wy) * (n.y - wy);
        const hitRadius = Math.max(n.radius + 10, 24);
        if (distSq <= hitRadius * hitRadius) {
          return n;
        }
      }
      return null;
    },
    []
  );

  // Mouse Move
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;

      // Canvas Dragging
      if (isDraggingCanvasRef.current) {
        const dx = sx - dragStartRef.current.x;
        const dy = sy - dragStartRef.current.y;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
          isCanvasMovedRef.current = true;
        }
        transformRef.current.tx += dx;
        transformRef.current.ty += dy;
        dragStartRef.current = { x: sx, y: sy };
        setTelemetryCoords(
          `${Math.round(transformRef.current.tx)}, ${Math.round(transformRef.current.ty)}`
        );
        return;
      }

      // Dragging a specific node
      if (activeDraggedNodeRef.current) {
        const node = activeDraggedNodeRef.current;
        const { tx, ty, scale } = transformRef.current;
        node.x = (sx - tx) / scale;
        node.y = (sy - ty) / scale;
        node.targetX = node.x;
        node.targetY = node.y;
        simEnergyRef.current = Math.max(simEnergyRef.current, 50);
        return;
      }

      // Hover Detection with 300ms dwell delay (protects user attention during camera/cursor movement)
      const hit = getNodeAtScreenPos(sx, sy);
      if (hit) {
        if (canvasRef.current) canvasRef.current.style.cursor = 'pointer';

        // If pointer is already lingering on this exact star, just update mouse position
        if (pendingHoverNodeIdRef.current === hit.data.id) {
          setMousePos({ x: e.clientX, y: e.clientY });
          return;
        }

        // Star changed: clear any pending timer
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }

        pendingHoverNodeIdRef.current = hit.data.id;
        const targetNode = hit.data;
        const targetX = e.clientX;
        const targetY = e.clientY;

        // Dwell delay of 300ms before popping up info HUD
        hoverTimeoutRef.current = setTimeout(() => {
          setHoveredNode(targetNode);
          setMousePos({ x: targetX, y: targetY });
          onHoverNode?.(targetNode);
          audioEngine.playStarHover(targetNode.category);
          hoverTimeoutRef.current = null;
        }, 300);
      } else {
        // Pointer is in open space: immediately cancel pending hover timer and dismiss tooltip
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }
        pendingHoverNodeIdRef.current = null;

        if (hoveredNode) {
          setHoveredNode(null);
          setMousePos(null);
          onHoverNode?.(null);
        }
        if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
      }
    },
    [getNodeAtScreenPos, hoveredNode, onHoverNode]
  );

  // Mouse Leave Canvas
  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    pendingHoverNodeIdRef.current = null;

    if (hoveredNode) {
      setHoveredNode(null);
      setMousePos(null);
      onHoverNode?.(null);
    }
    isDraggingCanvasRef.current = false;
    activeDraggedNodeRef.current = null;
  }, [hoveredNode, onHoverNode]);

  // Mouse Down
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;

      canvasMouseDownPosRef.current = { x: sx, y: sy };
      isCanvasMovedRef.current = false;

      const hit = getNodeAtScreenPos(sx, sy);
      if (hit) {
        activeDraggedNodeRef.current = hit;
        hit.isDragging = true;
        nodeDragStartScreenRef.current = { x: sx, y: sy };
      } else {
        isDraggingCanvasRef.current = true;
        dragStartRef.current = { x: sx, y: sy };
        if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
      }
    },
    [getNodeAtScreenPos]
  );

  // Mouse Up & Click Selection
  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;

      let isNodeDragTravel = false;
      if (nodeDragStartScreenRef.current) {
        const dx = sx - nodeDragStartScreenRef.current.x;
        const dy = sy - nodeDragStartScreenRef.current.y;
        if (Math.hypot(dx, dy) > 5) {
          isNodeDragTravel = true;
        }
      }

      // If user clicked on a node without drag travel
      if (activeDraggedNodeRef.current && !isNodeDragTravel) {
        const clickedNode = activeDraggedNodeRef.current;
        triggerClickFeedback(clickedNode);
        onSelectNode(clickedNode.data);
      }

      if (activeDraggedNodeRef.current) {
        activeDraggedNodeRef.current.isDragging = false;
        activeDraggedNodeRef.current = null;
      }

      // If clicked empty space without dragging canvas
      if (isDraggingCanvasRef.current && !isCanvasMovedRef.current) {
        // deselect
      }

      isDraggingCanvasRef.current = false;
      canvasMouseDownPosRef.current = null;
      nodeDragStartScreenRef.current = null;
      if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
    },
    [triggerClickFeedback, onSelectNode]
  );

  // Mouse Wheel Zooming
  const handleWheel = useCallback((e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const zoomFactor = e.deltaY < 0 ? 1.12 : 0.89;
    const { tx, ty, scale } = transformRef.current;
    const newScale = Math.max(0.18, Math.min(3.5, scale * zoomFactor));

    transformRef.current.tx = mx - (mx - tx) * (newScale / scale);
    transformRef.current.ty = my - (my - ty) * (newScale / scale);
    transformRef.current.scale = newScale;

    setTelemetryZoom(`${Math.round(newScale * 100)}%`);
    setTelemetryCoords(
      `${Math.round(transformRef.current.tx)}, ${Math.round(transformRef.current.ty)}`
    );
  }, []);

  // UI Zoom Buttons
  const handleZoom = (dir: 'in' | 'out') => {
    const factor = dir === 'in' ? 1.25 : 0.8;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const { tx, ty, scale } = transformRef.current;
    const newScale = Math.max(0.18, Math.min(3.5, scale * factor));

    transformRef.current.tx = cx - (cx - tx) * (newScale / scale);
    transformRef.current.ty = cy - (cy - ty) * (newScale / scale);
    transformRef.current.scale = newScale;

    setTelemetryZoom(`${Math.round(newScale * 100)}%`);
    setTelemetryCoords(
      `${Math.round(transformRef.current.tx)}, ${Math.round(transformRef.current.ty)}`
    );
  };

  const handleResetView = () => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    transformRef.current = {
      tx: rect.width / 2,
      ty: rect.height / 2,
      scale: 0.85,
    };
    setTelemetryZoom('85%');
    setTelemetryCoords(`${Math.round(rect.width / 2)}, ${Math.round(rect.height / 2)}`);
  };

  const toggleMute = () => {
    audioEngine.toggleMute();
  };

  const hoveredLinks = useMemo(() => {
    if (!hoveredNode) return [];
    return relationships.filter(
      (r) => r.source === hoveredNode.id || r.target === hoveredNode.id
    );
  }, [hoveredNode, relationships]);

  const shouldShowHoverHUD = hoveredNode && (!selectedNodeId || selectedNodeId !== hoveredNode.id);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black select-none">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        className="w-full h-full block touch-none cursor-grab"
      />

      {/* Floating HUD Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 flex items-center gap-1.5 bg-zinc-950/85 backdrop-blur-xl border border-white/10 rounded-xl p-1.5 text-white font-mono z-20 text-xs shadow-xl">
        <div className="px-2.5 py-1 text-[10px] text-zinc-400 border-r border-white/10 hidden sm:block">
          ZOOM // {telemetryZoom}
        </div>
        <div className="px-2.5 py-1 text-[10px] text-zinc-400 border-r border-white/10 hidden sm:block">
          POS // {telemetryCoords}
        </div>
        <button
          onClick={toggleMute}
          title={isAudioMuted ? '开启交互声效' : '静音交互声效'}
          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
            isAudioMuted ? 'text-zinc-500 hover:text-zinc-300' : 'text-cyan-400 hover:text-white'
          }`}
        >
          {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={() => handleZoom('in')}
          title="放大 (Zoom In)"
          className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          +
        </button>
        <button
          onClick={() => handleZoom('out')}
          title="缩小 (Zoom Out)"
          className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          −
        </button>
        <button
          onClick={handleResetView}
          title="全景重置 (Reset View)"
          className="px-2.5 h-7 rounded-lg flex items-center justify-center text-[10px] tracking-wider uppercase text-zinc-300 hover:text-white hover:bg-white/10 border-l border-white/10 transition-colors"
        >
          RESET
        </button>
      </div>

      {/* Hover HUD Card with 300ms Dwell Protection & Soft Fade-In Animation */}
      {shouldShowHoverHUD && hoveredNode && mousePos && (
        <div
          className="pointer-events-none fixed z-30 w-80 bg-zinc-950/95 rounded-xl p-4 shadow-2xl backdrop-blur-xl font-sans text-white animate-tooltip-fade-in border"
          style={{
            left: `${Math.min(window.innerWidth - 340, mousePos.x + 22)}px`,
            top: `${Math.min(window.innerHeight - 280, mousePos.y + 22)}px`,
            boxShadow: `0 20px 45px -10px rgba(0, 0, 0, 0.9), 0 0 25px -4px ${hoveredNode.color}35`,
            borderColor: `${hoveredNode.color}50`,
          }}
        >
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: hoveredNode.color,
                  boxShadow: `0 0 10px ${hoveredNode.color}`,
                }}
              />
              <h4 className="text-sm font-bold tracking-wide font-mono">
                {hoveredNode.name}
              </h4>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">
              {hoveredNode.period.split('（')[0]}
            </span>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed mb-3">
            {hoveredNode.summary}
          </p>

          {hoveredLinks.length > 0 && (
            <div className="space-y-1.5 pt-1.5 border-t border-white/10">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
                <span>CONSTELLATION NETWORK ({hoveredLinks.length})</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
              <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                {hoveredLinks.slice(0, 5).map((rel) => {
                  const otherId = rel.source === hoveredNode.id ? rel.target : rel.source;
                  const otherNode = nodes.find((n) => n.id === otherId);
                  if (!otherNode) return null;

                  return (
                    <span
                      key={rel.id}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-zinc-300 flex items-center gap-1"
                    >
                      <span>{otherNode.name}</span>
                      <span className="opacity-60 text-[9px]">[{rel.label}]</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono tracking-wider text-cyan-400 uppercase">
            <span>CLICK TO LOCK TARGET & OPEN DOSSIER</span>
            <span>→</span>
          </div>
        </div>
      )}

      {/* Telemetry Legend (Bottom Left) */}
      <div className="absolute bottom-6 left-6 hidden md:flex flex-col gap-2 bg-zinc-950/85 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 text-xs text-zinc-400 z-10 max-w-xs font-mono shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px] text-white tracking-widest uppercase">
          <span>SYS // RELATION LOGIC</span>
          <span className="text-cyan-400">NOMINAL</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-[2px] bg-cyan-400 shadow-sm shadow-cyan-400" />
            <span className="text-zinc-300">传承 / 演进</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-[2px] border-b border-dashed border-rose-500" />
            <span className="text-zinc-300">对立 / 批判</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-[2px] border-b border-dotted border-white" />
            <span className="text-zinc-300">催生 / 反拨</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-[2px] bg-emerald-400" />
            <span className="text-zinc-300">融合 / 交汇</span>
          </div>
        </div>
      </div>
    </div>
  );
};

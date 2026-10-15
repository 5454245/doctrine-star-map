import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { IsmNode, IsmRelationship, CategoryType } from '../types/ism';

interface ConstellationCanvasProps {
  nodes: IsmNode[];
  relationships: IsmRelationship[];
  selectedNodeId: string | null;
  highlightedNodeId: string | null;
  filterCategory: CategoryType | 'all';
  searchQuery: string;
  onSelectNode: (node: IsmNode | null) => void;
  onHoverNode?: (nodeId: string | null) => void;
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
  const transformRef = useRef({ tx: 0, ty: 0, scale: 1 });
  const isDraggingCanvasRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const canvasMouseDownPosRef = useRef<{ x: number; y: number } | null>(null);
  const isCanvasMovedRef = useRef(false);
  const activeDraggedNodeRef = useRef<PhysicsNode | null>(null);
  const nodeDragStartScreenRef = useRef<{ x: number; y: number } | null>(null);

  // Hover state
  const [hoveredNode, setHoveredNode] = useState<IsmNode | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // Physics simulation nodes
  const physicsNodesRef = useRef<PhysicsNode[]>([]);
  const backgroundStarsRef = useRef<BackgroundStar[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  // Initialize or update physics nodes
  useEffect(() => {
    const existingMap = new Map<string, PhysicsNode>(
      physicsNodesRef.current.map((n) => [n.id, n])
    );

    physicsNodesRef.current = nodes.map((node) => {
      const existing = existingMap.get(node.id);
      if (existing) {
        existing.data = node;
        existing.targetX = node.initialPosition.x;
        existing.targetY = node.initialPosition.y;
        return existing;
      }
      return {
        id: node.id,
        x: node.initialPosition.x + (Math.random() - 0.5) * 40,
        y: node.initialPosition.y + (Math.random() - 0.5) * 40,
        vx: 0,
        vy: 0,
        targetX: node.initialPosition.x,
        targetY: node.initialPosition.y,
        radius: 24,
        data: node,
      };
    });
  }, [nodes]);

  // Generate background ambient stars once
  useEffect(() => {
    const stars: BackgroundStar[] = [];
    for (let i = 0; i < 240; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 3800,
        y: (Math.random() - 0.5) * 2800,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
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
        scale: 0.95,
      };
    }
  }, []);

  // Smoothly Fly camera to specific node when requested
  useEffect(() => {
    if (!flyToNodeId || !canvasRef.current) return;
    const targetNode = physicsNodesRef.current.find((n) => n.id === flyToNodeId);
    if (!targetNode) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const targetTx = rect.width / 2 - targetNode.x * 1.15;
    const targetTy = rect.height / 2 - targetNode.y * 1.15;
    const targetScale = 1.15;

    const startTx = transformRef.current.tx;
    const startTy = transformRef.current.ty;
    const startScale = transformRef.current.scale;
    const startTime = performance.now();
    const duration = 500;

    const animateCamera = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      transformRef.current.tx = startTx + (targetTx - startTx) * ease;
      transformRef.current.ty = startTy + (targetTy - startTy) * ease;
      transformRef.current.scale = startScale + (targetScale - startScale) * ease;

      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      }
    };

    requestAnimationFrame(animateCamera);
  }, [flyToNodeId]);

  // Main Render & Physics Loop
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

      // 1. Clear background
      ctx.fillStyle = '#0c0a09';
      ctx.fillRect(0, 0, width, height);

      // Deep space radial nebula gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        80,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.85
      );
      gradient.addColorStop(0, 'rgba(30, 27, 24, 0.95)');
      gradient.addColorStop(0.45, 'rgba(14, 12, 10, 0.98)');
      gradient.addColorStop(1, '#070605');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      // Apply Camera Viewport transformation
      ctx.translate(tx, ty);
      ctx.scale(scale, scale);

      // 2. Render background ambient stars with subtle twinkle
      const stars = backgroundStarsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const twinkle = Math.sin(time * 2 + i) * 0.25 + 0.75;
        ctx.fillStyle = `rgba(226, 232, 240, ${s.alpha * twinkle * 0.6})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Physics step: Soft springs towards target + node-node soft repulsion
      const pNodes = physicsNodesRef.current;
      for (let i = 0; i < pNodes.length; i++) {
        const nodeA = pNodes[i];
        if (nodeA.isDragging) continue;

        // Spring towards initial anchor
        const dx = nodeA.targetX - nodeA.x;
        const dy = nodeA.targetY - nodeA.y;
        nodeA.vx += dx * 0.04;
        nodeA.vy += dy * 0.04;

        // Repulsion from other nodes to prevent heavy overlap
        for (let j = i + 1; j < pNodes.length; j++) {
          const nodeB = pNodes[j];
          const rx = nodeB.x - nodeA.x;
          const ry = nodeB.y - nodeA.y;
          const distSq = rx * rx + ry * ry;
          const minDist = 135;
          if (distSq < minDist * minDist && distSq > 0.001) {
            const dist = Math.sqrt(distSq);
            const force = ((minDist - dist) / dist) * 0.15;
            const fx = rx * force;
            const fy = ry * force;
            if (!nodeA.isDragging) {
              nodeA.vx -= fx;
              nodeA.vy -= fy;
            }
            if (!nodeB.isDragging) {
              nodeB.vx += fx;
              nodeB.vy += fy;
            }
          }
        }

        // Apply friction/damping
        nodeA.vx *= 0.82;
        nodeA.vy *= 0.82;
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
      }

      // Fast lookup for nodes
      const nodeMap = new Map<string, PhysicsNode>();
      for (const n of pNodes) {
        nodeMap.set(n.id, n);
      }

      // 1. Determine active focus node:
      // When a node is selected (selectedNodeId is active):
      // The selected node remains the locked focal center!
      // Pointing or hovering on non-highlighted stars must NOT spawn lines or badges.
      const isSelectedMode = !!selectedNodeId;
      const activeId = isSelectedMode
        ? selectedNodeId
        : (hoveredNode?.id || highlightedNodeId || null);

      const connectedNodeIds = new Set<string>();
      if (activeId) {
        connectedNodeIds.add(activeId);
        relationships.forEach((rel) => {
          if (rel.source === activeId) connectedNodeIds.add(rel.target);
          if (rel.target === activeId) connectedNodeIds.add(rel.source);
        });
      }

      // If in selected mode, check if hovering over one of its direct connected neighbors
      const focusedNeighborId =
        isSelectedMode && hoveredNode && connectedNodeIds.has(hoveredNode.id) && hoveredNode.id !== selectedNodeId
          ? hoveredNode.id
          : null;

      // 4. Draw Constellation Relationship Lines
      // Draw background / dimmed lines first, then foreground highlighted lines on top
      const backgroundLines: IsmRelationship[] = [];
      const highlightedLines: IsmRelationship[] = [];

      for (const rel of relationships) {
        const src = nodeMap.get(rel.source);
        const tgt = nodeMap.get(rel.target);
        if (!src || !tgt) continue;

        const srcMatchesCategory = filterCategory === 'all' || src.data.category === filterCategory;
        const tgtMatchesCategory = filterCategory === 'all' || tgt.data.category === filterCategory;
        if (!srcMatchesCategory && !tgtMatchesCategory) continue;

        const isRelatedToActive = activeId && (rel.source === activeId || rel.target === activeId);
        if (isRelatedToActive) {
          highlightedLines.push(rel);
        } else {
          backgroundLines.push(rel);
        }
      }

      // Draw normal / background lines
      for (const rel of backgroundLines) {
        const src = nodeMap.get(rel.source)!;
        const tgt = nodeMap.get(rel.target)!;
        const isDimmed = !!activeId;

        let strokeColor = isDimmed ? 'rgba(68, 64, 60, 0.12)' : 'rgba(168, 162, 158, 0.22)';
        let lineWidth = isDimmed ? 0.75 : 1;
        let lineDash: number[] = [];

        if (rel.type === 'opposition') lineDash = [6, 4];
        else if (rel.type === 'catalyst') lineDash = [3, 3];
        else if (rel.type === 'dialectical') lineDash = [8, 3, 2, 3];

        ctx.save();
        ctx.beginPath();
        ctx.setLineDash(lineDash);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(src.x, src.y);
        ctx.lineTo(tgt.x, tgt.y);
        ctx.stroke();
        ctx.restore();
      }

      // Draw highlighted connected lines on TOP with vibrant glow & badges
      for (const rel of highlightedLines) {
        const src = nodeMap.get(rel.source)!;
        const tgt = nodeMap.get(rel.target)!;

        // Semantic colors for highlighted connections
        let strokeColor = '#38bdf8'; // sky blue (evolution)
        let typeBadgeBg = 'rgba(12, 44, 75, 0.95)';
        let typeBadgeBorder = '#38bdf8';
        let typeLabel = '传承/演进';
        let lineDash: number[] = [];

        if (rel.type === 'evolution') {
          strokeColor = '#38bdf8';
          typeBadgeBg = 'rgba(8, 47, 73, 0.95)';
          typeBadgeBorder = '#38bdf8';
          typeLabel = '传承';
        } else if (rel.type === 'opposition') {
          strokeColor = '#ef4444';
          typeBadgeBg = 'rgba(69, 10, 10, 0.95)';
          typeBadgeBorder = '#ef4444';
          typeLabel = '对立';
          lineDash = [6, 3];
        } else if (rel.type === 'catalyst') {
          strokeColor = '#f59e0b';
          typeBadgeBg = 'rgba(69, 26, 3, 0.95)';
          typeBadgeBorder = '#f59e0b';
          typeLabel = '催生';
          lineDash = [4, 3];
        } else if (rel.type === 'fusion') {
          strokeColor = '#10b981';
          typeBadgeBg = 'rgba(6, 44, 31, 0.95)';
          typeBadgeBorder = '#10b981';
          typeLabel = '融合';
        } else if (rel.type === 'dialectical') {
          strokeColor = '#c084fc';
          typeBadgeBg = 'rgba(46, 16, 75, 0.95)';
          typeBadgeBorder = '#c084fc';
          typeLabel = '辩证';
          lineDash = [8, 3, 2, 3];
        }

        ctx.save();

        // 1. Outer glow pass
        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.shadowColor = strokeColor;
        ctx.shadowBlur = 12;
        ctx.lineWidth = 3.5;
        ctx.setLineDash(lineDash);
        ctx.moveTo(src.x, src.y);
        ctx.lineTo(tgt.x, tgt.y);
        ctx.stroke();

        // 2. Crisp inner core line
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.shadowBlur = 0;
        ctx.lineWidth = 1.5;
        ctx.setLineDash(lineDash);
        ctx.moveTo(src.x, src.y);
        ctx.lineTo(tgt.x, tgt.y);
        ctx.stroke();

        // 3. Draw multiple traveling energy photon sparks along the line
        for (let p = 0; p < 2; p++) {
          const pulseOffset = ((time * 0.9) + p * 0.5) % 1;
          const px = src.x + (tgt.x - src.x) * pulseOffset;
          const py = src.y + (tgt.y - src.y) * pulseOffset;

          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = strokeColor;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // 4. Sleek, non-crowded Relationship Label Badge
        const lineDist = Math.hypot(tgt.x - src.x, tgt.y - src.y);

        // Only draw badge if the line has enough space (>= 85px) to prevent clutter
        if (lineDist >= 85) {
          // Push badge towards the neighbor node (62% distance from active center node)
          // so it NEVER collides with the active center node and its name!
          const badgeRatio = activeId === src.id ? 0.62 : activeId === tgt.id ? 0.38 : 0.5;
          const badgeX = src.x + (tgt.x - src.x) * badgeRatio;
          const badgeY = src.y + (tgt.y - src.y) * badgeRatio;

          // Short, high-signal relation tag
          const compactLabel = typeLabel;

          ctx.font = 'bold 10px "Plus Jakarta Sans", "Noto Serif SC", sans-serif';
          const textMetrics = ctx.measureText(compactLabel);
          const badgeW = textMetrics.width + 12;
          const badgeH = 16;
          const radius = 4;

          ctx.save();
          ctx.translate(badgeX, badgeY);

          ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
          ctx.shadowBlur = 6;
          ctx.fillStyle = typeBadgeBg;
          ctx.strokeStyle = typeBadgeBorder;
          ctx.lineWidth = 1.2;

          ctx.beginPath();
          ctx.roundRect(-badgeW / 2, -badgeH / 2, badgeW, badgeH, radius);
          ctx.fill();
          ctx.stroke();

          ctx.shadowBlur = 0;
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(compactLabel, 0, 0);

          ctx.restore();
        }

        ctx.restore();
      }

      // 5. Render Constellation Star Nodes
      // Sort nodes so highlighted and hovered ones render on top
      const sortedNodes = [...pNodes].sort((a, b) => {
        const aIsActive = a.id === activeId ? 2 : connectedNodeIds.has(a.id) ? 1 : 0;
        const bIsActive = b.id === activeId ? 2 : connectedNodeIds.has(b.id) ? 1 : 0;
        return aIsActive - bIsActive;
      });

      for (const node of sortedNodes) {
        const isHovered = hoveredNode?.id === node.id;
        const isSelected = selectedNodeId === node.id;
        const isCenterActive = activeId === node.id;
        const isDirectlyConnected = activeId && connectedNodeIds.has(node.id) && !isCenterActive;

        const matchesCategory = filterCategory === 'all' || node.data.category === filterCategory;
        const matchesSearch =
          !searchQuery.trim() ||
          node.data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          node.data.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          node.data.summary.toLowerCase().includes(searchQuery.toLowerCase());

        const isDimmed = activeId
          ? !connectedNodeIds.has(node.id)
          : !matchesCategory || !matchesSearch;

        ctx.save();
        ctx.translate(node.x, node.y);

        const nodeColor = node.data.color;
        const currentRadius = isCenterActive ? 20 : isDirectlyConnected ? 18 : 16;

        // A. Primary Focused Node (Hovered or Selected)
        if (isCenterActive) {
          // Intense pulsating halo
          const pulse = Math.sin(time * 3.5) * 4 + 32;
          const haloGrad = ctx.createRadialGradient(0, 0, 6, 0, 0, pulse);
          haloGrad.addColorStop(0, `${nodeColor}bb`);
          haloGrad.addColorStop(0.5, `${nodeColor}33`);
          haloGrad.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.fillStyle = haloGrad;
          ctx.arc(0, 0, pulse, 0, Math.PI * 2);
          ctx.fill();

          // Outer targeting reticle ring
          ctx.beginPath();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.8;
          ctx.setLineDash([4, 4]);
          ctx.arc(0, 0, currentRadius + 7, 0, Math.PI * 2);
          ctx.stroke();
        } else if (isDirectlyConnected) {
          // B. Direct Neighbor Nodes (Connected to Hovered/Selected)
          ctx.beginPath();
          ctx.strokeStyle = nodeColor;
          ctx.shadowColor = nodeColor;
          ctx.shadowBlur = 8;
          ctx.lineWidth = 1.8;
          ctx.arc(0, 0, currentRadius + 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        // C. Star Core Disc
        ctx.beginPath();
        const coreGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, currentRadius);
        if (isDimmed) {
          coreGrad.addColorStop(0, '#57534e');
          coreGrad.addColorStop(0.5, '#292524');
          coreGrad.addColorStop(1, '#1c1917');
          ctx.shadowBlur = 0;
        } else {
          coreGrad.addColorStop(0, '#ffffff');
          coreGrad.addColorStop(0.35, nodeColor);
          coreGrad.addColorStop(1, '#1c1917');
          ctx.shadowColor = nodeColor;
          ctx.shadowBlur = isCenterActive ? 20 : 8;
        }
        ctx.fillStyle = coreGrad;
        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core hairline border
        ctx.strokeStyle = isDimmed ? 'rgba(120, 113, 108, 0.15)' : 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // D. Node Label (Chinese Name) with legible backdrop pill
        ctx.shadowBlur = 0;
        ctx.font = isCenterActive
          ? 'bold 13px "Noto Serif SC", serif'
          : isDirectlyConnected
          ? 'bold 12px "Noto Serif SC", serif'
          : '500 11px "Noto Serif SC", serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const nameMetrics = ctx.measureText(node.data.name);
        const nameW = nameMetrics.width;
        const pillY = currentRadius + 14;

        if (!isDimmed) {
          // Translucent dark pill background
          ctx.fillStyle = isCenterActive
            ? 'rgba(12, 10, 9, 0.94)'
            : isDirectlyConnected
            ? 'rgba(12, 10, 9, 0.88)'
            : 'rgba(12, 10, 9, 0.72)';
          ctx.strokeStyle = isCenterActive
            ? nodeColor
            : isDirectlyConnected
            ? 'rgba(255, 255, 255, 0.35)'
            : 'rgba(120, 113, 108, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(-nameW / 2 - 6, pillY - 10, nameW + 12, 20, 5);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isCenterActive
            ? '#ffffff'
            : isDirectlyConnected
            ? '#f5f5f4'
            : '#e7e5e4';
          ctx.fillText(node.data.name, 0, pillY);
        } else {
          ctx.fillStyle = 'rgba(120, 113, 108, 0.3)';
          ctx.fillText(node.data.name, 0, pillY);
        }

        // Subtitle (English Name) ONLY for center active node when zoomed
        if (isCenterActive && scale >= 0.75) {
          ctx.font = '9px "Plus Jakarta Sans", sans-serif';
          ctx.fillStyle = 'rgba(254, 240, 138, 0.9)';
          ctx.fillText(node.data.englishName, 0, pillY + 16);
        }

        ctx.restore();
      }

      ctx.restore();

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    animationFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [
    relationships,
    selectedNodeId,
    highlightedNodeId,
    hoveredNode,
    filterCategory,
    searchQuery,
  ]);

  // Coordinate conversion helper: Screen coordinates -> World coordinates
  const screenToWorld = useCallback(
    (screenX: number, screenY: number) => {
      const { tx, ty, scale } = transformRef.current;
      return {
        x: (screenX - tx) / scale,
        y: (screenY - ty) / scale,
      };
    },
    []
  );

  // Mouse move handler: find node hit for hover & handle dragging
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    setMousePos({ x: e.clientX, y: e.clientY });

    // Handle Canvas Pan
    if (isDraggingCanvasRef.current && !activeDraggedNodeRef.current) {
      const dx = screenX - dragStartRef.current.x;
      const dy = screenY - dragStartRef.current.y;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        isCanvasMovedRef.current = true;
      }
      transformRef.current.tx += dx;
      transformRef.current.ty += dy;
      dragStartRef.current = { x: screenX, y: screenY };
      return;
    }

    // Handle Node Dragging
    if (activeDraggedNodeRef.current) {
      const world = screenToWorld(screenX, screenY);
      activeDraggedNodeRef.current.x = world.x;
      activeDraggedNodeRef.current.y = world.y;
      activeDraggedNodeRef.current.targetX = world.x;
      activeDraggedNodeRef.current.targetY = world.y;
      return;
    }

    // Check hit test for hover with generous radius
    const world = screenToWorld(screenX, screenY);
    let hit: PhysicsNode | null = null;
    for (const node of physicsNodesRef.current) {
      const dist = Math.hypot(node.x - world.x, node.y - world.y);
      if (dist <= node.radius + 8) {
        hit = node;
        break;
      }
    }

    if (hit) {
      if (hoveredNode?.id !== hit.data.id) {
        setHoveredNode(hit.data);
        onHoverNode?.(hit.data.id);
      }
      canvas.style.cursor = 'pointer';
    } else {
      if (hoveredNode !== null) {
        setHoveredNode(null);
        onHoverNode?.(null);
      }
      canvas.style.cursor = isDraggingCanvasRef.current ? 'grabbing' : 'grab';
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    const world = screenToWorld(screenX, screenY);

    // Check if clicked a node
    let hit: PhysicsNode | null = null;
    for (const node of physicsNodesRef.current) {
      const dist = Math.hypot(node.x - world.x, node.y - world.y);
      if (dist <= node.radius + 8) {
        hit = node;
        break;
      }
    }

    if (hit) {
      activeDraggedNodeRef.current = hit;
      hit.isDragging = true;
      nodeDragStartScreenRef.current = { x: screenX, y: screenY };
    } else {
      isDraggingCanvasRef.current = true;
      isCanvasMovedRef.current = false;
      dragStartRef.current = { x: screenX, y: screenY };
      canvasMouseDownPosRef.current = { x: screenX, y: screenY };
      canvas.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const screenX = e.clientX - rect.left;
      const screenY = e.clientY - rect.top;

      if (activeDraggedNodeRef.current) {
        activeDraggedNodeRef.current.isDragging = false;

        const start = nodeDragStartScreenRef.current;
        const dragDist = start ? Math.hypot(screenX - start.x, screenY - start.y) : 0;

        // Pure click (< 5px) triggers onSelectNode (opens details drawer)
        // Dragging (>= 5px) only moves the star in space, does NOT auto-open modal!
        if (dragDist < 5) {
          onSelectNode(activeDraggedNodeRef.current.data);
        }

        activeDraggedNodeRef.current = null;
        nodeDragStartScreenRef.current = null;
      } else if (isDraggingCanvasRef.current) {
        // Calculate total travel from initial mouse down
        const start = canvasMouseDownPosRef.current;
        const totalTravel = start ? Math.hypot(screenX - start.x, screenY - start.y) : 0;

        // CRITICAL FIX: Only if the user made a pure static click on empty space (< 5px and no drag delta)
        // do we deselect. If the user was dragging/panning the constellation (totalTravel >= 5),
        // NEVER exit the detail view!
        if (totalTravel < 5 && !isCanvasMovedRef.current && selectedNodeId) {
          onSelectNode(null);
        }

        canvasMouseDownPosRef.current = null;
        isCanvasMovedRef.current = false;
      }
    }

    isDraggingCanvasRef.current = false;
    if (canvas) {
      canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
    }
  };

  // Zoom with Wheel
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const oldScale = transformRef.current.scale;
    const newScale = Math.min(2.5, Math.max(0.4, oldScale * zoomFactor));

    // Zoom centered on cursor
    transformRef.current.tx = screenX - (screenX - transformRef.current.tx) * (newScale / oldScale);
    transformRef.current.ty = screenY - (screenY - transformRef.current.ty) * (newScale / oldScale);
    transformRef.current.scale = newScale;
  };

  // Reset View action
  const handleResetView = () => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    transformRef.current = {
      tx: rect.width / 2,
      ty: rect.height / 2,
      scale: 0.95,
    };
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const factor = direction === 'in' ? 1.25 : 0.8;
    const oldScale = transformRef.current.scale;
    const newScale = Math.min(2.5, Math.max(0.4, oldScale * factor));

    transformRef.current.tx = cx - (cx - transformRef.current.tx) * (newScale / oldScale);
    transformRef.current.ty = cy - (cy - transformRef.current.ty) * (newScale / oldScale);
    transformRef.current.scale = newScale;
  };

  // Find all directly connected relationships for hovered node
  const hoveredLinks = hoveredNode
    ? relationships.filter(
        (r) => r.source === hoveredNode.id || r.target === hoveredNode.id
      )
    : [];

  // Set of connected nodes when in selected mode
  const selectedConnectedIds = useMemo(() => {
    if (!selectedNodeId) return null;
    const set = new Set<string>([selectedNodeId]);
    relationships.forEach((rel) => {
      if (rel.source === selectedNodeId) set.add(rel.target);
      if (rel.target === selectedNodeId) set.add(rel.source);
    });
    return set;
  }, [selectedNodeId, relationships]);

  // Only show hover HUD if:
  // 1. In free exploration mode (!selectedNodeId)
  // 2. OR when in selected mode, hovered node is the selected node itself or one of its directly connected highlighted stars
  // Un-highlighted stars will NOT trigger the hover HUD card!
  const shouldShowHoverHUD =
    hoveredNode &&
    mousePos &&
    !activeDraggedNodeRef.current &&
    (!selectedConnectedIds || selectedConnectedIds.has(hoveredNode.id));

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-stone-950">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        className="w-full h-full block touch-none cursor-grab"
      />

      {/* Floating Canvas Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-stone-900/85 backdrop-blur-md border border-stone-800 rounded-lg p-1.5 shadow-xl z-20">
        <button
          onClick={() => handleZoom('in')}
          title="放大 (Zoom In)"
          className="w-8 h-8 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors text-base"
        >
          +
        </button>
        <button
          onClick={() => handleZoom('out')}
          title="缩小 (Zoom Out)"
          className="w-8 h-8 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors text-base"
        >
          −
        </button>
        <div className="w-[1px] h-4 bg-stone-700" />
        <button
          onClick={handleResetView}
          title="重置全景视角 (Reset View)"
          className="px-2.5 h-8 flex items-center justify-center text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors whitespace-nowrap"
        >
          全景重置
        </button>
      </div>

      {/* Dynamic Hover HUD Card: Instant Glimpse of the Connected Constellation */}
      {shouldShowHoverHUD && hoveredNode && mousePos && (
        <div
          className="pointer-events-none fixed z-30 w-80 bg-stone-900/95 border border-stone-700/90 rounded-xl p-4 shadow-2xl backdrop-blur-md transition-opacity duration-150"
          style={{
            left: `${Math.min(window.innerWidth - 340, mousePos.x + 22)}px`,
            top: `${Math.min(window.innerHeight - 280, mousePos.y + 22)}px`,
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shadow-lg"
                style={{
                  backgroundColor: hoveredNode.color,
                  boxShadow: `0 0 10px ${hoveredNode.color}`,
                }}
              />
              <h4 className="text-base font-bold text-stone-100 font-serif-sc">
                {hoveredNode.name}
              </h4>
            </div>
            <span className="text-[11px] text-stone-400 font-mono">
              {hoveredNode.period.split('（')[0]}
            </span>
          </div>

          {/* 1-sentence bottom-line essence */}
          <p className="text-xs text-stone-300 leading-relaxed mb-3">
            {hoveredNode.summary}
          </p>

          {/* Connected isms mini tags */}
          {hoveredLinks.length > 0 && (
            <div className="space-y-1.5 pt-1 border-t border-stone-800/80">
              <div className="flex items-center justify-between text-[10px] font-semibold text-amber-400/90 tracking-wider uppercase">
                <span>星网直连 ({hoveredLinks.length} 派)</span>
                <span>连线已在画布高亮</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {hoveredLinks.slice(0, 5).map((rel) => {
                  const otherId = rel.source === hoveredNode.id ? rel.target : rel.source;
                  const otherNode = nodes.find((n) => n.id === otherId);
                  if (!otherNode) return null;

                  let borderCol = 'border-sky-500/50 text-sky-300 bg-sky-950/40';
                  if (rel.type === 'opposition') borderCol = 'border-red-500/50 text-red-300 bg-red-950/40';
                  else if (rel.type === 'catalyst') borderCol = 'border-amber-500/50 text-amber-300 bg-amber-950/40';
                  else if (rel.type === 'fusion') borderCol = 'border-emerald-500/50 text-emerald-300 bg-emerald-950/40';
                  else if (rel.type === 'dialectical') borderCol = 'border-purple-500/50 text-purple-300 bg-purple-950/40';

                  return (
                    <span
                      key={rel.id}
                      className={`text-[10px] px-1.5 py-0.5 rounded border ${borderCol} flex items-center gap-1`}
                    >
                      <span className="font-semibold">{otherNode.name}</span>
                      <span className="opacity-75 text-[9px]">({rel.label})</span>
                    </span>
                  );
                })}
                {hoveredLinks.length > 5 && (
                  <span className="text-[10px] text-stone-500 px-1 py-0.5">
                    +{hoveredLinks.length - 5}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="mt-3 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-amber-400">
            <span>点击展开全维思想档案</span>
            <span>→</span>
          </div>
        </div>
      )}

      {/* Star Constellation Legend Overlay (Bottom Left) */}
      <div className="absolute bottom-6 left-6 hidden md:flex flex-col gap-2 bg-stone-900/85 backdrop-blur-md border border-stone-800 rounded-lg p-3 text-xs text-stone-400 z-10 max-w-sm">
        <span className="text-[11px] font-semibold text-stone-300 tracking-wider uppercase">
          关系脉络连线图例
        </span>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-sky-400 inline-block shadow-sm shadow-sky-400" />
            <span>传承 / 演进</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] border-b border-dashed border-red-500 inline-block" />
            <span>对立 / 批判</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] border-b border-dotted border-amber-400 inline-block" />
            <span>催生 / 反拨</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-emerald-500 inline-block" />
            <span>融合 / 交汇</span>
          </div>
        </div>
        <p className="text-[10px] text-stone-500 mt-1 border-t border-stone-800 pt-1.5 leading-normal">
          悬停星辰即刻照亮其所有思想连线与关系标签；拖拽星体可调整星图引力；滚轮缩放。
        </p>
      </div>
    </div>
  );
};

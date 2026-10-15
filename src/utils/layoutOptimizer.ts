import { IsmNode } from '../types/ism';

interface Point {
  id: string;
  x: number;
  y: number;
}

// Compute deterministic, collision-free, spacious coordinates for all nodes
export function computeRelaxedConstellationLayout(nodes: IsmNode[]): Map<string, { x: number; y: number }> {
  const result = new Map<string, { x: number; y: number }>();
  if (!nodes || nodes.length === 0) return result;

  // 1. Initial coordinates scaled outward with subtle deterministic angular spread
  const pts: Point[] = nodes.map((node, index) => {
    // Generously scale raw coordinates outward (2.25x) to eliminate cramped clustering
    let rawX = (node.initialPosition?.x ?? Math.cos(index) * 450) * 2.25;
    let rawY = (node.initialPosition?.y ?? Math.sin(index) * 450) * 2.25;

    // Disperse any identical initial coordinates
    const disperseAngle = (index / nodes.length) * Math.PI * 2;
    rawX += Math.cos(disperseAngle) * 25;
    rawY += Math.sin(disperseAngle) * 25;

    return {
      id: node.id,
      x: rawX,
      y: rawY,
    };
  });

  // 2. Iterative collision avoidance and relaxation
  // Guaranteed minimum distance between ANY two nodes is 135px
  const MIN_DIST = 135;
  const MIN_DIST_SQ = MIN_DIST * MIN_DIST;
  const iterations = 90;

  for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i];
        const b = pts[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dSq = dx * dx + dy * dy;

        // Break exact overlapping coordinates
        if (dSq < 0.04) {
          dx = Math.sin(i * 19 + j * 7) * 4 || 2;
          dy = Math.cos(i * 23 + j * 11) * 4 || 2;
          dSq = dx * dx + dy * dy;
        }

        if (dSq < MIN_DIST_SQ) {
          const d = Math.sqrt(dSq);
          const push = ((MIN_DIST - d) / d) * 0.52;
          const fx = dx * push;
          const fy = dy * push;
          a.x -= fx;
          a.y -= fy;
          b.x += fx;
          b.y += fy;
        }
      }
    }
  }

  // Populate map with rounded, beautiful coordinates
  for (let i = 0; i < pts.length; i++) {
    result.set(pts[i].id, {
      x: Math.round(pts[i].x),
      y: Math.round(pts[i].y),
    });
  }

  return result;
}

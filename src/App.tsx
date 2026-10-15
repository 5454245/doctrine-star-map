import React, { useState, useEffect } from 'react';
import { ISMS_DATA, ISM_RELATIONSHIPS } from './data/ismsData';
import { IsmNode, CategoryType, ViewMode } from './types/ism';
import { TopNav } from './components/TopNav';
import { FilterToolbar } from './components/FilterToolbar';
import { ConstellationCanvas } from './components/ConstellationCanvas';
import { TimelineView } from './components/TimelineView';
import { CompassView } from './components/CompassView';
import { IsmDetailModal } from './components/IsmDetailModal';
import { IsmComparisonModal } from './components/IsmComparisonModal';
import { PhilosophyQuizModal } from './components/PhilosophyQuizModal';
import { MusicGeneratorModal } from './components/MusicGeneratorModal';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('constellation');
  const [filterCategory, setFilterCategory] = useState<CategoryType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-activate cosmic ambient background sound on first user gesture
  useEffect(() => {
    const handleFirstGesture = () => {
      if (!audioEngine.getIsPlaying() && !audioEngine.getMuted()) {
        audioEngine.playBackgroundMusic();
      }
    };
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });
    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  // Selected node for detail drawer
  const [selectedNode, setSelectedNode] = useState<IsmNode | null>(null);
  const [flyToNodeId, setFlyToNodeId] = useState<string | null>(null);

  // Modals
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [compareNodes, setCompareNodes] = useState<{ nodeA: IsmNode; nodeB?: IsmNode }>({
    nodeA: ISMS_DATA[0],
  });
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [musicTargetNode, setMusicTargetNode] = useState<IsmNode | null>(null);

  // Select node handler
  const handleSelectNode = (node: IsmNode | null) => {
    setSelectedNode(node);
    if (node) {
      setFlyToNodeId(node.id);
      // Keep user in their chosen view (timeline, compass, or constellation)
      // to allow localized exploration and positioning
    }
  };

  // Open comparison modal
  const handleOpenCompare = (nodeA?: IsmNode, nodeB?: IsmNode) => {
    const firstNode = nodeA || selectedNode || ISMS_DATA[0];
    setCompareNodes({ nodeA: firstNode, nodeB });
    setIsCompareOpen(true);
  };

  // Open music generator modal
  const handleOpenMusic = (node?: IsmNode) => {
    setMusicTargetNode(node || selectedNode || null);
    setIsMusicOpen(true);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* 1. Universal Top Navigation Bar (3-Zone Contract) */}
      <TopNav
        currentView={currentView}
        onSelectView={setCurrentView}
        onOpenCompare={() => handleOpenCompare()}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenMusic={() => handleOpenMusic()}
      />

      {/* 2. Workspace Filter & Search Bar */}
      <FilterToolbar
        currentCategory={filterCategory}
        onSelectCategory={setFilterCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentView={currentView}
        onSelectView={setCurrentView}
        totalCount={ISMS_DATA.length}
        nodes={ISMS_DATA}
        relationships={ISM_RELATIONSHIPS}
        onSelectNode={handleSelectNode}
      />

      {/* 3. Main Stage Content based on currentView */}
      <main className="flex-1 relative w-full h-full overflow-hidden">
        {currentView === 'constellation' && (
          <ConstellationCanvas
            nodes={ISMS_DATA}
            relationships={ISM_RELATIONSHIPS}
            selectedNodeId={selectedNode?.id || null}
            highlightedNodeId={null}
            filterCategory={filterCategory}
            searchQuery={searchQuery}
            onSelectNode={handleSelectNode}
            flyToNodeId={flyToNodeId}
          />
        )}

        {currentView === 'timeline' && (
          <TimelineView
            nodes={ISMS_DATA}
            relationships={ISM_RELATIONSHIPS}
            searchQuery={searchQuery}
            selectedNodeId={selectedNode?.id || null}
            filterCategory={filterCategory}
            onSelectNode={handleSelectNode}
          />
        )}

        {currentView === 'compass' && (
          <CompassView
            nodes={ISMS_DATA}
            searchQuery={searchQuery}
            selectedNodeId={selectedNode?.id || null}
            filterCategory={filterCategory}
            onSelectNode={handleSelectNode}
          />
        )}

        {/* 4. Slide-out Ism Detail Drawer / Modal */}
        {selectedNode && (
          <IsmDetailModal
            node={selectedNode}
            allNodes={ISMS_DATA}
            relationships={ISM_RELATIONSHIPS}
            onClose={() => setSelectedNode(null)}
            onSelectNode={handleSelectNode}
            onOpenCompare={(nodeA) => handleOpenCompare(nodeA)}
            onOpenMusic={(node) => handleOpenMusic(node)}
          />
        )}

        {/* 5. Ideology Comparison & Dialectic Modal */}
        {isCompareOpen && (
          <IsmComparisonModal
            initialNodeA={compareNodes.nodeA}
            initialNodeB={compareNodes.nodeB}
            allNodes={ISMS_DATA}
            relationships={ISM_RELATIONSHIPS}
            onClose={() => setIsCompareOpen(false)}
          />
        )}

        {/* 6. Philosophy Resonance Quiz Modal */}
        {isQuizOpen && (
          <PhilosophyQuizModal
            allNodes={ISMS_DATA}
            onClose={() => setIsQuizOpen(false)}
            onSelectNode={handleSelectNode}
            onOpenCompare={(nodeA, nodeB) => handleOpenCompare(nodeA, nodeB)}
          />
        )}

        {/* 7. Era Soundtrack Music Generator Modal (Lyria 3) */}
        {isMusicOpen && (
          <MusicGeneratorModal
            currentIsm={musicTargetNode}
            onClose={() => setIsMusicOpen(false)}
          />
        )}
      </main>
    </div>
  );
}

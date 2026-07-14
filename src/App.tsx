import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppStore } from './store/useAppStore';
import { useCases } from './data/useCases';
import { LandingPage } from './components/landing/LandingPage';
import { CtaModal } from './components/shared/CtaModal';
import { Storefront } from './components/storefront/Storefront';

function App() {
  const view = useAppStore(s => s.view);
  const setView = useAppStore(s => s.setView);
  const setSearchQuery = useAppStore(s => s.setSearchQuery);

  // Deep link: /?prompt=<id> opens the library filtered to that single prompt.
  useEffect(() => {
    const promptId = new URLSearchParams(window.location.search).get('prompt');
    if (!promptId) return;
    const uc = useCases.find(u => String(u.id) === promptId);
    if (uc) {
      setSearchQuery(uc.title);
      setView('browse');
    }
  }, [setView, setSearchQuery]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      <div>
        <AnimatePresence mode="wait">
          {view === 'landing' && <LandingPage key="landing" />}
          {view === 'browse'  && <Storefront  key="browse"  />}
        </AnimatePresence>
      </div>

      <CtaModal />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../store/useAppStore';
import { CATEGORY_COLOR } from '../../data/categories';
import type { UseCase } from '../../data/useCases';
import { ExportButton } from '../shared/ExportButton';

function BasketItem({ uc }: { uc: UseCase }) {
  const removeFromToolkit = useAppStore(s => s.removeFromToolkit);
  const [copied, setCopied] = useState(false);

  const copyPrompt = () => {
    navigator.clipboard.writeText(uc.prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="rounded-xl p-3.5 flex flex-col gap-1.5"
      style={{ background: 'var(--bg-page)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
              style={{ background: `${CATEGORY_COLOR[uc.cat]}18`, color: CATEGORY_COLOR[uc.cat] }}
            >
              {uc.cat}
            </span>
          </div>
          <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
            {uc.title}
          </p>
        </div>
        <button
          onClick={() => removeFromToolkit(uc.id)}
          aria-label={`Remove ${uc.title}`}
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(0,0,0,0.06)', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 11 }}
        >
          ✕
        </button>
      </div>

      <p
        className="hide-scrollbar text-xs font-mono leading-relaxed whitespace-pre-wrap"
        style={{ color: 'var(--text-secondary)', maxHeight: '7rem', overflowY: 'auto' }}
      >
        {uc.prompt}
      </p>

      <button
        onClick={copyPrompt}
        className="self-start mt-0.5 text-xs font-semibold rounded-full px-3 py-1 transition-colors"
        style={{
          background: copied ? 'rgba(52,199,89,0.12)' : 'rgba(0,113,227,0.10)',
          color: copied ? 'var(--apple-green)' : 'var(--apple-blue)',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label={`Copy the ${uc.title} prompt`}
      >
        {copied ? '✓ Copied' : 'Copy prompt'}
      </button>
    </motion.div>
  );
}

export function ToolkitDrawer() {
  const { isToolkitOpen, setToolkitOpen, savedCases } = useAppStore();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setToolkitOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [setToolkitOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isToolkitOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isToolkitOpen]);

  return (
    <AnimatePresence>
      {isToolkitOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setToolkitOpen(false)}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
          />

          {/* Drawer panel */}
          <motion.aside
            key="drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 36 }}
            className="fixed top-0 right-0 bottom-0 z-50 flex flex-col w-full max-w-sm"
            style={{
              background: 'var(--bg-card)',
              boxShadow: 'var(--shadow-drawer)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
            aria-label="Checkout"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  Checkout
                </h2>
                {savedCases.length > 0 && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--apple-blue)', color: '#fff' }}
                  >
                    {savedCases.length}
                  </span>
                )}
              </div>
              <button
                onClick={() => setToolkitOpen(false)}
                aria-label="Close"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 18, padding: 4 }}
              >
                ✕
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-4 py-3" style={{ overscrollBehavior: 'contain' }}>
              {savedCases.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <p className="text-3xl mb-3">🧺</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Your basket is empty</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Add prompts from the grid to get started</p>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {savedCases.map(uc => (
                    <BasketItem key={uc.id} uc={uc} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer with export */}
            <div
              className="px-4 py-4"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div className="flex gap-2">
                <ExportButton />
              </div>
              {savedCases.length > 0 && (
                <button
                  onClick={() => { savedCases.forEach(uc => useAppStore.getState().removeFromToolkit(uc.id)); }}
                  className="w-full mt-2 text-xs py-2 transition-colors"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-tertiary)' }}
                >
                  Clear all
                </button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

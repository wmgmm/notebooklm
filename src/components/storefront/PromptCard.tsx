import { useState } from 'react';
import { motion } from 'framer-motion';
import type { UseCase } from '../../data/useCases';
import { CATEGORY_COLOR } from '../../data/categories';
import { useAppStore } from '../../store/useAppStore';

interface Props {
  uc: UseCase;
}

export function PromptCard({ uc }: Props) {
  const { savedCases, addToToolkit } = useAppStore();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isSaved = savedCases.some(s => s.id === uc.id);
  const catColor = CATEGORY_COLOR[uc.cat];

  const handleAdd = () => {
    if (!isSaved) addToToolkit(uc);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(uc.prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="card flex flex-col p-5 h-full"
    >
      {/* Category + studio badge + number */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: `${catColor}18`, color: catColor }}
        >
          {uc.cat}
        </span>
        {uc.studioRevise && (
          <span
            className="text-xs font-medium px-2 py-1 rounded-full inline-flex items-center gap-1"
            style={{ background: 'rgba(124,58,237,0.10)', color: '#6d28d9' }}
            title="Use the Studio revise (pencil) panel to apply this prompt"
          >
            <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Studio Revise
          </span>
        )}
        <span className="ml-auto text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>#{uc.id}</span>
      </div>

      {/* Title */}
      <h3 className="text-base lg:text-lg font-bold mb-1.5 leading-snug" style={{ color: 'var(--text-primary)' }}>
        {uc.title}
      </h3>

      {/* Description */}
      <p className="text-sm lg:text-base mb-4 flex-1" style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>
        {uc.desc}
      </p>

      {/* Prompt preview */}
      <div
        className="rounded-xl p-3 mb-4 relative group"
        style={{ background: 'var(--bg-page)' }}
      >
        <p className="text-[10px] lg:text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
          Prompt
        </p>
        <div className="relative">
          <p
            className="text-xs lg:text-sm font-mono leading-relaxed whitespace-pre-wrap"
            style={
              expanded
                ? { color: 'var(--text-primary)' }
                : { color: 'var(--text-primary)', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }
            }
          >
            {uc.prompt}
          </p>
          {!expanded && (
            <div
              className="absolute bottom-0 left-0 right-0 h-6 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-page))' }}
            />
          )}
        </div>
        <button
          onClick={() => setExpanded(v => !v)}
          className="mt-2 text-xs font-semibold"
          style={{ color: 'var(--apple-blue)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less ▴' : 'Show full prompt ▾'}
        </button>
        <button
          onClick={copyPrompt}
          className="absolute top-3 right-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: copied ? 'var(--apple-green)' : 'var(--apple-blue)', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {copied ? '✓' : 'Copy'}
        </button>
      </div>

      {/* Add to Basket button */}
      <motion.button
        whileTap={{ scale: isSaved ? 1 : 0.96 }}
        onClick={handleAdd}
        disabled={isSaved}
        className="w-full rounded-full py-2.5 text-sm font-semibold transition-all"
        style={{
          background: isSaved ? 'rgba(52,199,89,0.12)' : 'var(--apple-blue)',
          color: isSaved ? 'var(--apple-green)' : '#fff',
          border: isSaved ? '1px solid rgba(52,199,89,0.3)' : 'none',
          cursor: isSaved ? 'default' : 'pointer',
          boxShadow: isSaved ? 'none' : '0 1px 8px rgba(0,113,227,0.25)',
        }}
        aria-label={isSaved ? 'Added to basket' : `Add ${uc.title} to basket`}
      >
        {isSaved ? '✓ Added to Basket' : 'Add to Basket'}
      </motion.button>
    </motion.div>
  );
}

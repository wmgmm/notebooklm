import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../store/useAppStore';
import { CATEGORIES, WELSH_PILL_COLOR } from '../../data/categories';
import { useCases } from '../../data/useCases';
import type { Category } from '../../data/useCases';

export function CategoryPills() {
  const { activeFilters, toggleFilter, welshOnly, toggleWelshOnly, clearFilters } = useAppStore();

  const counts = useMemo(() => {
    const c: Record<string, number> = { __all: useCases.length, __welsh: 0 };
    useCases.forEach(uc => {
      c[uc.cat] = (c[uc.cat] || 0) + 1;
      if (uc.welsh) c.__welsh += 1;
    });
    return c;
  }, []);

  const noneActive = activeFilters.size === 0 && !welshOnly;

  const Count = ({ n }: { n: number }) => (
    <sup className="ml-1 text-[0.6rem] font-semibold opacity-70">{n}</sup>
  );

  return (
    <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
      <motion.button
        layout
        whileTap={{ scale: 0.94 }}
        onClick={clearFilters}
        className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
        style={{
          background: noneActive ? 'var(--text-primary)' : 'rgba(0,0,0,0.06)',
          color: noneActive ? '#fff' : 'var(--text-secondary)',
          border: 'none',
        }}
      >
        All<Count n={counts.__all} />
      </motion.button>

      {CATEGORIES.map(cat => {
        const active = activeFilters.has(cat.name as Category);
        return (
          <motion.button
            layout
            key={cat.name}
            whileTap={{ scale: 0.94 }}
            onClick={() => toggleFilter(cat.name as Category)}
            className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: active ? `${cat.color}18` : 'rgba(0,0,0,0.06)',
              color: active ? cat.color : 'var(--text-secondary)',
              border: active ? `1px solid ${cat.color}44` : '1px solid transparent',
            }}
          >
            {cat.name}<Count n={counts[cat.name] || 0} />
          </motion.button>
        );
      })}

      {/* Cymraeg cross-filter (Welsh prompts only) */}
      <motion.button
        layout
        whileTap={{ scale: 0.94 }}
        onClick={toggleWelshOnly}
        className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all"
        style={{
          background: welshOnly ? `${WELSH_PILL_COLOR}18` : 'rgba(0,0,0,0.06)',
          color: welshOnly ? WELSH_PILL_COLOR : 'var(--text-secondary)',
          border: welshOnly ? `1px solid ${WELSH_PILL_COLOR}44` : '1px solid transparent',
        }}
      >
        Cymraeg<Count n={counts.__welsh} />
      </motion.button>
    </div>
  );
}

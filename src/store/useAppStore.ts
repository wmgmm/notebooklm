import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type UseCase, type Category } from '../data/useCases';

export type View = 'landing' | 'browse';

interface AppState {
  // Navigation
  view: View;
  setView: (v: View) => void;

  // Saved prompts
  savedCases: UseCase[];

  // Storefront / browse state
  activeFilters: Set<Category>;
  welshOnly: boolean;
  searchQuery: string;
  isToolkitOpen: boolean;

  // Storefront / browse actions
  toggleFilter: (cat: Category) => void;
  toggleWelshOnly: () => void;
  clearFilters: () => void;
  setSearchQuery: (q: string) => void;
  setToolkitOpen: (v: boolean) => void;
  addToToolkit: (uc: UseCase) => void;
  removeFromToolkit: (id: number) => void;

  // Shared
  showCtaModal: boolean;
  setShowCtaModal: (v: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Navigation
      view: 'landing',
      setView: (v) => set({ view: v }),

      // Saved prompts
      savedCases: [],

      // Storefront
      activeFilters: new Set(),
      welshOnly: false,
      searchQuery: '',
      isToolkitOpen: false,

      toggleFilter: (cat) => {
        const filters = new Set(get().activeFilters);
        if (filters.has(cat)) { filters.delete(cat); } else { filters.add(cat); }
        set({ activeFilters: filters });
      },

      toggleWelshOnly: () => set({ welshOnly: !get().welshOnly }),
      clearFilters: () => set({ activeFilters: new Set(), welshOnly: false }),

      setSearchQuery: (q) => set({ searchQuery: q }),
      setToolkitOpen: (v) => set({ isToolkitOpen: v }),

      addToToolkit: (uc) => {
        const { savedCases } = get();
        if (!savedCases.find(s => s.id === uc.id)) {
          set({ savedCases: [...savedCases, uc] });
        }
      },

      removeFromToolkit: (id) => {
        set({ savedCases: get().savedCases.filter(s => s.id !== id) });
      },

      // Shared
      showCtaModal: false,
      setShowCtaModal: (v) => set({ showCtaModal: v }),
    }),
    {
      name: 'notebooklm-prompts',
      partialize: (state) => ({ savedCases: state.savedCases }),
    }
  )
);

import type { Category } from './useCases';

export interface CategoryMeta {
  name: Category;
  color: string; // Hex for DOM (badges, pills)
}

// Colours mirror the badge palette from the original notebooklm.html.
export const CATEGORIES: CategoryMeta[] = [
  { name: 'Summary',  color: '#0d47a1' },
  { name: 'Analysis', color: '#b71c1c' },
  { name: 'Content',  color: '#512da8' },
  { name: 'Learning', color: '#1b5e20' },
  { name: 'Style',    color: '#283593' },
  { name: 'Podcast',  color: '#00695c' },
];

// The Cymraeg (Welsh) filter is a cross-cutting flag, not a category.
export const WELSH_PILL_COLOR = '#AD1A2D';

export const CATEGORY_COLOR: Record<Category, string> = Object.fromEntries(
  CATEGORIES.map(c => [c.name, c.color])
) as Record<Category, string>;

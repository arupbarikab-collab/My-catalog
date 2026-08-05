export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  weight: string;
  metal: string;
  stock: string;
  description: string;
  images: string[];
  styleTip: string;
  featured: boolean;
  price?: string;
  bgColor?: string;
}

export interface AdminConfig {
  festivalBannerUrl: string;
  offerText: string;
  globalTheme: string;
  pin: string;
  bannerSize?: string;
  productCardSize?: string;
  customCategories?: string[];
  categoryThemes?: Record<string, { bg: string, text: string, isDark: boolean }>;
  logoUrl?: string;
  brandNameUrl?: string;
  splashScreenUrl?: string;
  aboutUsText?: string;
}

export const CATEGORIES = [
  "All", 
  "Rings", 
  "Necklaces", 
  "Earrings", 
  "Bracelets", 
  "Bangles", 
  "Bridal Sets"
];

export const PREDEFINED_THEMES = [
  { id: 'ruby', bg: 'bg-[#7A1C2A]', text: 'text-[#F6EDE3]', isDark: true, label: 'Ruby Red', hex: '#7A1C2A' },
  { id: 'emerald', bg: 'bg-[#0d2218]', text: 'text-[#d7e8d0]', isDark: true, label: 'Emerald Green', hex: '#0d2218' },
  { id: 'sapphire', bg: 'bg-[#0A1A4A]', text: 'text-[#ffffff]', isDark: true, label: 'Sapphire Blue', hex: '#0A1A4A' },
  { id: 'onyx', bg: 'bg-[#111111]', text: 'text-[#f5f5f5]', isDark: true, label: 'Onyx Black', hex: '#111111' },
  { id: 'amethyst', bg: 'bg-[#4a2e4e]', text: 'text-[#f0e6f2]', isDark: true, label: 'Amethyst Purple', hex: '#4a2e4e' },
  { id: 'slate', bg: 'bg-[#2c3e50]', text: 'text-[#ecf0f1]', isDark: true, label: 'Slate Gray', hex: '#2c3e50' },
  { id: 'cream', bg: 'bg-[#F6EDE3]', text: 'text-[#0a0a0a]', isDark: false, label: 'Cream White', hex: '#F6EDE3' },
  { id: 'classic', bg: 'bg-[#e9d9a5]', text: 'text-[#0a0a0a]', isDark: false, label: 'Classic Gold', hex: '#e9d9a5' },
  { id: 'pearl', bg: 'bg-[#fdfcf0]', text: 'text-[#1a1a1a]', isDark: false, label: 'Pearl White', hex: '#fdfcf0' },
  { id: 'rose', bg: 'bg-[#f4e1e1]', text: 'text-[#2a1a1a]', isDark: false, label: 'Rose Quartz', hex: '#f4e1e1' },
  { id: 'sand', bg: 'bg-[#e8dcc8]', text: 'text-[#1c1812]', isDark: false, label: 'Desert Sand', hex: '#e8dcc8' },
  { id: 'mint', bg: 'bg-[#d8e8d8]', text: 'text-[#0d2218]', isDark: false, label: 'Mint Green', hex: '#d8e8d8' }
];

import { Inter, Roboto_Mono } from 'next/font/google';

// Using Google Fonts with local files
// The actual font files are served from /public/fonts
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  preload: true,
  fallback: ['monospace'],
});

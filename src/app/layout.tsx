import type { Metadata } from 'next';
import './globals.css';
import { Mountains_of_Christmas } from 'next/font/google';

const mountains = Mountains_of_Christmas({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-mountains',
});

export const metadata: Metadata = {
  title: 'mogga',
  description: 'crypto project mogga',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mountains.variable}>
      <body>{children}</body>
    </html>
  );
}

import type {Metadata} from 'next';
import { Sora, Geist, Geist_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'ATELIER | Liquid Reality',
  description: 'The intersection of fluid luxury and brutalist architectural precision.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${sora.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans text-[#e5e2e1] antialiased bg-[#0A0A0A] selection:bg-[#e5e2e1] selection:text-[#0A0A0A]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

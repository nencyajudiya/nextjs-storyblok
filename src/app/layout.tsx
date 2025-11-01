// src/app/layout.tsx
import './globals.css';
import '../lib/storyblokClient';
import { StoryblokProvider } from '@/components/StoryblokProvider';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <body className='bg-blue-50 mx-auto'>
          <header>
            <nav className='container mx-auto px-4 w-full py-8 flex justify-between'>
              <Link href={'/'}>Home</Link>
              <Link href={'/tours'}>Tours</Link>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}

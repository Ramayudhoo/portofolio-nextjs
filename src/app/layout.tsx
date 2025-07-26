import './globals.css';
import { ReactNode } from 'react';
import GooeyNav from './components/GooeyNav/GooeyNav';

export default function RootLayout({ children }: { children: ReactNode }) {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];
  return (
    <html lang="en">
      <body className="bg-black text-white relative">
        <header className="absolute top-4 left-0 right-0 z-20 flex justify-center">
          {/* Navigasi dasar */}
          <div className="z-10 flex justify-center pt-6">
         <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

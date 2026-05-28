import { NavBar } from '@/components/nav-bar';
import { HeroSection } from '@/components/hero-section';
import { GallerySection } from '@/components/gallery-section';
import { TechnicalSection } from '@/components/technical-section';
import { Footer } from '@/components/footer';
import { CustomCursor } from '@/components/custom-cursor';

export default function Page() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <GallerySection />
      <TechnicalSection />
      <Footer />
    </main>
  );
}

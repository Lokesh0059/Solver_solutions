import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { TrustIndicators } from '@/components/sections/trust-indicators';
import { ClientLogos } from '@/components/sections/client-logos';
import { ProductsSection } from '@/components/sections/products';
import { MarketingTools } from '@/components/sections/marketing-tools';
import { MobileApps } from '@/components/sections/mobile-apps';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Industries } from '@/components/sections/industries';
import { FeaturesSection } from '@/components/sections/features';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <ClientLogos />
        <ProductsSection />
        <MarketingTools />
        <MobileApps />
        <WhyChooseUs />
        <Industries />
        <FeaturesSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

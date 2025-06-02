import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductCatalog />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
};

export default Index;

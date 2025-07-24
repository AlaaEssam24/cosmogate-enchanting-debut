import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="products">
          <ProductShowcase />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

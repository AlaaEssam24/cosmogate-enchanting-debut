import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-glow rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full animate-float animation-delay-500 opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full animate-float animation-delay-1000 opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-6 animate-fade-in">
          <span className="block text-primary-deep">Cosmogate</span>
          <span className="block text-lg md:text-2xl font-inter font-light mt-4 text-muted-foreground animate-fade-in-up">
            Unlock Your Natural Beauty
          </span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Discover our luxurious collection of premium beauty products crafted with the finest ingredients 
          to enhance your natural radiance and confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-deep text-primary-foreground font-medium px-8 py-4 rounded-xl shadow-luxury hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Explore Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Watch Our Story
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
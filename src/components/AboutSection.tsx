import { Card, CardContent } from "@/components/ui/card";
import ingredientsImage from "@/assets/ingredients.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: "✨",
      title: "Luxury Ingredients",
      description: "We source only the finest, ethically-sourced ingredients from around the world."
    },
    {
      icon: "🌿",
      title: "Natural Beauty",
      description: "Our formulas enhance your natural beauty without compromising your skin's health."
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Each product undergoes rigorous testing to ensure exceptional quality and results."
    },
    {
      icon: "🐰",
      title: "Cruelty-Free",
      description: "We are committed to ethical beauty practices and never test on animals."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Art of
              <span className="text-primary block mt-2">Luxury Beauty</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              At Cosmogate, we believe that beauty is an art form. Our passion for excellence 
              drives us to create products that not only enhance your appearance but also 
              nourish your skin and uplift your spirit.
            </p>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded on the principles of luxury, sustainability, and innovation, we craft 
              each product with meticulous attention to detail, ensuring that every application 
              feels like a moment of pure indulgence.
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-primary">10+</div>
                <div className="font-inter text-sm text-muted-foreground">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-primary">50k+</div>
                <div className="font-inter text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-primary">100%</div>
                <div className="font-inter text-sm text-muted-foreground">Natural</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up">
            <img 
              src={ingredientsImage} 
              alt="Luxury beauty ingredients"
              className="w-full h-96 object-cover rounded-2xl shadow-luxury"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:shadow-soft transition-all duration-500 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
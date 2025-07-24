import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/products-showcase.jpg";
import beautyModel from "@/assets/beauty-model.jpg";
import ingredientsImage from "@/assets/ingredients.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Radiance Serum",
      category: "Skincare",
      price: "$89",
      image: productsImage,
      description: "Illuminating serum with 24k gold and vitamin C"
    },
    {
      id: 2,
      name: "Velvet Lipstick",
      category: "Makeup",
      price: "$45",
      image: beautyModel,
      description: "Long-lasting matte finish in luxurious shades"
    },
    {
      id: 3,
      name: "Rose Essence",
      category: "Skincare",
      price: "$125",
      image: ingredientsImage,
      description: "Pure rose extract for ultimate hydration"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Featured
            <span className="text-primary block mt-2">Collection</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our most beloved products, each crafted with precision and 
            infused with the finest natural ingredients for exceptional results.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group bg-card border-border hover:shadow-luxury transition-all duration-500 transform hover:scale-105 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-inter text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary-deep text-primary-foreground rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
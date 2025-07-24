import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/cosmogate.co/", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Return Policy", href: "#returns" }
  ];

  return (
    <footer className="bg-secondary-dark text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-primary-glow">
              Cosmogate
            </h3>
            <p className="font-inter text-sm leading-relaxed opacity-90">
              Luxury beauty products crafted with the finest ingredients to enhance 
              your natural radiance and confidence.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-primary-glow">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-sm opacity-90 hover:text-primary-glow hover:opacity-100 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-primary-glow">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="font-inter text-sm opacity-90">hello@cosmogate.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="font-inter text-sm opacity-90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="font-inter text-sm opacity-90">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-primary-glow">
              Stay Updated
            </h4>
            <p className="font-inter text-sm opacity-90">
              Subscribe to get special offers, new product launches, and beauty tips.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary/20 border-primary/30 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:border-primary"
              />
              <Button 
                size="sm"
                className="w-full bg-primary hover:bg-primary-deep text-primary-foreground font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-inter text-sm opacity-75">
              © 2024 Cosmogate. All rights reserved.
            </p>
            <p className="font-inter text-sm opacity-75">
              Crafted with 💎 for luxury beauty
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
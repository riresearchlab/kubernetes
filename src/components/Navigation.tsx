import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  sections: {
    id: string;
    name: string;
  }[];
  activeSection: string;
}

export const Navigation = ({ sections, activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle component mount animation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Add offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4",
        isMounted ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="favicon.ico" alt="Kubernetes Bioscope Icon" className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold gradient-text">Kubernetes Bioscope</span>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {sections.map((section) => (
              <NavigationMenuItem key={section.id}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors nav-link-hover",
                    activeSection === section.id
                      ? "text-primary nav-link-active"
                      : "text-muted-foreground"
                  )}
                >
                  <button 
                    onClick={() => scrollToSection(section.id)}
                    onKeyDown={(e) => handleKeyDown(e, section.id)}
                    tabIndex={0}
                    role="link"
                    aria-current={activeSection === section.id ? "page" : undefined}
                  >
                    {section.name}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground focus:ring-2 focus:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={cn(
            "md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center pt-10 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-6 w-full">
            {sections.map((section, index) => (
              <Button
                key={section.id}
                variant="ghost"
                className={cn(
                  "text-lg font-medium transition-all duration-200 w-4/5 py-6 flex items-center justify-center gap-2",
                  activeSection === section.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => scrollToSection(section.id)}
                onKeyDown={(e) => handleKeyDown(e, section.id)}
                tabIndex={0}
                role="link"
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                {section.name}
                {activeSection === section.id && <ChevronRight className="w-4 h-4 ml-1" />}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
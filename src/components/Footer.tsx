import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  BookOpen, 
  MessageCircle,
  Heart
} from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="relative border-t border-border/50 bg-gradient-to-r from-card to-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Kubernetes Bioscope</h3>
              <p className="text-muted-foreground leading-relaxed">
                The most comprehensive and interactive Kubernetes learning platform. 
                Master container orchestration with cutting-edge visualizations.
              </p>
            </div>
            
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="ghost"
                  className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Learning links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Learning Path</h4>
            <div className="space-y-3">
              {[
                "Getting Started",
                "Core Concepts", 
                "kubectl Commands",
                "Advanced Topics",
                "Interactive Labs",
                "Certification Guide"
              ].map((link, index) => (
                <div key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Resources</h4>
            <div className="space-y-3">
              {[
                "Documentation",
                "Command Reference", 
                "Troubleshooting",
                "Best Practices",
                "Community Forum",
                "Blog & Updates"
              ].map((link, index) => (
                <div key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Get the latest tutorials, tips, and Kubernetes updates delivered to your inbox.
            </p>
            
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="bg-background/50 border-border/50"
              />
              <Button className="w-full bg-gradient-primary text-white">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>


          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the Kubernetes community</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span>© 2025 Kubernetes Bioscope. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
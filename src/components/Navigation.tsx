
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "glass-nav shadow-lg shadow-black/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-space-grotesk font-bold text-primary-gradient">
              SkillLink DAO
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a 
                href="#features" 
                className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#roles" 
                className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group"
              >
                Roles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#gallery" 
                className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button className="btn-secondary font-medium px-6 py-2.5">
                Connect Wallet
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-6 space-y-3 glass-card mt-4 mx-4">
              <a 
                href="#features" 
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#roles" 
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Roles
              </a>
              <a 
                href="#gallery" 
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <Button className="btn-secondary w-full mt-4 font-medium">
                Connect Wallet
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChartArea } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <ChartArea className="h-6 w-6 text-analytics-purple" />
          <span className="font-bold text-lg">DataPortfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-analytics-purple transition-colors">Home</a>
          <a href="#projects" className="hover:text-analytics-purple transition-colors">Projects</a>
          <a href="#about" className="hover:text-analytics-purple transition-colors">About</a>
          <a href="#contact" className="hover:text-analytics-purple transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="bg-white/80 backdrop-blur-sm border-analytics-purple text-analytics-purple hover:bg-analytics-purple hover:text-white">
          Download Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;


import { ChartArea } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <ChartArea className="h-6 w-6 text-analytics-purple" />
            <span className="font-bold text-lg">DataPortfolio</span>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4 md:mb-0">
            <a href="#home" className="text-gray-600 hover:text-analytics-purple transition-colors">Home</a>
            <a href="#projects" className="text-gray-600 hover:text-analytics-purple transition-colors">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-analytics-purple transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-analytics-purple transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-analytics-purple transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-analytics-purple transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-analytics-purple transition-colors">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Data Analyst Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

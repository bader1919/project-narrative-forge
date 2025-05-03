
import { Button } from "@/components/ui/button";
import { ChartArea, ChartBarStacked, ChartLine } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-analytics-purple/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 h-96 w-96 rounded-full bg-analytics-blue/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-analytics-purple">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-analytics-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-analytics-purple"></span>
              </span>
              <span>Data Analysis Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Turning <span className="data-heading">Data</span> into Meaningful <span className="data-heading">Insights</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              I transform complex data into clear, actionable insights that drive decision-making and business growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-analytics-purple hover:bg-analytics-darkPurple text-white">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-analytics-purple text-analytics-purple hover:bg-analytics-purple hover:text-white">
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="data-card row-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <ChartLine className="h-8 w-8 text-analytics-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">Data Visualization</h3>
                <p className="text-sm text-gray-600">Creating clear, insightful visual representations of complex data.</p>
              </div>
              
              <div className="data-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <ChartBarStacked className="h-8 w-8 text-analytics-blue mb-4" />
                <h3 className="text-lg font-semibold mb-2">Statistical Analysis</h3>
                <p className="text-sm text-gray-600">Using statistical methods to interpret data patterns.</p>
              </div>
              
              <div className="data-card animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <ChartArea className="h-8 w-8 text-analytics-green mb-4" />
                <h3 className="text-lg font-semibold mb-2">Predictive Modeling</h3>
                <p className="text-sm text-gray-600">Building models to forecast trends and outcomes.</p>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-analytics-purple/5 to-analytics-blue/5 rounded-2xl transform -rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

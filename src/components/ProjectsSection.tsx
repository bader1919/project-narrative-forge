
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

// Sample project data
const projectsData: ProjectCardProps[] = [
  {
    id: "1",
    title: "E-commerce Sales Analysis",
    description: "In-depth analysis of sales data for an e-commerce platform, identifying key trends and growth opportunities.",
    technologies: ["Python", "Pandas", "Tableau", "SQL"],
    date: "April 2025",
  },
  {
    id: "2",
    title: "Customer Segmentation Model",
    description: "Developed a machine learning model to segment customers based on purchasing behavior and demographics.",
    technologies: ["Python", "Scikit-learn", "Matplotlib", "K-means"],
    date: "March 2025",
  },
  {
    id: "3",
    title: "Financial Dashboard",
    description: "Interactive dashboard for tracking key financial metrics and forecasting future performance.",
    technologies: ["Power BI", "DAX", "Excel", "Financial Modeling"],
    date: "February 2025",
  },
  {
    id: "4",
    title: "Market Basket Analysis",
    description: "Analyzed transaction data to identify product associations and improve cross-selling strategies.",
    technologies: ["R", "Association Rules", "Data Mining"],
    date: "January 2025",
  },
];

const categories = ["All", "Python", "Tableau", "Excel", "Machine Learning"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeCategory.toLowerCase())
        )
      );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="data-heading">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of data analysis projects that showcase my skills in data visualization, 
            statistical analysis, and deriving meaningful insights.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="data-pill bg-white shadow-sm hover:bg-accent transition"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-fade-in">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-analytics-purple text-analytics-purple hover:bg-analytics-purple hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

// Real project data based on GitHub portfolio
const projectsData: ProjectCardProps[] = [
  {
    id: "1",
    title: "COVID-19 Data Analysis",
    description: "Analyzed global COVID-19 data trends using Python and Pandas, visualizing infection rates and vaccination progress across different countries.",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    date: "March 2023",
    link: "https://github.com/Bader1919/covid-analysis",
  },
  {
    id: "2",
    title: "Customer Segmentation Model",
    description: "Developed a machine learning model to segment retail customers based on purchasing behavior and demographic information for targeted marketing campaigns.",
    technologies: ["Python", "Scikit-learn", "Matplotlib", "K-means"],
    date: "November 2022",
    link: "https://github.com/Bader1919/customer-segmentation",
  },
  {
    id: "3",
    title: "Sales Dashboard",
    description: "Created an interactive dashboard for visualizing sales data across multiple regions and product categories with filtering capabilities.",
    technologies: ["Power BI", "DAX", "SQL", "Excel"],
    date: "September 2022",
    link: "https://github.com/Bader1919/sales-dashboard",
  },
  {
    id: "4",
    title: "Twitter Sentiment Analysis",
    description: "Built a sentiment analysis tool for analyzing customer feedback and social media mentions of a product using natural language processing.",
    technologies: ["Python", "NLTK", "TextBlob", "Tweepy"],
    date: "July 2022",
    link: "https://github.com/Bader1919/twitter-sentiment",
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
            statistical analysis, and deriving meaningful insights from complex datasets.
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
          <Button 
            variant="outline" 
            size="lg" 
            className="border-analytics-purple text-analytics-purple hover:bg-analytics-purple hover:text-white"
            onClick={() => window.open("https://github.com/Bader1919", "_blank")}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

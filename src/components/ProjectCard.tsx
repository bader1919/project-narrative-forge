
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartLine } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  date: string;
  link?: string;
}

const ProjectCard = ({ title, description, image, technologies, date, link }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 h-full flex flex-col">
      <div className="relative h-48 bg-gradient-to-r from-analytics-purple/20 to-analytics-blue/20 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <ChartLine className="h-12 w-12 text-analytics-purple/50" />
        )}
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline" className="bg-accent text-xs font-normal">
            {date}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t bg-muted/30 p-4">
        <Button 
          variant="outline" 
          className="w-full border-analytics-purple text-analytics-purple hover:bg-analytics-purple hover:text-white"
          onClick={() => link && window.open(link, '_blank')}
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

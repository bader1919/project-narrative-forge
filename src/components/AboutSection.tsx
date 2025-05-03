
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  const skills = [
    { name: "Data Analysis", level: 95 },
    { name: "Data Visualization", level: 90 },
    { name: "Statistical Modeling", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "SQL", level: 92 },
    { name: "Python", level: 88 },
    { name: "Tableau", level: 90 },
    { name: "Excel/PowerBI", level: 95 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="data-heading">Me</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              I'm a passionate data analyst with over 5 years of experience in transforming complex datasets into 
              actionable insights. My expertise spans various industries including e-commerce, finance, 
              healthcare, and marketing.
            </p>
            
            <p className="text-gray-600 mb-6">
              My approach combines technical expertise with strategic thinking to deliver solutions that 
              drive business growth and improve decision-making processes. I enjoy tackling complex 
              problems and communicating findings in clear, accessible ways.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="data-card flex-1 min-w-[120px] text-center">
                <h4 className="text-2xl font-bold text-analytics-purple">5+</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="data-card flex-1 min-w-[120px] text-center">
                <h4 className="text-2xl font-bold text-analytics-blue">25+</h4>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div className="data-card flex-1 min-w-[120px] text-center">
                <h4 className="text-2xl font-bold text-analytics-green">10+</h4>
                <p className="text-sm text-gray-600">Technologies</p>
              </div>
            </div>

            <Separator className="my-8" />
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="data-card">
                <h4 className="font-semibold">Master's in Data Science</h4>
                <p className="text-sm text-gray-600">University of Data Analytics, 2022</p>
              </div>
              <div className="data-card">
                <h4 className="font-semibold">Bachelor's in Statistics</h4>
                <p className="text-sm text-gray-600">Analytics University, 2020</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-xl font-bold">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-200" 
                    indicatorClassName={
                      skill.level > 90 
                        ? "bg-analytics-purple" 
                        : skill.level > 85 
                        ? "bg-analytics-blue" 
                        : "bg-analytics-green"
                    }
                  />
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="data-card">
                  <h4 className="font-semibold">Certified Data Analyst</h4>
                  <p className="text-sm text-gray-600">Data Analysis Institute</p>
                </div>
                <div className="data-card">
                  <h4 className="font-semibold">Advanced SQL</h4>
                  <p className="text-sm text-gray-600">Database Technologies</p>
                </div>
                <div className="data-card">
                  <h4 className="font-semibold">Tableau Desktop Specialist</h4>
                  <p className="text-sm text-gray-600">Tableau Software</p>
                </div>
                <div className="data-card">
                  <h4 className="font-semibold">Machine Learning Professional</h4>
                  <p className="text-sm text-gray-600">AI Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be connected to a backend service in a real implementation
    console.log("Form submission:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="data-heading">Touch</span>
            </h2>
            <p className="text-gray-600">
              Interested in working together or have a question about my projects? 
              Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="data-card">
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">analyst@example.com</p>
              </div>
              
              <div className="data-card">
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">New York, NY</p>
              </div>
              
              <div className="data-card">
                <h3 className="font-semibold mb-1">Connect</h3>
                <div className="flex gap-4 mt-2">
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
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 data-card bg-white">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'd like to discuss a potential project..."
                  rows={4}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-analytics-purple hover:bg-analytics-darkPurple"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

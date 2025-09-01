import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    category: "UI-UX DESIGN",
    title: "Hotel Management System",
    description:
      "A Hotel Management System (HMS) is a software application that helps hotels and resorts manage their daily operations efficiently.",
    image: "https://i.ibb.co.com/7dRBrhH7/project2.png",
  },
  {
    category: "UI-UX DESIGN",
    title: "Job Hunting",
    description:
      "Jobbe is an online platform that connects job seekers with employers. It allows candidates to create profiles, upload resumes, and search for job opportunities based on location, skills, or industry.",
    image: "https://i.ibb.co.com/WNJQ3F4K/project3.png",
  },
  {
    category: "UI-UX DESIGN",
    title: "Education Management",
    description:
      "An Education Management System (EMS) is a software platform designed to streamline and automate administrative and academic activities in educational institutions like schools, colleges, and universities.",
    image: "https://i.ibb.co.com/KcF1fmQw/project4.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <p className="mt-3 text-gray-600">
          Here's a selection of my recent work, showcasing my skills in creating
          user-centric and visually appealing interfaces.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <p className="text-xs font-medium text-gray-500 uppercase mb-2">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="flex items-center gap-2">
                Case Study <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

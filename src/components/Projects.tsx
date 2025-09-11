import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    category: "UI-UX DESIGN",
    title: "Digital Wallet Management",
    description:
      "DigiCash Frontend is a modern, responsive web application designed to provide users with a seamless digital wallet experience, similar to Bkash, Nagad, or Rocket.",
    image: "https://i.ibb.co.com/Nnn11gzw/digicash.png",
    liveLink: "https://digicash-client.vercel.app",
    frontendRepo:
      "https://github.com/sohelranaweb/digicash-management-system-fronted-",
    backendRepo:
      "https://github.com/sohelranaweb/digicash-management-system-backend",
  },
  {
    category: "UI-UX DESIGN",
    title: "Library Management",
    description:
      "A modern web-based Library Management System built with React, TypeScript, Redux Toolkit (RTK Query), Tailwind CSS, and ShadCN UI. It allows users to manage books, borrow records, and maintain a clean and user-friendly interface.",
    image: "https://i.ibb.co.com/ZRXWhyvX/library.png",
    liveLink: "https://library-management-client-five.vercel.app",
    frontendRepo: "https://github.com/sohelranaweb/library-management-client",
    backendRepo: "https://github.com/sohelranaweb/library-management",
  },
  {
    category: "UI-UX DESIGN",
    title: "Hotel Management System",
    description:
      "A Hotel Management System (HMS) is a software application that helps hotels and resorts manage their daily operations efficiently.",
    image: "https://i.ibb.co.com/7dRBrhH7/project2.png",
    liveLink: "https://hotelier-client.web.app",
    frontendRepo: "https://github.com/sohelranaweb/hotelier-client",
    backendRepo: "https://github.com/sohelranaweb/hotelier-server",
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
            <CardFooter className="p-6 pt-0 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2 text-sm"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2 text-sm"
              >
                <a
                  href={project.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Repo
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2 text-sm"
              >
                <a
                  href={project.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Repo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

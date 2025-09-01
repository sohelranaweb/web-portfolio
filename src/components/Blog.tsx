// src/components/Blog.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    date: "22 Aug, 2025",
    comments: 246,
    title: "How to Visualize Data for Better Product Decisions",
    description:
      "Learn how effective data visualization techniques can drive better insights and help in making informed product decisions.",
  },
  {
    id: 2,
    date: "25 JUl, 2025",
    comments: 246,
    title: "Responsive Design: Adapting to All Devices",
    description:
      "Discover the best practices for creating responsive layouts that look stunning on any screen size.",
  },
  {
    id: 3,
    date: "2 JUN, 2025",
    comments: 246,
    title: "Streamlining Workflows with UI/UX Best Practices",
    description:
      "Explore strategies to simplify workflows by applying UI/UX best practices that improve efficiency.",
  },
  {
    id: 4,
    date: "12 MAR, 2025",
    comments: 246,
    title: "Optimizing Interface Components for Performance",
    description:
      "Understand how to optimize UI components to achieve faster load times and smoother user experiences.",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className=" py-16 px-6 md:px-12 bg-gradient-to-r from-purple-50 to-white"
    >
      <div className="lg:max-w-9/12 mx-auto">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Blog</h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Check out my recent blog posts where I share insights on design,
            development, and the latest industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardHeader>
                <p className="text-xs text-gray-500">
                  {blog.date} / {blog.comments} Comments
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                  {blog.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-sm border-purple-500 "
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

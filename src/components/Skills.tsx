import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", value: 80, color: "text-red-500" },
  { name: "Typescript", value: 80, color: "text-blue-500" },
  { name: "Redux", value: 70, color: "text-green-500" },
  { name: "HTML/CSS", value: 90, color: "text-red-400" },
  { name: "Tailwind CSS", value: 90, color: "text-cyan-500" },
  { name: "JavaScript", value: 90, color: "text-yellow-500" },
  { name: "Express", value: 90, color: "text-blue-500" },
  { name: "Postgres", value: 90, color: "text-green-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-8">
        MY <span className="text-purple-400">SKILLS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <Card key={index} className="shadow-md rounded-2xl">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className={`font-medium ${skill.color}`}>
                  {skill.name}
                </span>
                <span className="font-semibold">{skill.value}%</span>
              </div>
              <Progress value={skill.value} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

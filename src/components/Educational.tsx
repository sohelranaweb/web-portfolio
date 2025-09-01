// src/components/Education.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    degree: "Bachelor of Arts",
    institution: "University of Rajshahi",
    duration: "2018 - 2022",
    description:
      "Completed undergraduate studies in Arts with a focus on critical thinking, communication, and cultural studies. Gained a solid foundation in research, writing, and interdisciplinary knowledge while participating in academic seminars and university activities.",
  },
  {
    degree: "Master of Arts",
    institution: "University of Rajshahi",
    duration: "2023 ",
    description:
      "Currently pursuing postgraduate studies in Arts with specialization in advanced research, analysis, and cultural perspectives. Engaged in academic writing, thesis preparation, and exploring contemporary approaches within the Arts discipline.",
  },
];

export default function Educational() {
  return (
    <section
      id="education"
      className="py-16 px-6 md:px-12 bg-gradient-to-r from-purple-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Education Information
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </CardTitle>
                <p className="text-sm text-gray-500">{edu.institution}</p>
                <p className="text-xs text-purple-600 font-medium">
                  {edu.duration}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

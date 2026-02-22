import React from "react";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Jamia Hamdard University",
    year: "2024",
    details:
      "Focused on Web Development, Data Structures, and Database Management Systems.",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "CBSE Board",
    year: "2019",
  },
  {
    degree: "Secondary (10th)",
    institution: "CBSE Board",
    year: "2017",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold">
                {edu.degree}
              </h3>

              <p className="text-gray-600 mt-1">
                {edu.institution}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Year of Completion: {edu.year}
              </p>

              {edu.details && (
                <p className="mt-3 text-gray-700">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
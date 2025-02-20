import { Card } from "@/components/ui/card"

export function ExperienceSection() {
  const education = [
    {
      year: "2018 - 2022",
      degree: "Bachelor Degree",
      school: "University of Design",
      description: "Visual Design and Web Development",
    },
    {
      year: "2016 - 2018",
      degree: "Master Degree",
      school: "School of Art",
      description: "UX/UI Design and Development",
    },
  ]

  const experience = [
    {
      year: "2022 - Present",
      role: "Senior UX Designer",
      company: "Design Studio",
      description: "Product Designer",
    },
    {
      year: "2020 - 2022",
      role: "Product Designer",
      company: "Creative Agency",
      description: "UI/UX Designer",
    },
    {
      year: "2018 - 2020",
      role: "UI Designer",
      company: "Design Agency",
      description: "Web Designer",
    },
  ]

  return (
    <div className="bg-black py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Education & Work Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={index} className="p-6 bg-gray-900/50 border-gray-800">
                  <div className="text-sm text-purple-500 mb-2">{item.year}</div>
                  <h4 className="text-lg font-semibold text-white mb-1">{item.degree}</h4>
                  <div className="text-gray-400 mb-2">{item.school}</div>
                  <p className="text-gray-500">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">Experience</h3>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <Card key={index} className="p-6 bg-gray-900/50 border-gray-800">
                  <div className="text-sm text-purple-500 mb-2">{item.year}</div>
                  <h4 className="text-lg font-semibold text-white mb-1">{item.role}</h4>
                  <div className="text-gray-400 mb-2">{item.company}</div>
                  <p className="text-gray-500">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


import { Card } from "@/components/ui/card"
import { CircleSlash2, Code2, Database, Figma, Layout, Smartphone } from "lucide-react"

export function SkillsSection() {
  const skills = [
    { icon: <Layout className="w-8 h-8" />, name: "HTML" },
    { icon: <Code2 className="w-8 h-8" />, name: "CSS" },
    { icon: <Database className="w-8 h-8" />, name: "JavaScript" },
    { icon: <CircleSlash2 className="w-8 h-8" />, name: "React" },
    { icon: <Figma className="w-8 h-8" />, name: "Figma" },
    { icon: <Smartphone className="w-8 h-8" />, name: "Flutter" },
  ]

  return (
    <div className="bg-black py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="p-4 bg-gray-900/50 border-gray-800 flex flex-col items-center gap-2">
              <div className="text-purple-500">{skill.icon}</div>
              <span className="text-gray-400 text-sm">{skill.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


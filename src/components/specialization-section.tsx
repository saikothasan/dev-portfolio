import { Card } from "@/components/ui/card"
import { ChromeIcon as Browser, Layout, Smartphone, Terminal } from "lucide-react"

export function SpecializationSection() {
  const specializations = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Website Design",
      description: "I use modern tools and frameworks to create clean and simple user interfaces.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Website Developer",
      description: "I develop fast and optimized websites using the latest technologies.",
    },
    {
      icon: <Browser className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "I create user-friendly interfaces with great user experience.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "App Design",
      description: "I design modern and responsive mobile applications.",
    },
  ]

  return (
    <div className="bg-black py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">My Specialization</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {specializations.map((spec, index) => (
            <Card key={index} className="p-6 bg-gray-900/50 border-gray-800">
              <div className="text-purple-500 mb-4">{spec.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
              <p className="text-gray-400">{spec.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


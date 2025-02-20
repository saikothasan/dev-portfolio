import { Card } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { value: "14%", label: "Job Success Score" },
    { value: "50+", label: "Years of Experience" },
    { value: "1.5K", label: "Happy Clients" },
    { value: "14+", label: "Project Completed" },
  ]

  return (
    <div className="bg-black py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 bg-gray-900/50 border-gray-800">
            <h3 className="text-3xl font-bold text-purple-500">{stat.value}</h3>
            <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}


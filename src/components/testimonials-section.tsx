import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The Portfolio Page works and looks great. My business has seen a huge increase in traffic since the launch.",
      author: "Robert Smith",
      role: "Product Manager",
      avatar: "/placeholder.svg",
    },
    {
      quote:
        "The Portfolio Page works and looks great. My business has seen a huge increase in traffic since the launch.",
      author: "Sarah Johnson",
      role: "CEO",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="bg-black py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Clients Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-gray-900/50 border-gray-800">
              <Quote className="w-8 h-8 text-purple-500 mb-4" />
              <p className="text-gray-400 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


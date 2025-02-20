import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="min-h-[500px] relative bg-black py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Hi, I am Web <span className="text-purple-500">Developer + UX Designer</span>
          </h1>
          <p className="text-gray-400">I design and code beautifully simple things and I love what I do.</p>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-purple-500 hover:bg-purple-600 text-white">
              Hire Me
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/placeholder.svg?height=400&width=400"}
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </div>
      </div>
    </div>
  )
}


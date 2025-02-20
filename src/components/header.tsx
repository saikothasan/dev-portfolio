import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-purple-500" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">Contact Me</Button>
        </div>
      </div>
    </header>
  )
}


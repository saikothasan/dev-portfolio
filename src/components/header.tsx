"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"
import { MobileNav } from "./mobile-nav"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-sm border-b border-gray-800 h-16" : "bg-transparent h-20",
      )}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
            <Code2 className="w-8 h-8 text-purple-500" />
            <span className="font-bold text-lg hidden sm:inline">DevPortfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white hidden md:inline-flex">Contact Me</Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}


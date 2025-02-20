"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

const navItems = [
  { title: "Home", href: "#" },
  { title: "Services", href: "#" },
  { title: "Portfolio", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Contact", href: "#" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-gray-900/95 border-gray-800">
        <SheetHeader>
          <SheetTitle className="text-white">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg font-medium text-gray-400 hover:text-white transition-colors px-2 py-1"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button className="bg-purple-500 hover:bg-purple-600 text-white mt-4">Contact Me</Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}


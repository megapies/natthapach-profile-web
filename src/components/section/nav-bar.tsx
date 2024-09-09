'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

interface NavBarProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-[#9F8466]">
              <AvatarImage src="/aey_profile_pixar_1.jpeg" alt="Natthapach Anuwattananon" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <Link href="/" className="text-xl font-bold text-[#9F8466]">
              Natthapach.com
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Education'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-[#9F8466] transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-[#9F8466] font-semibold' : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#2E2F3D]">
                <nav className="flex flex-col space-y-4">
                  {['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Education', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`text-[#FFFFFF] hover:text-[#9F8466] transition-colors ${
                        activeSection === item.toLowerCase() ? 'text-[#9F8466] font-semibold' : ''
                      }`}
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Button asChild className="hidden md:inline-flex bg-[#9F8466] hover:bg-[#8F7456] text-white">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
  )
}
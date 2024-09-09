'use client'

// import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface HomeSectionProps {
  fadeInUp: {
    hidden: {
      opacity: number,
      y: number,
    },
    visible: {
      opacity: number,
      y: number,
    }
  }
}

export function AboutSection({ fadeInUp }: HomeSectionProps) {
  return (
    <section id="about" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-base md:text-lg">
                I am an innovator with a strong foundation in technical knowledge, including programming, blockchain, and AI.
                My expertise also extends to business solutions, product ownership, and team development. 
                </p>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#9F8466]">Core Expertise:</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Software Architecture</li>
                  <li>Blockchain Development</li>
                  <li>Artificial Intelligence</li>
                  <li>Team Leadership</li>
                  <li>Business Developement</li>
                </ul>
                <Button asChild className="bg-[#9F8466] hover:bg-[#8F7456] text-white">
                  <Link href="#projects">View My Projects</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/projects/HR Tech.jpg"
                  alt="Natthapach Anuwattananon"
                  className="rounded-3xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#9F8466] text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">5+ Years</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
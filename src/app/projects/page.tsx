'use client'

import { Footer } from "@/components/footer"
import { ImprovedProfileWebsite } from "@/components/improved-profile-website"
import { NavBar } from "@/components/section/nav-bar"
import { useState } from "react"
import projects from '@/components/data/projects'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"

export default function Profile() {
  const [activeSection, setActiveSection] = useState('projects')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2F3D] to-[#3E3F4D] text-white font-['Poppins',sans-serif] overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
          overflow-x: hidden;
        }
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2F3D]/80 backdrop-blur-sm shadow-md">
        <title>Natthapach Anuwattananon</title>
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      </header>
      <main className="pt-20 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 px-4">
          {projects.map((project, index) => ( 
              <ProjectCard project={project} key={index}/>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
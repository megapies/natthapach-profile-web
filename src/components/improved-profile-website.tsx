'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Users, Lightbulb, MessageSquare, Puzzle, Cloud, LayoutGrid, X, ChevronLeft, ChevronRight, Menu, Cuboid, Brain, CircuitBoard, Eye, BookOpenText, Ghost, Component, Rss } from 'lucide-react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import projects, { Project } from '@/components/data/projects'
import experiences, { Experience } from '@/components/data/experiences'
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons'
import { CertificateSection } from './section/certificate-section'
import { NavBar } from './section/nav-bar'
import { HomeSection } from './section/home-section'
import { AboutSection } from './section/about-section'
import { ExperienceSection } from './section/experience-section'
import { ProjectSection } from './section/project-section'
import { ReserchSection } from './section/research-section'
import { SkillSection } from './section/skill-section'
import { EducationSection } from './section/education-section'
import { ContactSection } from './section/contact-section'
import { Footer } from './footer'
import { AIRemark } from './section/ai-remark'
import { ProductSection } from './section/products-section'
export function ImprovedProfileWebsite() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'research', 'skills', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

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
        <meta name="description" content="Technology Leader and Innovator" />
        <meta property="og:title" content="Natthapach.com" />
        <meta property="og:description" content="Technology Leader and Innovator" />
        <meta property="og:image" content="/link-cover.jpeg" />

        <NavBar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </header>

      <main className="pt-20">
        <HomeSection fadeInUp={fadeInUp}/>
        <ProductSection/>
        <AboutSection fadeInUp={fadeInUp}/>
        <ExperienceSection fadeInUp={fadeInUp}/>
        <ProjectSection fadeInUp={fadeInUp} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
        <ReserchSection fadeInUp={fadeInUp}/>
        <SkillSection fadeInUp={fadeInUp}/>
        <CertificateSection/>
        <EducationSection fadeInUp={fadeInUp}/>
        <ContactSection fadeInUp={fadeInUp}/>
        <AIRemark/>
      </main>

      <Footer/>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#2E2F3D] text-white border-[#9F8466]">
          <DialogHeader>
            <DialogTitle className="text-[#9F8466]">{selectedProject?.name}</DialogTitle>
            {/* <DialogClose asChild>
              <Button
                variant="ghost"
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose> */}
          </DialogHeader>
          <DialogDescription className="text-gray-300 whitespace-pre-wrap">
            {selectedProject?.details}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}
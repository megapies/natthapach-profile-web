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
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </header>

      <main className="pt-20">
        <HomeSection fadeInUp={fadeInUp}/>
        <AboutSection fadeInUp={fadeInUp}/>
        <ExperienceSection fadeInUp={fadeInUp}/>
        <ProjectSection fadeInUp={fadeInUp} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
        <ReserchSection fadeInUp={fadeInUp}/>
        <SkillSection fadeInUp={fadeInUp}/>
        <CertificateSection/>
        <section id="education" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">Educations</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Bachelor's Degree in Computer Science",
                  institution: "Kasetsart University",
                  year: "2015 - 2019",
                  gpa: "3.81",
                },
                {
                  title: "Super AI Engineer #1",
                  institution: "AIAT",
                  year: "2020 - 2021",
                  gpa: ""
                },
                {
                  title: "Exchange Student in Engineering Faculty",
                  institution: "Tamkang University, Taiwan",
                  year: "2018",
                  gpa: ""
                },
                {
                  title: "Science and Mathematics Program",
                  institution: "Sri Ayudhaya High School",
                  year: "2008 - 2014",
                  gpa: "3.79"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex items-center md:justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#9F8466] flex items-center justify-center text-white mr-6 flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className={`w-full md:w-5/12 md:text-left md:pl-1`}>
                    <h3 className="text-lg md:text-xl font-semibold text-[#9F8466]">{edu.title}</h3>
                    <p>{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                    {/* <p className="text-sm text-gray-400">GPA: {edu.gpa}</p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-[#2E2F3D] to-[#4E4F5D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">Get in Touch</h2>
            <div className="max-w-md mx-auto space-y-6">
              <div className="flex items-center">
                <Mail className="mr-4 h-6 w-6 text-[#9F8466]" />
                <span>natthapach.a@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-6 w-6 text-[#9F8466]" />
                <span>+66 85 921 8483</span>
              </div>
              <div className="flex space-x-4 justify-center">
                <a href='https://www.facebook.com/NatthapachAnuwattananon'>
                  <Button variant="outline" size="icon" className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
                <a href='https://github.com/megapies'>
                  <Button variant="outline" size="icon" className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href='https://linkedin.com/in/natthapach'>
                  <Button variant="outline" size="icon" className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href='https://medium.com/@natthapach.a'>
                  <Button variant="outline" size="icon" className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" className="fill-current">
                    <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
                  </svg>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2E2F3D] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-[#9F8466]">Quick Links</h3>
              <nav className="flex flex-wrap">
                {['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Education', 'Contact'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} className="mr-4 hover:text-[#9F8466]">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
              <p>&copy; 2024 Natthapach Anuwattananon. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

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
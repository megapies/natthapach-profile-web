'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Users, Lightbulb, MessageSquare, Puzzle, Cloud, LayoutGrid, X, ChevronLeft, ChevronRight, Menu, Cuboid, Brain, CircuitBoard, Eye, BookOpenText, Ghost, Component } from 'lucide-react'
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

export function ImprovedProfileWebsite() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

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
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-[#9F8466]">
              <AvatarImage src="/profile-squarex.jpeg" alt="Natthapach Anuwattananon" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <Link href="/" className="text-xl font-bold text-[#9F8466]">
              Natthapach
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Education', 'Contact'].map((item) => (
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
                      className={`hover:text-[#9F8466] transition-colors ${
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
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E2F3D] to-[#4E4F5D]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
                <div className="relative w-1/2 md:w-1/4 aspect-square rounded-full bg-gradient-to-b from-[#2E2F3D] to-[#9F8466] flex items-center justify-center">
                  <img
                    src="/profile-square.jpeg"
                    alt="Profile"
                    className="w-[95%] h-[95%] object-cover rounded-full"
                  />
                </div>
              {/* <img
                src="/profile-square.jpeg"
                alt="Natthapach Anuwattananon"
                className="rounded-full shadow-xl w-1/2 md:w-1/4"
              /> */}
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Natthapach Anuwattananon
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-[#9F8466]"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Technology Leader and Innovator
            </motion.p>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Driving Innovation through Technology, Blockchain, and AI
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-[#9F8466] hover:bg-[#8F7456] text-white">
                <Link href="#about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </section>

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
                  src="/profile-square.jpeg"
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

        <section id="experience" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">Work Experience</h2>
            <div className="relative">
              {experiences.map((job, index) => (
                <motion.div
                  key={index}
                  className={`flex items-top mb-8 md:justify-center`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#9F8466] flex items-center justify-center text-white mr-6">
                    {
                      ['',
                        <BookOpenText key="1" className="h-6 w-6"/>,
                        <Code key="2" className="h-6 w-6"/>,
                        <Brain key="3" className="h-6 w-6"/>,
                        <CodeSandboxLogoIcon key="4" className="h-6 w-6"/>,
                        <Users key="5" className="h-6 w-6"/>,
                        <Component key="6" className="h-6 w-6"/>,
                      ][job.level]
                    }
                  </div>
                  {/* <div className="hidden md:block w-2 h-2 bg-[#9F8466] rounded-full z-10"></div> */}
                  <div className={`w-full md:w-5/12 md:text-left md:pl-1`}>
                    <h3 className="text-lg md:text-xl font-semibold text-[#9F8466]">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-400">{job.since} - {job.to}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">Highlighted Projects</h2>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {projects.map((project, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-52 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
                      <Card className="bg-[#2E2F3D] border-[#9F8466]/30 h-full flex flex-col">
                        <CardHeader className="bg-[#9F8466] text-white">
                          <CardTitle className="truncate" title={project.name}>{project.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 flex-grow overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover mb-4 rounded-md"
                          />
                          <p className="line-clamp-3">{project.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            variant="outline" 
                            className="w-full border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white"
                            onClick={() => setSelectedProject(project)}
                          >
                            Read More
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#2E2F3D]/50 border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white ${
                  !canScrollPrev ? 'opacity-50 cursor-not-allowed hidden' : ''
                }`}
                onClick={scrollPrev}
                disabled={!canScrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#2E2F3D]/50 border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white ${
                  !canScrollNext ? 'opacity-50 cursor-not-allowed hidden' : ''
                }`}
                onClick={scrollNext}
                disabled={!canScrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="research" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">Research and Publications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Generating a 3D Hand Model from Fingertip Positions Using Image Processing Techniques",
                  description: "This research explores innovative methods to create accurate 3D hand models using advanced image processing techniques, focusing on fingertip position data."
                },
                {
                  title: "Generative AI in Practice",
                  description: "An in-depth study on the practical applications of Generative AI across various industries, highlighting its potential to transform creative and analytical processes."
                }
              ].map((research, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#3E3F4D] border-[#9F8466]/30">
                    <CardHeader className="bg-[#9F8466] text-white">
                      <CardTitle>{research.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p>{research.description}</p>
                    </CardContent>
                    <CardFooter>
                      {/* <Button variant="outline" className="w-full border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">Read More</Button> */}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">Technical and Soft Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[#9F8466]">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Blockchain fundamentals", icon: <Cuboid className="h-6 w-6" /> },
                    { name: "Blockchain developements", icon: <Cuboid className="h-6 w-6" /> },
                    { name: "AI fundamentals", icon: <Brain className="h-6 w-6" /> },
                    { name: "Generative AI", icon: <Brain className="h-6 w-6" /> },
                    { name: "Microservice", icon: <Cloud className="h-6 w-6" /> },
                    { name: "Cloud Computing", icon: <Cloud className="h-6 w-6" /> },
                    { name: "Software Architecture", icon: <CircuitBoard className="h-6 w-6" /> },
                    { name: "Data Scientist", icon: <Eye className="h-6 w-6" /> },
                    { name: "Data Analytics", icon: <Eye className="h-6 w-6" /> },
                    { name: "Node JS", icon: <Code className="h-6 w-6" /> },
                    { name: "Typescript", icon: <Code className="h-6 w-6" /> },
                    { name: "Next.js", icon: <Code className="h-6 w-6" /> },
                    { name: "Python, Numpy, Pandas", icon: <Code className="h-6 w-6" /> },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-[#9F8466]">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[#9F8466]">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Leadership", icon: <Users className="h-6 w-6" /> },
                    { name: "Product Ownership", icon: <Briefcase className="h-6 w-6" /> },
                    { name: "Team Development", icon: <Users className="h-6 w-6" /> },
                    { name: "Communication", icon: <MessageSquare className="h-6 w-6" /> },
                    { name: "Problem Solving", icon: <Puzzle className="h-6 w-6" /> },
                    { name: "Business Solution", icon: <Puzzle className="h-6 w-6" /> },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-[#9F8466]">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9F8466]">Education and Certifications</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Bachelor's Degree in Computer Science",
                  institution: "Kasetsart University",
                  year: "2015 - 2019"
                },
                {
                  title: "Super AI Engineer #1",
                  institution: "AIAT",
                  year: "2020 - 2021"
                },
                {
                  title: "Exchange Student in Engineering Faculty",
                  institution: "Tamkang University, Taiwan",
                  year: "2018"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#9F8466] flex items-center justify-center text-white mr-6 flex-shrink-0">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#9F8466]">{edu.title}</h3>
                    <p>{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
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
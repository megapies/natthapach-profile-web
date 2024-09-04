'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Users, Lightbulb, MessageSquare, Puzzle, Cloud, LayoutGrid, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

type ProjectInfo = {
  name: string,
  description: string,
  details: string,
}

export function ImprovedProfileWebsite() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null)

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

  const projects: ProjectInfo[] = [
    {
      name: "ChomCHOB Tunnel",
      description: "Developed ChomCHOB's first smart contract product, revolutionizing blockchain interactions.",
      details: "ChomCHOB Tunnel is an innovative smart contract product that streamlines blockchain interactions. It provides a secure and efficient way for users to interact with various blockchain networks, simplifying complex processes and reducing transaction costs. The project involved developing a user-friendly interface, implementing robust security measures, and optimizing gas fees for Ethereum-based transactions."
    },
    {
      name: "ChomCHOB Backend Framework",
      description: "Architected a robust backend framework, enhancing development efficiency and scalability.",
      details: "The ChomCHOB Backend Framework is a comprehensive solution designed to accelerate backend development and improve scalability. It incorporates best practices in software architecture, including modular design, dependency injection, and automated testing. The framework supports multiple databases, caching mechanisms, and message queues, allowing developers to build high-performance, scalable applications with ease."
    },
    {
      name: "ChomCHOB Platforms",
      description: "Led the development of multiple platforms, integrating cutting-edge technologies for optimal performance.",
      details: "ChomCHOB Platforms is a suite of interconnected applications designed to provide a seamless experience for users across various domains. The project involved developing a microservices architecture, implementing real-time data synchronization, and creating a unified authentication system. The platforms leverage technologies such as GraphQL for efficient data fetching, WebSockets for real-time updates, and containerization for easy deployment and scaling."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2F3D] to-[#3E3F4D] text-white font-['Poppins',sans-serif]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2F3D]/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-[#9F8466]">
              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Natthapach Anuwattananon" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <Link href="/" className="text-xl font-bold text-[#9F8466]">
              Natthapach Anuwattananon
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
          <Button asChild className="bg-[#9F8466] hover:bg-[#8F7456] text-white">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E2F3D] to-[#4E4F5D]">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Natthapach Anuwattananon
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-8 text-[#9F8466]"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Technology Leader and Innovator
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl mb-12"
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
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg">
                  As a technology leader and innovator, I am dedicated to driving innovation that positively impacts people and the world. With expertise in blockchain, AI, and software engineering, I strive to create solutions that push the boundaries of whats possible.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-[#9F8466]">Core Expertise:</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Blockchain Development</li>
                  <li>Artificial Intelligence</li>
                  <li>Cloud Computing</li>
                  <li>Software Architecture</li>
                  <li>Team Leadership</li>
                </ul>
                <Button asChild className="bg-[#9F8466] hover:bg-[#8F7456] text-white">
                  <Link href="#projects">View My Projects</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Profile+Image"
                  alt="Natthapach Anuwattananon"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#9F8466] text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">10+ Years</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Work Experience</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#9F8466]/30"></div>
              {[
                { role: "Principal Software Engineer", company: "ChomCHOB", year: "2023 - Present" },
                { role: "Senior Software Engineer", company: "ChomCHOB", year: "2021 - 2023" },
                { role: "Software Engineer", company: "ChomCHOB", year: "2019 - 2021" },
                { role: "Intern", company: "ChomCHOB", year: "2018" }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold text-[#9F8466]">{job.role}</h3>
                    <p className="text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-400">{job.year}</p>
                  </div>
                  <div className="w-2 h-2 bg-[#9F8466] rounded-full z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Highlighted Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#2E2F3D] border-[#9F8466]/30 h-full flex flex-col">
                    <CardHeader className="bg-[#9F8466] text-white">
                      <CardTitle className="truncate" title={project.name}>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=200&width=400&text=${project.name}`}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Research and Publications</h2>
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
                      <Button variant="outline" className="w-full border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">Read More</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Technical and Soft Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#9F8466]">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Blockchain", icon: <Code className="h-6 w-6" /> },
                    { name: "AI", icon: <Lightbulb className="h-6 w-6" /> },
                    { name: "Node.js", icon: <Code className="h-6 w-6" /> },
                    { name: "Cloud Computing", icon: <Cloud className="h-6 w-6" /> },
                    { name: "Software Architecture", icon: <LayoutGrid className="h-6 w-6" /> }
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
                <h3 className="text-2xl font-semibold mb-6 text-[#9F8466]">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Leadership", icon: <Users className="h-6 w-6" /> },
                    { name: "Product Ownership", icon: <Briefcase className="h-6 w-6" /> },
                    { name: "Team Development", icon: <Users className="h-6 w-6" /> },
                    { name: "Communication", icon: <MessageSquare className="h-6 w-6" /> },
                    { name: "Problem Solving", icon: <Puzzle className="h-6 w-6" /> }
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
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Education and Certifications</h2>
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
                  <div className="w-16 h-16 rounded-full bg-[#9F8466] flex items-center justify-center text-white mr-6">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#9F8466]">{edu.title}</h3>
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
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Get in Touch</h2>
            <div className="max-w-md mx-auto space-y-6">
              <div className="flex items-center">
                <Mail className="mr-4 h-6 w-6 text-[#9F8466]" />
                <span>natthapach@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-6 w-6 text-[#9F8466]" />
                <span>+66 123 456 789</span>
              </div>
              <div className="flex space-x-4 justify-center">
                <Button variant="outline" size="icon" className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
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
            <div className="w-full md:w-1/3 flex justify-end">
              <Link href="#" className="mr-4 hover:text-[#9F8466]">Terms of Use</Link>
              <Link href="#" className="hover:text-[#9F8466]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#2E2F3D] text-white border-[#9F8466]">
          <DialogHeader>
            <DialogTitle className="text-[#9F8466]">{selectedProject?.name}</DialogTitle>
            <Button
              variant="ghost"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          <DialogDescription className="text-gray-300">
            {selectedProject?.details}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}
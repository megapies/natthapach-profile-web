'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Users, Lightbulb, MessageSquare, Puzzle, Cloud, LayoutGrid, X, ChevronLeft, ChevronRight, Cuboid, Brain, CircuitBoard, Eye } from 'lucide-react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"

type Project = {
  name: string;
  year: string,
  description: string;
  details: string;
  company: string,
  image: string,
}
type Experience = {
  title: string,
  since: string,
  to: string,
  company: string,
  responsibilities: string[],
}

export default function ImprovedProfileWebsite() {
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

  const projects: Project[] = [
    {
      name: "ChomCHOB Platforms",
      year: '2024',
      image: '',
      company: 'ChomCHOB',
      description: `Direct and supervise for develop whole company's products`,
      details: `At its core, ChomCHOB focuses on loyalty technology and FinTech products. The ChomCHOB Platforms
initiative is a strategic expansion that builds upon these core offerings to enhance other technology sectors,
including HRTech, MarTech, and EdTech.

The concept extends beyond marketing; loyalty is essential across various segments. In HRTech,
organizations should foster loyalty with their employees. In MarTech, businesses should cultivate loyalty with
their customers. In EdTech, schools should build loyalty with their students and parents.

As a Tech Lead, I conducted research and gathered data to design this product strategy and idea for
discussion with executives. I also supervised the development of products in alignment with this plan.`
    },
    {
      name: "ChomCHOB Tunnel",
      year: '2022',
      image: '',
      company: 'ChomCHOB',
      description: `Blockchain product for converting between cryptocurrencies and loyalty point in real world`,
      details: `ChomCHOB Tunnel is the first smart contract products of ChomCHOB. This product gives users to convert
between their cryptocurrencies on blockchain and CCP (ChomCHOB point), two-way conversion. This
product solve pain point of people who have cryptocurrencies on blockchain but hard to use in real-life and
also make benefit to origin ChomCHOB business.

In this project, I design project concepts, project management, and implement smart contracts.`
    },
    {
      name: "ChomCHOB Backend Framwork",
      year: '2021',
      image: '',
      company: 'ChomCHOB',
      description: `Building own Typescript framework for microservice`,
      details: `Developed a custom backend framework to enhance team collaboration by establishing a unified and
consistent development environment. This framework was built upon the team's existing structure,
considering CI/CD constraints, and included transitioning the team’s primary programming language from
JavaScript to TypeScript.

The framework extended beyond project architecture to incorporate shared tools, such as CLI tools for
project scaffolding, API creation, and function development, along with helper libraries to simplify common
tasks.

Additionally, the framework was designed to support more than just API development, featuring a
microservices architecture that accommodates various processing capabilities, such as queue processing,
job handling, pub/sub systems, and more.`
    },
    {
      name: "HR Tech 2024",
      year: '2024',
      image: '',
      company: 'ChomCHOB',
      description: `Speaker in ChomCHOB's Tech Stage in HR Tech 2024 event`,
      details: ``
    },
  ]

  const experiences: Experience[] = [
    {
      title: 'Principal Software Engineer',
      company: 'ChomCHOB',
      since: 'April 2023',
      to: 'Present',
      responsibilities: [
        'Head of developement department',
        'Whole company\'s products management',
        'Supervise and improve developer team',
      ]
    },
    {
      title: 'Innovation Team Leader',
      company: 'ChomCHOB',
      since: 'January 2023',
      to: 'March 2023',
      responsibilities: [
        'Design and develop innovation products',
        'Supervise and improve developer team',
      ]
    },
    {
      title: 'Executive Blockchain Developer',
      company: 'ChomCHOB',
      since: 'July 2022',
      to: 'December 2022',
      responsibilities: [
        'Design and implement blockchain products',
        'Consult business with blockchain and Web 3.0 knowledge'
      ]
    },
    {
      title: 'Senior Backend and Blockchain Developer',
      company: 'ChomCHOB',
      since: 'June 2021',
      to: 'July 2022',
      responsibilities: [
        'Design and implement blockchain products',
      ]
    },
    {
      title: 'Senior Backend Developer and Data Scientist',
      company: 'ChomCHOB',
      since: 'January 2021',
      to: 'June 2022',
      responsibilities: [
        'Data analytics, research and solution for business',
      ]
    },
    {
      title: 'Junior Backend Developer',
      company: 'ChomCHOB',
      since: 'January 2019',
      to: 'December 2020',
      responsibilities: [
        'Design and implement microservices, database and system for ChomCHOB\'s products'
      ]
    },
    {
      title: 'Internship Backend Developer',
      company: 'ChomCHOB',
      since: 'July 2018',
      to: 'August 2018',
      responsibilities: [
        'Implement web service for ChomCHOB product'
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2F3D] to-[#3E3F4D] text-white font-['Poppins',sans-serif]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2F3D]/80 backdrop-blur-sm shadow-md">
      <title>Natthapach Anuwattananon</title>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-[#9F8466]">
              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Natthapach Anuwattananon" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <Link href="/" className="text-xl font-bold text-[#9F8466]">
              Natthapach
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
          <Button asChild className="bg-[#9F8466] hover:bg-[#8F7456] text-white">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </header>

      <main className="pt-20">
        {/* Home section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E2F3D] to-[#4E4F5D]">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Natthapach<br></br>Anuwattananon
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

        {/* About section */}
        <section id="about" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg">
                  I am an innovator with a strong foundation in technical knowledge, including programming, blockchain, and AI.
                  My expertise also extends to business solutions, product ownership, and team development. 
                  <br></br>
                  <br></br>
                  I am seeking a rolw where I can drive innovation that positively impacts people and the world.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-[#9F8466]">Core Expertise:</h3>
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
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Profile+Image"
                  width={400}
                  height={400}
                  alt="Natthapach Anuwattananon"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#9F8466] text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">5+ Years</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Work Experience</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#9F8466]/30"></div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  {index % 2 === 1 && <div className="w-4 h-4 bg-[#9F8466] rounded-full z-10"></div>}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold text-[#9F8466]">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.since} - {exp.to}</p>
                  </div>
                  {index % 2 === 0 && <div className="w-4 h-4 bg-[#9F8466] rounded-full z-10"></div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section with carousel */}
        <section id="projects" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Highlighted Projects</h2>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {projects.map((project, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
                      <Card className="bg-[#2E2F3D] border-[#9F8466]/30 h-full flex flex-col">
                        <CardHeader className="bg-[#9F8466] text-white">
                          <CardTitle className="truncate" title={project.name}>
                            <div>
                              {project.name}
                            </div>
                            <div className='font-light mt-4'>
                              {project.company} | {project.year}
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 flex-grow overflow-hidden bg-[#EFEFEF]">
                          <Image
                            src={project.image}
                            width={400}
                            height={200}
                            alt={project.name}
                            className="w-full h-48 object-cover mb-4 rounded-md"
                          />
                          <p className="line-clamp-3">{project.description}</p>
                        </CardContent>
                        <CardFooter className="bg-[#EFEFEF]">
                          <Button 
                            variant="outline" 
                            className="w-full border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466]
                            hover:text-white"
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
                  !canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''
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
                  !canScrollNext ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={scrollNext}
                disabled={!canScrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Research section */}
        <section id="research" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Research and Publications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Generative AI in Practice",
                  company: 'Personal',
                  year: '2024',
                  description: "Conducted research and applied Generative AI to enhance productivity in various areas. For example, using tools like Midjourney to create art products such as wall art, Line stickers, and NFT images; and employing ChatGPT to refine articles, write novels, and generate code, among other applications."
                },
                {
                  title: "Generating a 3D Hand Model from Fingertip Positions Using Image Processing Techniques",
                  company: 'Ubi-Media',
                  year: '2019',
                  description: "The research paper in computer science is about tracking hand gestures in 3-dimensional space using the Kinect camera and image processing technique."
                },
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
                      <CardTitle>
                        <div>
                                {research.title}
                        </div>
                        <div className='font-light mt-4'>
                          {research.company} | {research.year}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 bg-[#EFEFEF]">
                      <p>{research.description}</p>
                    </CardContent>
                    <CardFooter className='bg-[#EFEFEF]'>
                      {/* <Button variant="outline" className="w-full border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">Read More</Button> */}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section id="skills" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Technical and Soft Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#9F8466]">Technical Skills</h3>
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
                <h3 className="text-2xl font-semibold mb-6 text-[#9F8466]">Soft Skills</h3>
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

        {/* Education section */}
        <section id="education" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Education and Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
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
                },
                {
                  title: "High School, Math and Scient",
                  institution: "Sri Ayudhya High School",
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

        {/* Contact section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-[#2E2F3D] to-[#4E4F5D]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#9F8466]">Get in Touch</h2>
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
          </DialogHeader>
          <DialogDescription className="text-gray-300 whitespace-pre-wrap" >
            {selectedProject?.details}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}
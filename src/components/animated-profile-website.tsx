'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Facebook, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Users, Lightbulb, MessageSquare, Cloud, LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AnimatedProfileWebsite() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2F3D] to-[#3E3F4D] text-white font-['Poppins',sans-serif]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-[#2E2F3D]/80 backdrop-blur-sm shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Avatar className="h-12 w-12 border-2 border-[#9F8466]">
              <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Natthapach Anuwattananon" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <Link href="/" className="text-xl font-bold text-[#9F8466]">
              Natthapach Anuwattananon
            </Link>
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-[#9F8466] transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-[#9F8466] font-semibold' : ''
                  }`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="bg-[#9F8466] hover:bg-[#8F7456] text-white">
              <Link href="#contact">Contact</Link>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E2F3D] to-[#4E4F5D]">
          <motion.div 
            className="container mx-auto px-4 text-center"
            style={{ opacity, scale }}
          >
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
          </motion.div>
        </section>

        <section id="about" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-[#9F8466]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <motion.p className="mb-6 text-lg" variants={fadeInUp}>
                  As a technology leader and innovator, I am dedicated to driving innovation that positively impacts people and the world. With expertise in blockchain, AI, and software engineering, I strive to create solutions that push the boundaries of whats possible.
                </motion.p>
                <motion.h3 className="text-2xl font-semibold mb-4 text-[#9F8466]" variants={fadeInUp}>Core Expertise:</motion.h3>
                <motion.ul className="list-disc list-inside mb-6 space-y-2" variants={staggerChildren}>
                  {["Blockchain Development", "Artificial Intelligence", "Cloud Computing", "Software Architecture", "Team Leadership"].map((item, index) => (
                    <motion.li key={index} variants={fadeInUp}>{item}</motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeInUp}>
                  <Button asChild className="bg-[#9F8466] hover:bg-[#8F7456] text-white">
                    <Link href="#projects">View My Projects</Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="/next.svg?height=400&width=400&text=Profile+Image"
                  alt="Natthapach Anuwattananon"
                  className="rounded-lg shadow-xl"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-[#9F8466] text-white p-4 rounded-lg shadow-lg"
                  animate={pulseAnimation}
                >
                  <p className="font-semibold">10+ Years</p>
                  <p>Experience</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-[#9F8466]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Work Experience
            </motion.h2>
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
                  <motion.div 
                    className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-semibold text-[#9F8466]">{job.role}</h3>
                    <p className="text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-400">{job.year}</p>
                  </motion.div>
                  <motion.div 
                    className="w-2 h-2 bg-[#9F8466] rounded-full z-10"
                    whileHover={{ scale: 1.5 }}
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-[#9F8466]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Highlighted Projects
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "ChomCHOB Tunnel",
                  description: "Developed ChomCHOB's first smart contract product, revolutionizing blockchain interactions."
                },
                {
                  name: "ChomCHOB Backend Framework",
                  description: "Architected a robust backend framework, enhancing development efficiency and scalability."
                },
                {
                  name: "ChomCHOB Platforms",
                  description: "Led the development of multiple platforms, integrating cutting-edge technologies for optimal performance."
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="bg-[#2E2F3D] border-[#9F8466]/30">
                      <CardHeader className="bg-[#9F8466] text-white">
                        <CardTitle>{project.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <img
                          src={`/placeholder.svg?height=200&width=400&text=${project.name}`}
                          alt={project.name}
                          className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <p>{project.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">Read More</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-[#9F8466]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Research and Publications
            </motion.h2>
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
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-[#3E3F4D]">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-[#9F8466]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Technical and Soft Skills
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
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
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-[#9F8466]">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#9F8466]">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Leadership", icon: <Users className="h-6 w-6" /> },
                    { name: "Product Ownership", icon: <Briefcase className="h-6 w-6" /> },
                    { name: "Team Development", icon: <Users className="h-6 w-6" /> },
                    { name: "Communication", icon: <MessageSquare className="h-6 w-6" /> },
                    { name: "Problem Solving", icon: <MessageSquare className="h-6 w-6" /> }
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-[#9F8466]">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-[#2E2F3D]">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-[#9F8466]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Education and Certifications
            </motion.h2>
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
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-[#9F8466] flex items-center justify-center text-white mr-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <GraduationCap className="h-8 w-8" />
                  </motion.div>
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
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-[#9F8466]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Get in Touch
            </motion.h2>
            <motion.div 
              className="max-w-md mx-auto space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div className="flex items-center" variants={fadeInUp}>
                <Mail className="mr-4 h-6 w-6 text-[#9F8466]" />
                <span>natthapach@example.com</span>
              </motion.div>
              <motion.div className="flex items-center" variants={fadeInUp}>
                <Phone className="mr-4 h-6 w-6 text-[#9F8466]" />
                <span>+66 123 456 789</span>
              </motion.div>
              <motion.div className="flex space-x-4 justify-center" variants={fadeInUp}>
                {[
                  { icon: <Facebook className="h-5 w-5" />, href: "#" },
                  { icon: <Facebook className="h-5 w-5" />, href: "#" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "#" }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-[#2E2F3D] border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white"
                      asChild
                    >
                      <Link href={social.href}>{social.icon}</Link>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2E2F3D] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-[#9F8466]">Quick Links</h3>
              <nav className="flex flex-wrap">
                {['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Contact'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href={`#${item.toLowerCase()}`} className="mr-4 hover:text-[#9F8466]">
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
              <p>&copy; 2024 Natthapach Anuwattananon. All Rights Reserved.</p>
            </div>
            <div className="w-full md:w-1/3 flex justify-end">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" className="mr-4 hover:text-[#9F8466]">Terms of Use</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" className="hover:text-[#9F8466]">Privacy Policy</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
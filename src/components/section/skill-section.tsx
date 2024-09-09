'use client'

import { motion } from 'framer-motion'
import {  Briefcase, Code, Users, MessageSquare, Puzzle, Cloud, Cuboid, Brain, CircuitBoard, Eye } from 'lucide-react'

interface SkillSectionProps {
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

export function SkillSection({ fadeInUp }: SkillSectionProps) {
  return (
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
  )
}

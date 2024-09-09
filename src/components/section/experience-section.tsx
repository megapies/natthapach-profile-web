'use client'

import { motion } from 'framer-motion'
import { Code, Users, Brain, BookOpenText, Component } from 'lucide-react'
import experiences, { Experience } from '@/components/data/experiences'
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons'

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

export function ExperienceSection({ fadeInUp }: HomeSectionProps) {
  return (
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
  )
}
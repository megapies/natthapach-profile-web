'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

interface EducationSectionProps {
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

export function EducationSection({ fadeInUp }: EducationSectionProps) {
  return (
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
  )
}
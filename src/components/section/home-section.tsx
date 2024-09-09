'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

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

export function HomeSection({ fadeInUp }: HomeSectionProps) {
  return (
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
  )
}
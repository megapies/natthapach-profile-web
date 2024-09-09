'use client'

import { motion } from 'framer-motion'
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ResearchSectionProps {
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

export function ReserchSection({ fadeInUp }: ResearchSectionProps) {
  return (
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
  )
}
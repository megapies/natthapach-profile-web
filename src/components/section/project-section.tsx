'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import projects, { Project } from '@/components/data/projects'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'


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
  },
  selectedProject: Project | null,
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>
}

export function ProjectSection({ fadeInUp, selectedProject, setSelectedProject }: HomeSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

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

  return (
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
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#2E2F3D]/50 border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white ${!canScrollPrev ? 'opacity-50 cursor-not-allowed hidden' : ''
              }`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#2E2F3D]/50 border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white ${!canScrollNext ? 'opacity-50 cursor-not-allowed hidden' : ''
              }`}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className='flex flex items-center justify-center pt-8'>
          <a href="/projects">
            <Button
              variant="outline"
              className="w-48 border-[#9F8466] hover:text-[#9F8466] hover:bg-white bg-[#9F8466] text-white"
            >
              View All
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
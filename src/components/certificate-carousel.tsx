'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Certificate = {
  id: number;
  title: string;
  imageUrl: string;
}

const certificates: Certificate[] = [
  { id: 1, title: "AWS Certified Solutions Architect", imageUrl: "/placeholder.svg?height=400&width=600&text=AWS+Certificate" },
  { id: 2, title: "Google Cloud Professional Cloud Architect", imageUrl: "/placeholder.svg?height=400&width=600&text=Google+Cloud+Certificate" },
  { id: 3, title: "Microsoft Certified: Azure Solutions Architect Expert", imageUrl: "/placeholder.svg?height=400&width=600&text=Azure+Certificate" },
  { id: 4, title: "Certified Kubernetes Administrator (CKA)", imageUrl: "/placeholder.svg?height=400&width=600&text=Kubernetes+Certificate" },
  { id: 5, title: "Certified Blockchain Developer", imageUrl: "/placeholder.svg?height=400&width=600&text=Blockchain+Certificate" },
]

export function CertificateCarousel() {
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
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4 pr-4">
              <div className="bg-[#2E2F3D] rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <div className="relative pt-[66.67%] overflow-hidden">
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-[#9F8466] text-center">{certificate.title}</h3>
                </div>
              </div>
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
  )
}
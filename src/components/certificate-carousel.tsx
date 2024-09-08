"use client"

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const certificates = [
  { name: "AWS Certified Solutions Architect", image: "/placeholder.svg?height=300&width=400&text=AWS+Certification" },
  { name: "Google Cloud Professional Data Engineer", image: "/placeholder.svg?height=300&width=400&text=Google+Cloud+Certification" },
  { name: "Microsoft Certified: Azure Solutions Architect Expert", image: "/placeholder.svg?height=300&width=400&text=Azure+Certification" },
  { name: "Certified Kubernetes Administrator (CKA)", image: "/placeholder.svg?height=300&width=400&text=Kubernetes+Certification" },
  { name: "Certified Information Systems Security Professional (CISSP)", image: "/placeholder.svg?height=300&width=400&text=CISSP+Certification" },
]

export function CertificateCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollInterval: NodeJS.Timeout

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0
        } else {
          carousel.scrollLeft += 1
        }
      }, 20)
    }

    const stopScroll = () => {
      clearInterval(scrollInterval)
    }

    startScroll()
    carousel.addEventListener('mouseenter', stopScroll)
    carousel.addEventListener('mouseleave', startScroll)

    return () => {
      stopScroll()
      carousel.removeEventListener('mouseenter', stopScroll)
      carousel.removeEventListener('mouseleave', startScroll)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden bg-[#2E2F3D] py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#9F8466]">Certifications</h2>
      <div 
        ref={carouselRef}
        className="flex overflow-x-hidden space-x-4 p-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {[...certificates, ...certificates].map((cert, index) => (
          <Card key={index} className="flex-shrink-0 w-64 bg-[#3E3F4D] border-[#9F8466]/30 rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <p className="text-center w-full font-semibold text-[#9F8466]">{cert.name}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
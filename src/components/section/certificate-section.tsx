"use client"

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardFooter, CardTitle, CardHeader } from "@/components/ui/card"
import certificates, { Certification } from '@/components/data/certificates'

export function CertificateSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollInterval: NodeJS.Timeout

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          stopScroll()
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
    <div className="w-full overflow-hidden bg-[#EFEFEF] py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#9F8466]">Certifications</h2>
      <div 
        ref={carouselRef}
        className="flex overflow-x-hidden space-x-4 p-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {[...certificates, ...certificates].map((cert, index) => (
          <img
          key={index}
          src={cert.image}
          alt={cert.name}
          className="h-40 mb-4 rounded-xl shadow-lg"
        />

        //   <div key={index} className="flex-[0_0_100%] min-w-48 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
        //   <Card className="bg-[#2E2F3D] border-[#9F8466]/30 h-full flex flex-col">
        //     {/* <CardHeader className="bg-[#9F8466] text-white">
        //     <CardTitle className="truncate"></CardTitle>
        //   </CardHeader> */}
        //   <CardContent className="flex-grow overflow-hidden p-0">
        //     <img
        //       src={cert.image}
        //       alt={cert.name}
        //       className="w-full h-27 object-cover mb-4 rounded-md"
        //     />
        //     {/* <p className="line-clamp-2 p-6">{cert.name}</p> */}
        //   </CardContent>
        //   <CardFooter>
        //   </CardFooter>
        // </Card>
        // </div>
        ))}
      </div>
    </div>
  )
}
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import WrapperType from "embla-carousel"
import Autoplay from 'embla-carousel-autoplay'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AutoplayCarousel = () => {
  const options: EmblaOptionsType = { loop: true }
  const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative max-w-screen-lg mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((index) => (
            <div className="flex-[0_0_100%] min-w-0 relative aspect-video" key={index}>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-4xl font-bold">
                Slide {index}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        size="icon"
        variant="outline"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        size="icon"
        variant="outline"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}

export default AutoplayCarousel
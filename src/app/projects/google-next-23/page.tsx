'use client'

import { Footer } from "@/components/footer"
import { NavBar } from "@/components/section/nav-bar"
import { useState } from "react"
import Image from 'next/image'

export default function Page() {
  const [activeSection, setActiveSection] = useState('projects')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2F3D] to-[#3E3F4D] text-white font-['Poppins',sans-serif] overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
          overflow-x: hidden;
        }
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2F3D]/80 backdrop-blur-sm shadow-md">
        <title>Natthapach Anuwattananon</title>
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      </header>

      <main className="pt-20 px-8">
        <div className="container px-4 my-12 lg:px-64 w-full">
          <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">Google Cloud Next '23</h2>
          <p className="text-center">Google Cloud | 2023</p>
          <img src='/projects/gg-next-23/cover.jpeg' alt="cover" className="w-full md:h-64 rounded-lg object-cover my-8 shadow-md" />
          <p className="mb-6">
            I had the invited to attend <b className="text-[#9F8466]">Google Cloud Next '23</b> in San Francisco, one of the most significant innovation events hosted by Google annually. This year's event was held from August 29 to 31, 2023, gathering technology enthusiasts, developers, and industry leaders from around the globe to explore the latest advancements in cloud technology and artificial intelligence.
          </p>
          <p className="mb-6">
            Google Cloud Next is known for being a platform where Google unveils its newest innovations and shares insights into the future of cloud computing. It is also an event where technology partners collaborate, network, and discuss the ever-evolving tech landscape. In 2023, the event was packed with numerous tech speeches, workshops, and hands-on sessions delivered by Google's own experts and its key technology partners, providing a deep dive into the latest tools and solutions across the Google ecosystem.
          </p>
          <p className="mb-6">
            One of the key highlights of this year's event was the introduction of **DUET AI**, Google's latest generative AI offering. DUET AI is designed to work seamlessly with Google Workspace, bringing advanced AI capabilities directly into everyday productivity tools. This innovation aims to enhance collaboration, creativity, and efficiency by enabling users to generate content, automate workflows, and make data-driven decisions with greater ease.
          </p>
          <img src='/projects/gg-next-23/event.jpeg' alt="cover" className="w-full md:h-72 rounded-lg object-cover my-8 shadow-md" />
          <p className="mb-6">
            Attending Google Cloud Next '23 was an enriching experience. It offered valuable insights into emerging trends in AI and cloud computing, especially around the integration of AI into business workflows through tools like DUET AI. The event also provided an opportunity to network with peers and learn from leaders at the forefront of technology innovation, further broadening my understanding of how these advancements can be applied to drive business success.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
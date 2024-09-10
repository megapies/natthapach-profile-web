'use client'

import { Footer } from "@/components/footer"
import { NavBar } from "@/components/section/nav-bar"
import { useState } from "react"

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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">Morefans</h2>
        <p className="text-center">ChomCHOB | 2022</p>
        <img src='/projects/morefans/morefans-mockup.png' alt="cover" className="w-full md:h-96 rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          NFTs, or non-fungible tokens, offer versatile applications across various business sectors and have the potential to address specific challenges faced by different industries. In the event and concert organization sector, for example, a common pain point is the resale of tickets and the prevalence of counterfeit tickets.
        </p>
        <p className="mb-6">
          NFTs can provide a solution by enabling ticket verification and adding value for organizers through controlled ticket resales. Beyond these advantages, the market for cryptocurrencies and NFTs was highly active in 2022, sparking interest from potential partners to create their own NFT ticketing products. This interest led to the development of the **Morefans Application**.
        </p>
        <p className="mb-6">
          In this project, I was responsible for gathering requirements from clients, designing the system, writing smart contracts, and collaborating with various teams to bring the product to completion.
        </p>
        <img src='/projects/morefans/opensea.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Although the product ultimately did not reach the market due to business-related reasons, the process demonstrated the potential of NFT technology in transforming the event and ticketing landscape.
        </p>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
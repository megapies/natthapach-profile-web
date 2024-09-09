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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">ChomCHOB Tunnel</h2>
        <p className="text-center">ChomCHOB | 2022</p>
        <img src='/projects/cc-tunnel/cover.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          In 2021-2022, as the number of users engaging with crypto and blockchain products surged, ChomCHOB began looking for new ways to enhance its core offerings. The goal was to find a product that would benefit users while seamlessly integrating with ChomCHOB's existing focus on points exchange, rewards, and services.
        </p>
        <p className="mb-6">
          The idea for <b className="text-[#9F8466]">ChomCHOB Tunnel</b> was born from a simple observation: many crypto holders struggled to use their cryptocurrencies in daily life due to the complexity of the process. Converting crypto into something spendable required multiple steps, creating a significant barrier for everyday use.
        </p>
        <p className="mb-6">
          ChomCHOB Tunnel emerged as a solution, a <span className="text-[#9F8466]">"tunnel"</span> connecting the blockchain world with the real world. In its first phase, we enabled users to convert their cryptocurrencies into ChomCHOB Points (CCP) within the ChomCHOB app. These points could then be used for a variety of real-world transactions, from redeeming e-vouchers at leading stores nationwide to paying utility bills like water, electricity, and phone charges.
        </p>
        <p className="mb-6">
          Initially launched on the Binance Smart Chain (BSC), ChomCHOB Tunnel soon expanded to other chains like Polygon, Bitkub, and centralized exchanges such as Binance. This broadened its reach and use cases, allowing users to utilize their cryptocurrencies more conveniently while also adding value to other project tokens.
        </p>
        <img src='/projects/cc-tunnel/p2c.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          But the journey didn't stop there. We further developed ChomCHOB Tunnel to allow the reverse—converting points back into cryptocurrency. This opened up new possibilities for everyday users, making it easier for them to acquire crypto using points earned from daily activities.
        </p>
        <p className="mb-6">
          As the first product in the world to enable conversion between cryptocurrencies and loyalty points, ChomCHOB Tunnel is pioneering a new way for people to engage with digital assets. 
        </p>
        <img src='/projects/cc-tunnel/c2p.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Behind this innovation is the development of specialized smart contracts that integrate seamlessly with both Web 3.0 decentralized exchanges and Web 2.0 automated systems. As the project owner and smart contract developer, I led a dedicated team through planning, development, and collaboration with marketing for each phase of the product's rollout.
        </p>
        <p className="mb-6">
        Currently, even though the number of cryptocurrency users has declined due to market trends, ChomCHOB Tunnel continues to attract users regularly. This reflects the product's resilience and its enduring value in a rapidly changing environment.
        </p>
        <img src='/projects/cc-tunnel/footer.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">Referral Network System</h2>
        <p className="text-center">ChomCHOB | 2020</p>
        <img src='/projects/referral-network/level.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Multi-Level Marketing (MLM) is a distinctive business structure that has evolved over many years, with numerous case studies highlighting its success. ChomCHOB saw an opportunity to apply this concept to a new application called <b className="text-[#9F8466]">iCHOB</b>, incorporating a Referral Network system that brings the MLM model to e-commerce.
        </p>
        <p className="mb-6">
          Developing an application with an MLM system presents unique challenges, particularly in designing algorithms capable of calculating diverse and complex compensation structures. These structures are crucial for determining the various benefits and commissions distributed across multiple layers of the network.
        </p>
        <img src='/projects/referral-network/ichob.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          In this project, I was responsible for designing the entire algorithm for the Referral Network system. The process involved relying solely on the experiences of stakeholders who had previously run MLM businesses, without any existing system references or guidelines to draw upon. This required inventing a solution from scratch, tailored to the specific needs and complexities of the iCHOB application.
        </p>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
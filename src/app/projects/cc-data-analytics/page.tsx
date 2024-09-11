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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">Data Analytics for Business</h2>
        <p className="text-center">ChomCHOB | 2020</p>
        <img src='/projects/HR Tech.jpg' alt="cover" className="w-full md:h-96 rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Data analytics plays a crucial role in modern businesses by enabling data-driven decision-making and uncovering new insights about users and products. Early in my career, just after graduating and completing Andrew Ng&apos;s AI course, I realized that it was too soon for ChomCHOB to adopt Deep Learning for its products. Instead, I saw a more immediate opportunity to apply Data Science techniques to benefit the business.
        </p>
        <p className="mb-6">
          With this goal in mind, I began a focused study of Data Science, covering areas like Python for Data Science, Data Analytics, and Behavioral Analytics. I felt confident that these skills could be effectively utilized to support ChomCHOB&apos;s business team.
        </p>
        <p className="mb-6">
          Initially, I requested to observe business team meetings to understand their processes and needs. Gradually, I began applying data analytics to various areas, assisting the business team with tasks such as analyzing user reward redemption patterns, clustering users, and visualizing user relationship data. This approach helped enhance decision-making and provided valuable insights to drive business growth.
        </p>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">Harvest Point and Rocket Point</h2>
        <p className="text-center">ChomCHOB | 2023</p>
        <img src='/projects/harvest-point/harvest.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Micro investment has long been a focus for many FinTech products, aiming to promote good financial habits while making financial products more accessible to the general public. As a player in the FinTech sector, ChomCHOB sought to develop a micro-investment product that leveraged our unique strength in point-based systems, resulting in the creation of a novel concept: <b className="text-[#9F8466]">Point Investment</b>.
        </p>
        <p className="mb-6">
          The first product launched under this concept was <b className="text-[#9F8466]">Harvest Point</b>, integrated within the ChomCHOB application. Harvest Point allows users to deposit their existing points to earn returns, starting from as little as just 1 point. This approach enabled even minimal contributions to grow over time, promoting accessibility and inclusivity.
        </p>
        <p className="mb-6">
          Following the success of Harvest Point, we introduced a second product called <b className="text-[#9F8466]">Point Farming</b>, also known as Rocket Point. This product offered a shorter-term engagement, operating on a round-based system similar to a closed-end fund, where users could participate in limited-time activities to earn rewards.
        </p>
        <img src='/projects/harvest-point/rocket.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Both products garnered significant interest, effectively creating a true micro-investment environment. For example, many users began depositing 1-2 points daily, demonstrating how even small, consistent actions could cultivate a culture of saving and investing within the platform.
        </p>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
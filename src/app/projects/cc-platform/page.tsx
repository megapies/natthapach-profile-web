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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] my-4">ChomCHOB Platforms</h2>
        <img src='/projects/cc-platform.png' alt="cover" className="w-full rounded-lg h-52 object-cover my-8 shadow-md"/>
        <p className="mb-6">
          ChomCHOB started with a simple yet impactful idea: to solve the problem of scattered and underutilized credit card points. The vision was to allow users to combine points from multiple cards to unlock more valuable rewards. This led to the development of the <b className="text-[#9F8466]">ChomCHOB Application</b> and the creation of <b className="text-[#9F8466]">ChomCHOB Point (CCP)</b>, a unified currency that consolidates points from various banks and leading loyalty programs.
        </p>
        <p className="mb-6">
          ChomCHOB quickly became a pioneer in loyalty technology by offering unique redemption options, such as e-vouchers and bill payments—features uncommon in the market at that time. This approach not only deepened ChomCHOB's understanding of the market but also built a strong technological foundation, establishing it as a leader in loyalty platforms.
        </p>
        <p className="mb-6">
          Building on this foundation, ChomCHOB saw the opportunity to expand its expertise into other sectors. The <b className="text-[#9F8466]">ChomCHOB Platforms</b> initiative aims to integrate loyalty technology into HRTech, MarTech, and EdTech, recognizing that loyalty is vital across all domains. For example, companies in HRTech should cultivate loyalty with employees, while MarTech focuses on customer retention, and EdTech fosters trust with students and parents.
        </p>
        <img src='/projects/cc-platform/cc-for-business.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          However, while ChomCHOB has made significant strides, its product suite is not yet fully scalable or adaptable across all sectors. There are still areas that need further development to reach their full potential.
        </p>
        <p className="mb-6">
          As Tech Lead, I led research efforts and developed strategies to expand ChomCHOB's reach. I also worked closely with executives to refine these ideas and guided the development process to align with our vision. 
        </p>
        <p>
          Though challenges remain, the launch of ChomCHOB Platforms marks a significant step forward, bringing the power of loyalty technology to new industries and applications.
        </p>
      </div>
          



        
      </main>
      <Footer/>
    </div>
  )
}
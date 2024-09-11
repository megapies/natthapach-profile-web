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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">ChomCHOB Gachapon and Stamp</h2>
        <p className="text-center">ChomCHOB | 2019-2024</p>
        <img src='/projects/cc-gachapon-stamp/gachapon.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          User engagement is a crucial aspect for many applications and products, as increased engagement often leads to higher sales and greater brand awareness. For the ChomCHOB application, boosting user engagement is a priority, but relying solely on marketing campaigns to achieve this can result in temporary interest that lacks sustainability.
        </p>
        <p className="mb-6">
          To address this, we developed features designed to enhance user engagement while also serving as effective marketing tools for various campaigns. One such feature is based on a familiar and beloved concept in Thailand: <b className="text-[#9F8466]">Gachapon</b>, or the lottery-style prize draw.
        </p>
        <p className="mb-6">
          The Gachapon system is straightforward — users participate in random draws to win prizes, an experience that resonates well with many. However, from an organizer&apos;s perspective, there are more complex considerations, particularly around cost management and drop rates. To manage these aspects, we explored various mathematical algorithms for calculating Gachapon drop rates, such as Expected Value and House Edge. However, regardless of the algorithm used, the concept of &quote;salt&quote; (losing draws) is inevitable.
        </p>
        <p className="mb-6">
          A successful Gachapon campaign must balance the cost and the difficulty of winning. If prizes are too hard to win, users may lose interest and stop playing. Conversely, if prizes are too easy to win, it may become challenging to control costs. For example, if a prize costs 50 THB and each play costs 1 THB, achieving a cost-neutral campaign would require 49 losing attempts (based on probability principles).
        </p>
        <p className="mb-6">
          To enhance this engagement feature further, we developed an additional feature: <b className="text-[#9F8466]">Stamp</b>. Imagine a stamp collection book where completing a set allows you to redeem a reward at a store — this is the concept we expanded upon.
        </p>
        <img src='/projects/cc-gachapon-stamp/stamp.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Instead of receiving &quot;salt&quot; (nothing) for a losing Gachapon draw, users now receive a stamp. These stamps are not worthless; they can be collected and eventually exchanged for real rewards. This creates a gamification element that encourages users to stay engaged with the product over time. The Stamp feature adds depth to the Gachapon experience, providing ongoing motivation for users to interact with the app, whether for marketing campaigns or as a revenue-generating tool.
        </p>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
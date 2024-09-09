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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">HR Tech 2024</h2>
        <p className="text-center">ChomCHOB | 2024</p>
        <img src='/projects/HR Tech.jpg' alt="cover" className="w-full md:h-96 rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          The concept of loyalty technology is most often associated with marketing strategies aimed at building customer loyalty. However, it also has significant potential in other sectors, particularly in HR, where fostering strong relationships between organizations and employees is essential. Recognizing this untapped potential, ChomCHOB joined <b className="text-[#9F8466]">HR Tech 2024</b> to introduce and educate attendees about the innovative use of loyalty technology in the HR field.
        </p>
        <p className="mb-6">
          ChomCHOB is currently developing ChomCHOB Platforms, a suite of tools designed to help HR departments create stronger loyalty within their organizations. Given the misconception that loyalty technology only applies to customer relations, our goal at HR Tech 2024 was to broaden awareness. To do this, we created a special Tech Stage at our booth, a space dedicated to sharing knowledge with visitors. Additionally, we live-streamed our sessions on Facebook to reach a wider audience, ensuring that even those who couldn't attend in person could benefit from our insights.
        </p>
        <img src='/projects/hr-tech-2024/2.jpg' alt="cover" className="w-full md:h-96 rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          The response was better than anticipated. We saw a significant turnout at our booth, with many attendees expressing a deep interest in loyalty technology for HR. Surprisingly, there was a higher level of awareness than expected; several companies were already familiar with the concept of loyalty points or were even planning to implement point systems for their employees soon but lacked the right tools.
        </p>
        <p className="mb-6">
          During the event, I had the opportunity to deliver two sessions on "Loyalty Technology for HR," where I shared insights into how this technology could transform HR practices. Beyond speaking engagements, I also played a crucial role in guiding our development team, helping them understand the unique aspects of HR needs and how loyalty can be adapted for HR purposes. This was essential to ensure our sessions were relevant and engaging. Furthermore, I supported our partnership team in providing information to potential clients and assisting with product demonstrations and sales pitches.
        </p>
        <p className="mb-6">
          By the end of the event, it was clear that there is growing interest in leveraging loyalty technology within HR, and ChomCHOB is well-positioned to lead the way in this emerging field.
        </p>
        <img src='/projects/hr-tech-2024/3.jpg' alt="cover" className="w-full md:h-96 rounded-lg object-cover my-8 shadow-md"/>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
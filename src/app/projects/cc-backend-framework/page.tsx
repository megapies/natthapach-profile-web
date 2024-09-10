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
          <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">ChomCHOB Backend Framework</h2>
          <p className="text-center">ChomCHOB | 2021</p>
          <img src='/projects/cc-backend-framework/cover.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md" />
          <p className="mb-6">
            To enhance team collaboration and streamline development processes, we developed a custom backend framework tailored to ChomCHOB&apos;s specific needs. This framework was designed to create a unified and consistent development environment that would foster better teamwork, reduce errors, and improve overall productivity.
          </p>
          <p className="mb-6">
            The foundation of the framework was built upon the team&apos;s existing structure, with careful consideration of CI/CD constraints. One of the key decisions in this process was transitioning the team&apos;s primary programming language from JavaScript to TypeScript. This shift was aimed at leveraging TypeScript&apos;s strong typing and tooling support to reduce runtime errors and improve code maintainability. It also enabled the team to adopt modern development practices that promote more robust and scalable solutions.
          </p>
          <p className="mb-6">
            The new framework went beyond standard project architecture by incorporating a suite of shared tools and utilities. These included custom CLI tools designed to simplify project scaffolding, API creation, and functional development. Helper libraries were also developed to handle repetitive tasks, such as data validation, error handling, and logging, reducing the amount of boilerplate code the developers needed to write. This not only sped up development but also ensured a higher degree of consistency across different projects.
          </p>
          <p className="mb-6">
            Furthermore, the framework was designed with flexibility in mind, supporting a microservices architecture that allows for a wide range of processing capabilities. This includes modules for queue processing, job handling, and pub/sub systems, which enable various components to communicate and operate independently. This architecture was essential in allowing the team to handle different types of workloads efficiently, from high-frequency data processing to complex, long-running tasks.
          </p>
          <p className="mb-6">
            The result of this effort was a backend framework that not only aligned with the team&apos;s development practices but also empowered them to work more efficiently and cohesively. By providing a unified environment and set of tools, the framework facilitated smoother collaboration, quicker onboarding of new developers, and more effective scaling of projects to meet the company&apos;s growing needs.
          </p>
          <p className="mb-6">
            This initiative has laid a strong foundation for future development at ChomCHOB, positioning the team to build and maintain high-quality applications in a rapidly evolving tech landscape.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
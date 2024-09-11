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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">TimeBit</h2>
        <p className="text-center">ChomCHOB | 2023</p>
        <img src='/projects/timebit/h2.png' alt="cover" className="w-full md:h-96 rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          NFT Art, often perceived as &quot;true&quot; digital art or digital art that we truly own, is widely misunderstood. Many people believe that owning an NFT means owning the associated digital artwork forever, but this is a misconception.
        </p>
        <p className="mb-6">
          NFTs, or non-fungible tokens, are typically developed following the ERC-721 standard, which defines a function called tokenURI within the NFT smart contract. This function stores the metadata of the NFT, such as its name, image, and description. On the surface, this seems straightforward—since the NFT exists on the blockchain, owning it should mean that the image is ours permanently. However, in reality, most NFT developers merely upload the image to their own servers or a cloud provider and then embed the image URL within the NFT&apos;s metadata.
        </p>
        <p className="mb-6">
          This practice creates a vulnerability: if the server goes offline or the cloud provider ceases service, the image data linked to the NFT is lost, and the NFT effectively becomes meaningless. Although there have been efforts to address this issue using IPFS, a distributed file storage technology, it&apos;s still hard to claim that NFT Art is genuinely stored on the blockchain.
        </p>
        <p className="mb-6">
          To tackle this problem, I set out to develop a unique form of NFT Art, where the artwork is actually created and stored directly on the blockchain. Using a specialized algorithm in conjunction with SVG technology, I developed a method to generate vector images directly on the blockchain, ensuring that the artwork truly exists as part of the blockchain itself.
        <img src='/projects/timebit/h3.png' alt="cover" className="w-full md:h-96 rounded-lg object-cover my-8 shadow-md"/>
        </p>
        <p className="mb-6">
          An additional innovation was the algorithm&apos;s ability to combine two NFTs to create a new image, adding a layer of creativity and uniqueness to the concept.
        </p>
        <p className="mb-6">
          <b className="text-[#9F8466]">Timebit</b> was conceived as an NFT Art project to test and showcase this new technology and concept. Unfortunately, despite its promise, Timebit was never published due to business-related reasons.
        </p>
        <img src='/projects/timebit/h1.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
      </div>        
      </main>
      <Footer/>
    </div>
  )
}
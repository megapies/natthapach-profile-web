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
        <h2 className="text-4xl font-bold text-center text-[#9F8466] mt-4">ChomWallet</h2>
        <p className="text-center">ChomCHOB | 2023</p>
        <img src='/projects/chom-wallet/chom-wallet-2.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Blockchain and cryptocurrencies are renowned for their strong security, but this often comes at the cost of usability. For the average user, creating an account or wallet can be a daunting process, involving complexities such as remembering a seed phrase, installing extensions like MetaMask, or choosing the appropriate blockchain network. These barriers hinder DApp adoption among mass users, as achieving a seamless user experience typically requires sacrificing some level of security.
        </p>
        <p className="mb-6">
          One common approach to simplifying the experience is through custodian wallets, hot wallets, or crypto wallet management services, where the provider holds the user&apos;s private keys. However, this method compromises the core principle of decentralization, as users no longer have true ownership of their wallets.
        </p>
        <p className="mb-6">
          As a Blockchain Researcher and Developer, I developed a unique algorithm called the &qoute;Deterministic Generative Pincode Wallet,&qoute; a concept based on a partial custodian wallet model. In this approach, the service provider retains only a portion of the private key. The full private key can be regenerated using a user-defined pincode, such as a simple 6-digit number, in combination with the user&apos;s identity (like an email address) to authorize transactions. This approach balances security with ease of use, providing a new solution that had never been implemented in the market before.
        </p>
        <p className="mb-6">
          The next step after researching this algorithm was to develop it into a tangible product—<b className="text-[#9F8466]">ChomWallet, the first partial custodian wallet</b>. ChomWallet aimed to provide a more seamless user experience, crucial for ChomCHOB’s expansion into blockchain-based products and the mass user market.
        </p>
        <img src='/projects/chom-wallet/chom-wallet-3.png' alt="cover" className="w-full rounded-lg object-cover my-8 shadow-md"/>
        <p className="mb-6">
          Unfortunately, due to internal business challenges, the project could not be completed. However, the idea remains open for discussion with anyone interested in further developing this innovative concept.
        </p>





      </div>        
      </main>
      <Footer/>
    </div>
  )
}
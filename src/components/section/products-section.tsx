"use client"

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardFooter, CardTitle, CardHeader } from "@/components/ui/card"
import certificates, { Certification } from '@/components/data/certificates'
import Image from 'next/image'
import { Facebook, Globe, ShoppingCart } from 'lucide-react'
import { Card2, Card2Content, Card2Description, Card2Footer, Card2Header, Card2Title } from '../ui/card2'
import { Button } from '../ui/button'

export function ProductSection() {
  return (
    <div className="w-full overflow-hidden bg-[#EFEFEF] py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#9F8466]">My Personal Works</h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4 space-y-4 md:space-y-0 md:space-x-4">
        <Card2 className="w-[300px] h-[380px] overflow-hidden bg-white">
          <Card2Header>
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src='/products/arako-profile.png'
                alt='Arko.AI'
                className="object-cover"
              />
            </div>
          </Card2Header>
          <Card2Content className="text-center">
            <Card2Title className="mt-2 mb-2 text-[#2E2F3D]">Arako.AI</Card2Title>
            <Card2Description className='min-h-[60px]'>AI Knownledge sharing in Facebook, IG and Art Gallery Website</Card2Description>
          </Card2Content>
          <Card2Footer className='flex flex-row space-y-0 space-x-4'>
            <div>
            <Button
              variant="outline"
              className="w-16 border-[#1877F2] hover:text-[#1877F2] hover:bg-white bg-[#1877F2] text-white"
            >
              <a href='https://www.facebook.com/profile.php?id=61565407344564' className='flex items-center justify-center'>
                <Facebook className="w-5 h-5" />
              </a>
            </Button>
            </div>
            <div>
            <Button
              variant="outline"
              className="w-16 border-[#9F8466] hover:text-[#9F8466] hover:bg-white bg-[#9F8466] text-white"
            >
              <a href='https://www.facebook.com/profile.php?id=61565407344564' className='flex items-center justify-center'>
                <Globe className="w-5 h-5" />
              </a>
            </Button>

            </div>
          </Card2Footer>
        </Card2>
        <Card2 className="w-[300px] h-[380px] overflow-hidden bg-white">
          <Card2Header>
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src='/products/kotokk-art-profile.png'
                alt='KotokkArt'
                className="object-cover"
              />
            </div>
          </Card2Header>
          <Card2Content className="text-center">
            <Card2Title className="mt-2 mb-2 text-[#2E2F3D]">KotokkArt Shop</Card2Title>
            <Card2Description className='min-h-[60px]'>My digital arts shop on Etsy. The product was conduct by me and produce by AI</Card2Description>
          </Card2Content>
          <Card2Footer className='h-fill'>
            <div>
            <Button
              variant="outline"
              className="w-48 border-[#9F8466] hover:text-[#9F8466] hover:bg-white bg-[#9F8466] text-white"
            >
              <a href='https://www.etsy.com/shop/KotokkArt' className='flex items-center justify-center'>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop
              </a>
            </Button>

            </div>
          </Card2Footer>
        </Card2>
      </div>
    </div>
  )
}
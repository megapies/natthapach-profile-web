'use client'

import Card2 from './card2'

export function PageComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card2
        logo="/placeholder.svg?height=96&width=96"
        title="บริษัท ก"
        description="บริษัทชั้นนำด้านเทคโนโลยี"
        buttonText="ดูรายละเอียด"
        buttonLink="/company-a"
      />
    </div>
  )
}
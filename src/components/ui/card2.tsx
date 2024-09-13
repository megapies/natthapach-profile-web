// components/ui/card2.tsx

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// หลักการใช้ React.forwardRef เพื่อให้สามารถส่งต่อ ref ได้
const Card2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card2 text-card2-foreground shadow py-4",
        className
      )}
      {...props}
    />
  )
)
Card2.displayName = "Card2"

const Card2Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex justify-center items-center p-4 rounded-tl-xl rounded-tr-xl bg-card2-header",
        className
      )}
      {...props}
    />
  )
)
Card2Header.displayName = "Card2Header"

const Card2Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-4 pt-0 bg-card2-content", className)}
      {...props}
    />
  )
)
Card2Content.displayName = "Card2Content"

const Card2Title = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-semibold leading-snug tracking-tight", className)}
      {...props}
    />
  )
)
Card2Title.displayName = "Card2Title"

const Card2Description = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
Card2Description.displayName = "Card2Description"

const Card2Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col justify-center space-y-2 items-center p-4 rounded-bl-xl rounded-br-xl bg-card2-footer",
        className
      )}
      {...props}
    />
  )
)
Card2Footer.displayName = "Card2Footer"

// Export ทั้งหมดเพื่อให้นำไปใช้ได้ง่าย
export {
  Card2,
  Card2Header,
  Card2Content,
  Card2Title,
  Card2Description,
  Card2Footer,
}

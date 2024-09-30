import React from 'react'
import { cn } from '@/components/MainCarousel/MainCarousel'

export default function OneStep({children, donedOneStep}) {
  return (
    <div className={cn('flex flex-col gap-[4px]', `${donedOneStep? 'hidden' : 'block'}`)}>
      {children}
    </div>
  )
}

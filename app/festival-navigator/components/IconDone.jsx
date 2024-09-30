import React from 'react'
import { cn } from '@/components/MainCarousel/MainCarousel'

export default function IconDone({donedOneStep}) {
  return (
    <div className={cn('mr-[4px]', `${donedOneStep ? 'block' : 'hidden'}`)}>
      <img src='/Done-icon2.svg' alt='Done' className='w-full' />
    </div>
  )
}

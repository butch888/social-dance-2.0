import React from 'react'
import { cn } from '@/components/MainCarousel/MainCarousel'
import IconDone from './IconDone'

export default function Step({title, className, donedOneStep, setActiveStepIndex, blocked}) {
   return (
    <div className={cn('flex items-center text-[12px] font-semibold', className)}>
      <IconDone donedOneStep={donedOneStep}/>
      <div className={`${donedOneStep && !blocked ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => {
        if (blocked) return
        switch(title) {
          case 'DANCE LEVEL':
            if (donedOneStep) setActiveStepIndex(0)
            break
          case 'STYLES':
            if (donedOneStep) setActiveStepIndex(1)
            break
          case 'CITY':
            if (donedOneStep) setActiveStepIndex(2)
            break
          case 'BUDGET':
            if (donedOneStep) setActiveStepIndex(3)
            break
        }
      }}>
      {title}
      </div>
    </div>
  )
}

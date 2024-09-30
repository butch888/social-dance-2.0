'use client'

import React from 'react'
import { cn } from './MainCarousel/MainCarousel'

const ContainerComponent = ({ children, className }) => {
    return (
        <div className={cn("lg:mt-[100px]", className)}>
            {children}
        </div>
    )
}

export default ContainerComponent
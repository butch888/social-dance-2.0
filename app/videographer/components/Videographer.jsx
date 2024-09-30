'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import VideographerDetailsForm from './VideographerDetailsForm';
import VideographerEventForm from './VideographerEventForm';

export default function Videografer() {


  const [active, setActive] = useState(
    {
    step1: true,
    step2: false,  
    }
  )

  return (
    <div className={`min-h-screen bg-no-repeat bg-cover bg-center bg-[url("../public/videographer-mobile.svg")] lg:bg-none`}>
      <div className="max-w-[842px] mx-auto lg:my-[85px] relative transition duration-500 ease-in-out lg:h-auto overflow-auto">
        
        <img src="videografer-desctop.svg" className="w-full cover hidden lg:block"/>

        <img src="/videographer-mini-mobile.svg" className="absolute top-[80px] left-1/2 -translate-x-1/2 lg:hidden h-[140px]"/>

        <Link href="/">
          <img src="/closeBtn.svg" className="absolute top-[180px] right-4 lg:top-4 lg:right-4 cursor-pointer"/>
        </Link>

        <div className="lg:max-w-[510px] mb-[32px] mx-3 lg:mx-0 bg-white p-4 lg:p-[32px] lg:absolute rounded-2xl lg:mt-0 mt-[240px] lg:left-auto lg:translate-x-0 lg:top-1/2  lg:-translate-y-1/2 lg:right-[121px]">
          <div className="text-[26px] font-bold leading-[38px]">
            Hire Dance Videographer
          </div>
          {/* {active.step1 && <VideographerDetailsForm active={active} setActive={setActive}/>} */}
          {<VideographerEventForm active={active} setActive={setActive}/>}
        </div>
      </div>
    </div>
  )
}
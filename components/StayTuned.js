'use client'
import React, { useState } from 'react'
import FormStayTuned from './FormStayTuned'
import Link from 'next/link'
import Modal from './Modal'

export default function StayTuned() {
  const [modal, setModal] = useState(false)

  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/gradient-mobile-01.svg")] lg:bg-none'>
    <div className="max-w-[842px] mx-auto lg:my-[85px] relative transition duration-500 ease-in-out lg:h-auto overflow-auto">
      <img src='/Frame 633081.svg' className='w-full hidden lg:block'/>
      <img src='/Frame 55805.svg' className='absolute top-[60px] left-1/2 -translate-x-1/2 lg:hidden h-[140px]'/>
      <div className='w-[40px] flex justify-center items-center'>
      <Link href="/">
        <img src='/closeBtn.svg' className='absolute top-[150px] right-4 lg:top-4 lg:right-4 cursor-pointer'/>
      </Link>
      </div>
      <div className='mx-4 lg:mx-0  lg:max-w-[394px] bg-white p-[15px] lg:p-[32px] rounded-2xl lg:absolute mt-[200px] lg:mt-0 lg:top-1/2 lg:translate-y-[-50%] lg:left-[42%]'>
        <FormStayTuned isGuide={false} modal={modal} setModal={setModal} />
      </div>
      <div className="w-full h-[20px]" />
      {modal && <Modal textTitle={"We sent your dance Guide"} src={'img-mail.svg'} setModal={setModal} isSocial={false}/>}
    </div>
    </div>
  )
}

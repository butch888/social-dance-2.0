'use client'
import React, { useState } from 'react'
import Form from './Form'
import Link from 'next/link'
import Modal from './Modal'

export default function Guide() {
  const [modal, setModal] = useState(false)
  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/gradient-mobile-guide.svg")] lg:bg-none'>
    <div className="max-w-[842px] mx-auto lg:my-[85px] relative transition duration-500 ease-in-out lg:h-auto overflow-auto">
       <img src='/GuidePdf.svg' className='w-full hidden lg:block'/>
      <img src='/img-shedule.svg' className='absolute top-[80px] left-1/2 -translate-x-1/2 lg:hidden h-[140px]'/>
      <div className='w-[40px] flex justify-center items-center'>
      <Link href="/">
        <img src='/closeBtn.svg' className='absolute top-[180px] right-4 lg:top-4 lg:right-4 cursor-pointer'/>
      </Link>
      </div>
      <div className='mx-4 lg:mx-0  lg:max-w-[394px] bg-white p-[32px] rounded-2xl lg:absolute mt-[240px] lg:mt-0 lg:top-1/2 lg:translate-y-[-50%] lg:left-[42%]'>
        <Form isGuide={true} modal={modal} setModal={setModal} textButton={'Get the Free Guide'}/>
      </div>
        <div className="w-full h-[10px]" />
      {modal && <Modal textTitle={"We sent your dance Guide"} src={'img-mail.svg'} setModal={setModal} isSocial={false}/>}
    </div>
    </div>
  )
}

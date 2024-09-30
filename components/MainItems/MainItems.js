import React from 'react'

export default function MainItems() {
  return (
    <div className='hidden lg:flex justify-between items-center gap-2 mx-[37px] my-[10px] p-[15px] bg-white rounded-2xl'>
      <div className='max-w-[250px] relative cursor-pointer'>
        <img src='Guide.png' alt='...' className='object:cover'/>
        <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
          <p className='font-extrabold text-18px'>
            Guide
          </p>
          <p className='text-14px leading-tight'>
            How to go to a festival and be satisfied
          </p>
        </div>
      </div>
      <div className='max-w-[250px] relative cursor-pointer'>
        <img src='Event.png' alt='...' className='object:cover'/>
        <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
          <p className='font-extrabold text-18px'>
            Best Event
          </p>
          <p className='text-14px'>
            Trip calculator
          </p>
        </div>
      </div>
      <div className='max-w-[250px] relative'>
        <img src='Merch.png' alt='...' className='object:cover'/>
        <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
          <p className='font-extrabold text-18px'>
            Merch
          </p>
          <button className='bg-white p-[7px] rounded-full text-[12px] tracking-widest font-bold cursor-pointer'>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className='max-w-[250px] relative'>
        <img src='Festival.png' alt='...' className='object:cover'/>
        <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
          <p className='font-extrabold text-18px'>
            Festival video
          </p>
          <button className='bg-white p-[7px] rounded-full text-[12px] tracking-widest font-bold cursor-pointer'>
            BUY VIDEO
          </button>
        </div>
      </div>
    </div>
  )
}

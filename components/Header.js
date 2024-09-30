'use client'

import React from 'react'
import Socials from './Socials'
import WhatsAppIcon from './SocialsIcon/WhatsAppIcon'
import InstaIcon from './SocialsIcon/InstaIcon'
import YoutubeIcon from './SocialsIcon/YoutubeIcon'
import FbIcon from './SocialsIcon/FbIcon'


export default function Header() {
  return (
    <header className='w-full bg-white fixed top-0 left-0 z-10 border-b-[1px]'>
      <div className='flex justify-center items-center p-[20px] lg:justify-between '>
        <div className='h-[25px] w-[152px] bg-[url(../public/FrameMain.svg)] cursor-pointer' />
        <div className='mlg:hidden'>
          <Socials className='w-[245px] flex gap-[23px] justify-center items-center'>
            <WhatsAppIcon blockSize='w-[44px] h-[44px]' 
                          href='https://wa.me/+34654952169'
                          className={`w-[30px] h-[30px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#25D366] transition duration-500 ease-in-out`}/>
            <InstaIcon blockSize='w-[44px] h-[44px]' 
                        href='https://www.instagram.com/socialdancetv'
                        className={`w-[28px] h-[28px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#E1306C] transition duration-500 ease-in-out`}/>
            <YoutubeIcon blockSize='w-[44px] h-[44px]' 
                          href = 'https://www.youtube.com/@SocialDanceTV'
                          className={`w-[30px] h-[22px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#ff0000] transition duration-500 ease-in-out`}/>
            <FbIcon blockSize='w-[44px] h-[44px]' 
                    href = 'https://www.facebook.com/socialdancetv/'
                    className={`w-[28px] h-[28px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#4267B2] transition duration-500 ease-in-out`}/>
          </Socials>
        </div>
      </div>
    </header>
  )
}
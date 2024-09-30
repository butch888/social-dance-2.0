import Image from 'next/image'
import React from 'react'

export default function PopupIcon() {
  return (
      <Image
        className='my-[8px]'
        src="/icon-popup.svg"
        width={12}
        height={0}
        alt="Popup"
      />
    
  )
}

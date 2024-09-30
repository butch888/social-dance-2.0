import React from 'react'
import VideoItem from '@/components/VideoItem'

export default function VideoOptions({register}) {
  return (
    <div className='flex flex-col w-full bg-white'>
      <h2 className='text-18px font-semibold'>
        Video Options
      </h2>
      <div className='flex justify-between'>
        <VideoItem register={register} text='SOCIAL DANCE VIDEO' price={100}/>
        <VideoItem register={register} text='SHOW VIDEO' price={100}/>
      </div>
    </div>
  )
}
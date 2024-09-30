'use client'

import { useEffect, useState } from "react"

export default function Coverage({ title, text, kind, register, setValue, maxLimit}) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setValue(kind, count)
  },[count])

  const handleSocialPlusCount = () => {
    if (count !== maxLimit) {
      setCount(count + 1)
    } 
    
  }

  const handleSocialMinusCount = () => {
    if(count == 1) {
      setCount(0)
    } else setCount(count - 1)
  }

  return (
    <div className={`w-full lg:w-[143px] bg-gradient-to-r from-gradient-start to-gradient-end p-[1px] bg-white rounded-[6px]`}>
      <div className='bg-white rounded-[5px] p-[8px]'>
        <p className="text-10px font-medium tracking-wider">
          {title.toUpperCase()}
        </p>
        <div className='w-full flex justify-between items-center'>
          <div className="text-16px font-normal tracking-wider">
            {text}
          </div>
          <div className="flex justify-center items-center min-w-[32px] h-[32px] bg-[#F2F2F7] p-[4px] rounded-full mt-[4px]">
            {count === 0 ? null : <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                  onClick={handleSocialMinusCount}>
              <img src="/ic-minus.svg" alt="plus" />
              </div>
            }
            {count === 0 ? null : <div className=" flex justify-center items-center">
              <input {...register(kind)} disabled value={count} className='w-[12px] h-[12px] text-10px text-center font-medium bg-[#F2F2F7]' />
                </div>
            }
            <div className={`w-[24px] h-[24px] flex justify-center items-center ${count !== 3 && 'cursor-pointer'}`}
                  onClick={handleSocialPlusCount}>
              <img src={count === 3 ? "/ic-plus-active.svg" : "/ic-plus.svg"} alt="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
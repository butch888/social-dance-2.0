'use client'

import React, { useEffect, useState } from "react";

export default function CoverageTime({ title, text, kind, register, setValue, maxLimit}) {

  const [count, setCount] = useState(60)

  useEffect(() => {
    setValue(kind, count)
  },[count])

  const handlePlusCount = () => {
    if (count !== maxLimit) {
      setCount(count + 10)
    } 
  }

  const handleMinusCount = () => {
    if(count == 60) {
      setCount(60)
    } else setCount(count - 10)
  }

  return (
    <div className={`w-full bg-gradient-to-r from-gradient-start to-gradient-end p-[1px] bg-white rounded-[6px]`}>
      <div className='bg-white text-10px font-medium tracking-wider rounded-[5px] p-[8px]'>
        <p>{title.toUpperCase()}</p>
        <div className='w-full flex justify-between items-center'>
          <div className="flex gap-[6px] items-center">
            {count === 0 ? null : <div className=" flex justify-center items-center">
              <input {...register(kind)}  value={count} className='w-[30px] h-[16px] text-16px font-normal' />
                </div>
            }
            <p className="text-16px font-normal">
              {text}
            </p>
          </div>
          <div className="flex items-center min-w-[32px] h-[32px] bg-[#F2F2F7] p-[4px] rounded-full mt-[4px]">
            {count === 60 ? null : <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                  onClick={handleMinusCount}>
              <img src="/ic-minus.svg" alt="minus" />
              </div>
            }
            <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                  onClick={handlePlusCount}>
              <img src="/ic-plus.svg" alt="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
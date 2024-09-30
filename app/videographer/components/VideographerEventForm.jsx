'use client'

import React from "react"
import { useForm } from "react-hook-form"
import Coverage from "./Coverage";
import CoverageTime from "./CoverageTime";
import DatePickerComponent from "./DatePickerComponent";

export default function VideographerEventForm({ active, setActive }) {

  const {register, handleSubmit, watch, setValue} = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-[18px] font-semibold leading-[38px] my-3">
        Your Event
      </div>

      <div className="grid grid-cols-2 gap-[12px]">
        <div className="relative">
          <label htmlFor='event' className="text-black text-[14px] font-semibold block mb-1">
            Event Date
          </label>
            <DatePickerComponent />
        </div>
          
        <div>
          <label htmlFor='contact' className="text-black text-[14px] font-semibold block mb-1">
            Budget  
          </label>
          <input
          type="number"
            id='budget'
            className={`w-full h-[40px] bg-[#F2F2F7] text-[12px] font-normal placeholder:text-[#74747C] placeholder:text-[12px] placeholder:font-normal p-[16px] rounded`}
            placeholder="Your budget"
            {...register("budget", {
              required: true
            })}
            />
            <p className="text-[10px] mt-[4px]">Do you have a maximum budget in mind?</p>
        </div>
      </div>
      <div className="text-[18px] font-semibold leading-[38px] my-3">
        What video coverage do you need?
      </div>
      <div className="flex gap-[8px] mmd:flex-wrap lg:flex-wrap">
        <Coverage title="Social dance video" text='Nights' kind='social' maxLimit={3} register={register} setValue={setValue}/>
        <Coverage title="Show video" text='Nights' kind='show' maxLimit={3} register={register} setValue={setValue}/>
        <Coverage title="Classes" text='Nights' kind='classes' maxLimit={3} register={register} setValue={setValue}/>
      </div>
      <div className="my-[16px]">
        <CoverageTime title="promo video" text='sec' kind='promo' maxLimit={600}register={register} setValue={setValue}/>
      </div>
      
      <button className="w-full h-[48px] text-sm font-semibold bg-[#615EFF] text-white rounded-full cursor-pointer">
        Submit
      </button>
  </form>

  )
}


{/* <input
            id='event'
            readOnly
            className={`w-full h-[40px] bg-[#F2F2F7] text-[12px] font-normal placeholder:text-[#74747C] placeholder:text-[12px] placeholder:font-normal p-[16px] rounded absolute`}
            placeholder="Select date"
            {...register("event", {
              required: true
            })}
          /> */}

          {/* <svg width="16" height="16" onClick={handleOpen} className="absolute right-3 top-1/2 transform -translate-y-[30%] cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C14.6569 2 16 3.34315 16 5L16 13C16 14.6569 14.6569 16 13 16L3 16C1.34315 16 4.00426e-07 14.6569 4.72849e-07 13L8.2254e-07 5C8.94964e-07 3.34315 1.34315 2 3 2L13 2ZM14 5C14 4.44772 13.5523 4 13 4L3 4C2.44772 4 2 4.44771 2 5L2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 5Z" fill="#242428"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C4.55228 0 5 0.447715 5 1L5 3C5 3.55228 4.55228 4 4 4C3.44772 4 3 3.55228 3 3L3 1C3 0.447715 3.44772 0 4 0Z" fill="#242428"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z" fill="#242428"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-2.38426e-08 7C-1.06747e-08 6.44772 0.447715 6 1 6L15 6C15.5523 6 16 6.44772 16 7C16 7.55229 15.5523 8 15 8L1 8C0.447715 8 -3.70105e-08 7.55228 -2.38426e-08 7Z" fill="#242428"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 11C9 10.4477 9.44772 10 10 10L11 10C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12L10 12C9.44772 12 9 11.5523 9 11Z" fill="#242428"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" fill="#242428"/>
          </svg> */}
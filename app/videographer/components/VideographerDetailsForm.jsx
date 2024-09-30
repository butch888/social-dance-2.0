'use client'

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



export default function VideographerDetailsForm({ active, setActive }) {

  const schema = yup.object().shape({
    email: yup.string().email('Неверный формат электронной почты').required('Обязательное поле')
  });
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    setActive({...active, step1: false, step2: true})
    console.log(data)
  };

  


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-[18px] font-semibold leading-[38px] my-3">
        Your Details
      </div>
      <div className='mb-[12px]'>
        <label htmlFor='name' className="text-black text-[14px] font-semibold block mb-1">
          Name
        </label>
        <input
          id='name'
          placeholder="Your name"
          {...register("name")}
          className="w-full h-[40px] bg-[#F2F2F7] text-[12px] font-normal placeholder:text-[#74747C] placeholder:text-[12px] placeholder:font-normal p-[16px] rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-[12px] ">

        <div>
          <label htmlFor='email' className="text-black text-[14px] font-semibold block mb-1">
            Email
          </label>
          <input
            id='email'
            className={`w-full h-[40px] bg-[#F2F2F7] text-[12px] font-normal placeholder:text-[#74747C] placeholder:text-[12px] placeholder:font-normal p-[16px] rounded`}
            placeholder="Email"
            {...register("email", {
              required: true
            })}
          />
          {errors.email && <p className="text-[10px] text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor='contact' className="text-black text-[14px] font-semibold block mb-1">
            Contact Number
          </label>
          <input
            id='contact'
            className={`w-full h-[40px] bg-[#F2F2F7] text-[12px] font-normal placeholder:text-[#74747C] placeholder:text-[12px] placeholder:font-normal p-[16px] rounded`}
            placeholder="Your contact number"
            {...register("contact")}
            />
        </div>

      </div>
      <button className="w-full h-[48px] text-sm font-semibold bg-[#615EFF] text-white rounded-full mt-[16px] cursor-pointer">
        Submit
      </button>
    </form>
  )
}

// function isValidEmail(email) {
  //   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

  // function isValidPhoneNumber(phoneNumber) {
  //   const pattern = /^\+\d{11,}$/;
  //   return pattern.test(phoneNumber);
  // }
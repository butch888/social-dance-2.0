import React from 'react'

export default function CheckBox({register, name}) {
  return (
    <div>
      <input {...register(name)} type="checkbox" id="react-option" className="hidden peer" />
        <label htmlFor="react-option" 
                className="flex 
                        w-[16px] h-[16px]
                        cursor-pointer 
                        rounded-sm
                        border-2 border-custom-gray
                        bg-white bg-center bg-no-repeat
                        hover:bg-hover-bg transition-background duration-300 ease-in-out
                        peer-checked:border-custom-blue peer-checked:bg-custom-blue peer-checked:bg-checked-bg ">
        </label>
    </div>
  )
}



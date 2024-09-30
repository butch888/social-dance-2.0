import React, { useState } from 'react';

export default function VideoItem({ text, register }) {
    const [value, setValue] = useState("100");

    const handleChange = (event) => {
        let inputValue = event.target.value;

        if (/^0+/.test(inputValue)) {
            inputValue = inputValue.slice(1);
        }

        const numericValue = isNaN(Number(inputValue))? 0 : Number(inputValue);

        setValue(numericValue.toString());
    };

    const replaceWordsToCamelCase = (inputString) => {
      const words = inputString.split(' ').map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
      });

      const resultString = words.join('');
    
      return resultString;
    } 
    
  return (
    <div className='w-[161px] bg-gradient-to-r from-gradient-start to-gradient-end p-[1px] bg-white rounded-[6px]'>
      <div className='bg-white text-10px font-medium rounded-[5px] p-2'>
        <p>{text}</p>
        <div className='relative w-full'>
            <div className='absolute text-26px font-bold'>$</div>
            <input {...register(replaceWordsToCamelCase(text))} type='number' value={value} min={0} max={9999} onChange={handleChange} className='pl-4 text-26px font-bold w-full' />
        </div>
      </div>
    </div>
  )
}

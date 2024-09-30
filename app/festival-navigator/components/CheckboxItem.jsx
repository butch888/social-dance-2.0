import CheckboxDone from '@/components/SvgComponents/CheckboxDone';
import React from 'react';

const CheckboxItem = ({ name, svg, register, nameCheckbox, checkedArr }) => {
const isChecked = checkedArr?.includes(name)

    return (
        <li>
            <input {...register(nameCheckbox)} type="checkbox" id={name} name={nameCheckbox} value={name} className="hidden peer" />
            <label htmlFor={name} className="relative m-[5px] mb-[8px] w-[100px] h-[88px] inline-flex items-center justify-between px-[11px] py-[12px] text-gray-500 bg-gray-100 rounded-lg cursor-pointer border border-gray-200 peer-checked:border-blue-600 peer-checked:text-blue-600 lg:hover:text-gray-600 lg:hover:bg-gray-100">
                {isChecked && <div className="absolute top-[-13px] right-[-11px] w-6 h-6"><CheckboxDone /></div>}
                <div className="flex flex-col">
                    <div className="w-full text-lg font-semibold">{svg}</div>
                    <div className="mt-1 text-[12px] font-semibold font-poppins truncate w-[80px]">{name}</div>
                </div>
            </label>
        </li>
    );
};


export default CheckboxItem;
import React from "react";
import { useState } from "react";
import Image from "next/image";

import { cn } from "@/components/MainCarousel/MainCarousel";

const RadioItem = ({ name, year, register, nameRadio, isChecked, isDot }) => {
  const [isHovered, setIsHovered] = useState(false);
  const checked = isChecked === name;

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        {...register(nameRadio)}
        type="radio"
        id={name}
        name={nameRadio}
        value={name}
        className="hidden peer"
      />
      <label
        htmlFor={name}
        className={cn(
          `border-[2px] border-[#F2F2F7]  mb-[4px] inline-flex items-center justify-between w-full p-5 text-black bg-white  rounded-[4px] cursor-pointer  peer-checked:from-[#0CC36B] peer-checked:to-[#615EFF] peer-checked:bg-gradient-to-r peer-checked:text-white lg:hover:text-white lg:hover:from-[#0CC36B] lg:hover:to-[#615EFF] lg:hover:bg-gradient-to-r `
        )}
      >
        <div className="flex w-full relative">
          <div className="w-full flex items-center">
            {isDot && (
              <>
                {" "}
                <p
                  className={`${
                    isHovered || (!isHovered && checked)
                      ? "text-white"
                      : "text-[#74747C]"
                  } font-poppins text-[12px] font-semibold w-[37px]`}
                >
                  {year}
                </p>
                <div
                  style={{ width: "3px", height: "3px" }}
                  className={`${
                    (!isHovered && checked) || isHovered
                      ? "bg-white"
                      : "bg-[#74747C]"
                  } rounded-full mr-3`}
                />
              </>
            )}
            <div className="w-[247px] font-poppins text-[12px] font-semibold">
              {name}
            </div>
          </div>
          {checked && (
            <div
              className={`absolute top-1/2 translate-y-[-50%] right-0 block`}
            >
              <Image src="/Done-icon.svg" width={12} height={9} alt="Done" />
            </div>
          )}
        </div>
      </label>
    </li>
  );
};

export default RadioItem;

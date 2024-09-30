"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";


export function Cards({className}) {
  const [isButtonHovered1, setIsButtonHovered1] = useState(false);
  const [isButtonHovered2, setIsButtonHovered2] = useState(false);
  const [isButtonHovered3, setIsButtonHovered3] = useState(false);
  const [isButtonHovered4, setIsButtonHovered4] = useState(false);
  const [isButtonHovered5, setIsButtonHovered5] = useState(false);
  const router = useRouter();
  return (
    <div className={className}>
        <div
          onClick={() => router.push("/guide")}
          onMouseEnter={() => setIsButtonHovered1(true)}
          onMouseLeave={() => setIsButtonHovered1(false)}
          className="flex-shrink-0 max-w-[296px] lg:max-w-[340px] bg-[url('../public/Guide.svg')] rounded-lg min-w-0 relative cursor-pointer"
        >
          <div 
            className={` w-[296px] h-[108px] lg:w-[340px] rounded-lg  ${
              isButtonHovered1 ? "border-2 border-[#615EFF]" : ""
            } transition duration-500 ease-in-out`}
          />
          <div 
            className="absolute top-1/2 left-[40%] lg:left-[35%] w-[160px] transform -translate-y-1/2"
          >
            {" "}
            <p className="font-medium text-18px">Guide</p>
            <p className="text-14px leading-tight font-medium">
              How to go to a festival and be satisfied
            </p>
          </div>
        </div>

        <div
          onClick={() => router.push("/festival-navigator")}
          onMouseEnter={() => setIsButtonHovered2(true)}
          onMouseLeave={() => setIsButtonHovered2(false)}
          className=" flex-shrink-0 max-w-[296px] lg:max-w-[340px] bg-[url('../public/Best-vent.svg')] rounded-lg min-w-0 relative cursor-pointer "
        >
          <div 
            className={` w-[296px] h-[108px] lg:w-[340px] rounded-lg  ${
              isButtonHovered2 ? "border-2 border-[#615EFF]" : ""
            } transition duration-500 ease-in-out`}
          />
          <div className="absolute top-1/2 left-[40%] lg:left-[35%] transform -translate-y-1/2">
            <p className="font-medium text-18px">Festival Navigator</p>
            <button className="bg-white p-[7px] px-3 rounded-full text-[12px] tracking-widest font-medium">
              DISCOVER NOW
            </button>
          </div>
        </div>

        <div
          onClick={() => router.push("/newsletter")}
          onMouseEnter={() => setIsButtonHovered3(true)}
          onMouseLeave={() => setIsButtonHovered3(false)}
          className="flex-shrink-0 max-w-[296px] lg:max-w-[340px] bg-[url('../public/StayTunedN.svg')] rounded-lg min-w-0 relative cursor-pointer"
        >
          <div 
            className={` w-[296px] h-[108px] lg:w-[340px] rounded-lg  ${
              isButtonHovered3 ? "border-2 border-[#615EFF]" : ""
            } transition duration-500 ease-in-out`}
          />
          <div className="absolute top-[25px] left-[40%] lg:left-[35%] ">
            <p className="font-medium text-18px">Stay tuned</p>
            <button className="bg-white p-[7px] px-3 rounded-full text-[12px] tracking-widest font-medium">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div
          onClick={() => {router.push('/festival-video')}}
          onMouseEnter={() => setIsButtonHovered4(true)}
          onMouseLeave={() => setIsButtonHovered4(false)}
          className="flex-shrink-0 max-w-[296px] lg:max-w-[340px] bg-[url('../public/Festival.svg')] rounded-lg min-w-0 relative cursor-pointer"
        >
          <div 
            className={` w-[296px] h-[108px] lg:w-[340px] rounded-lg  ${
              isButtonHovered4 ? "border-2 border-[#615EFF]" : ""
            } transition duration-500 ease-in-out`}
          />
          <div className="absolute top-[25px] left-[40%] lg:left-[35%]">
            <p className="font-medium text-18px">Festival video</p>
            <button className="bg-white p-[7px] px-3 rounded-full text-[12px] tracking-widest font-medium">
              BUY VIDEO
            </button>
          </div>
        </div>

        <div
          onClick={() => {router.push('https://wa.me/+34654952169')}}
          onMouseEnter={() => setIsButtonHovered5(true)}
          onMouseLeave={() => setIsButtonHovered5(false)}
          className="flex-shrink-0 max-w-[296px] lg:max-w-[340px] bg-[url('../public/Videographer1.svg')] rounded-lg min-w-0 relative cursor-pointer"
        >
          <div 
            className={` w-[296px] h-[108px] lg:w-[340px] rounded-lg  ${
              isButtonHovered5 ? "border-2 border-[#615EFF]" : ""
            } transition duration-500 ease-in-out`}
          />
          <div className="absolute top-[25px] left-[40%] lg:left-[35%]">
            <p className="font-medium text-18px">Videographer</p>
            <button className="bg-white p-[7px] px-3 rounded-full text-[12px] tracking-widest font-medium">
              HIRE
            </button>
          </div>
        </div>
      </div>
  )
}

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", scrollSnaps: 2 }, []);

  return (
    <div
      className="overflow-hidden lg:rounded-2xl my-[10px] p-[15px] bg-white mt-[90px]"
      ref={emblaRef}
    >
      <Cards className={"flex justify-between items-center gap-[1.02rem]  lg:mr-[-8px]"}/>
    </div>
  );
}

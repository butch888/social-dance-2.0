import React from "react";
import Socials from "./Socials";
import WhatsAppIcon from "./SocialsIcon/WhatsAppIcon";
import InstaIcon from "./SocialsIcon/InstaIcon";
import YoutubeIcon from "./SocialsIcon/YoutubeIcon";
import FbIcon from "./SocialsIcon/FbIcon";
import { cn } from "./MainCarousel/MainCarousel";

export default function Modal({ setModal, textTitle, src, isSocial = true, congratsText = true, className, additionalRouterProccess }) {
  const offModal = () => {
    setModal(false);
    additionalRouterProccess?.replace('/');
  };
  
  return (
    <div
      className={cn("fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50 overflow-auto cursor-pointer", className)}
      onClick={() => offModal()}
    >
      <div
        className="flex flex-col gap-[21px] box-border w-[417px] bg-white p-[40px] rounded-xl mx-auto text-center 
                      absolute z-10 top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4 mws:max-w-[360px] mws:h-[366px] mws:gap-[13px]"
      >
        <img className="w-[130px] h-[120px] mx-auto" src={src} alt="..." />
        <p className="font-bold text-26px leading-[38px]">{textTitle}</p>
        {congratsText && <p className="font-semibold text-14px">
          Congrats! You'll be the FIRST to know when we open the doors to Social
          Dance TV Network!
        </p>}
        {isSocial && (
          <div className="mx-auto">
            <Socials className="w-[245px] flex gap-[23px] justify-center items-center">
              <WhatsAppIcon
                blockSize="w-[44px] h-[44px]"
                href="https://wa.me/+34654952169"
                className={`w-[30px] h-[30px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#25D366] transition duration-500 ease-in-out`}
              />
              <InstaIcon
                blockSize="w-[44px] h-[44px]"
                href="https://www.instagram.com/socialdancetv"
                className={`w-[28px] h-[28px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#E1306C] transition duration-500 ease-in-out`}
              />
              <YoutubeIcon
                blockSize="w-[44px] h-[44px]"
                href="https://www.youtube.com/@SocialDanceTV"
                className={`w-[30px] h-[22px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#ff0000] transition duration-500 ease-in-out`}
              />
              <FbIcon
                blockSize="w-[44px] h-[44px]"
                href="https://www.facebook.com/socialdancetv/"
                className={`w-[28px] h-[28px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#4267B2] transition duration-500 ease-in-out`}
              />
            </Socials>
          </div>
        )}
      </div>
    </div>
  );
}

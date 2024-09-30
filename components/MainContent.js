"use client";

import React, { useState } from "react";
import { cn } from "./MainCarousel/MainCarousel";
import InstaIcon from './SocialsIcon/InstaIcon'
import YoutubeIcon from './SocialsIcon/YoutubeIcon'
import FbIcon from './SocialsIcon/FbIcon'
import WhatsAppIcon from './SocialsIcon/WhatsAppIcon'
import Socials from './Socials'

export default function MainContent({ modal, setModal }) {
  const [inpValue, setInpValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInpValue(value);
    setIsEmpty(value.trim() === "");
    isValidEmail(value);
  };

  const getModal = (e) => {
    let inp = document.querySelector("input");
    if (isValidEmail(inpValue)) {
      e.preventDefault();
      setModal(true);
      setInpValue("");
    } else {
      e.preventDefault();
      inp.focus();
      setInpValue("");
      !inpValue
        ? (inp.placeholder = "your@example.com")
        : (inp.placeholder = "Enter correct email");
    }
  };

  const handleSubmit = async (e) => {
    setIsDisabled(false);
    e.preventDefault();

    if (!inpValue.trim()) {
      alert("Please enter your email address.");
      return;
    }

    const dataToSend = {
      id: parseInt(1, 10),
      email: inpValue,
    };
    try {
      const response = await fetch("/api/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "User already exists") {
          alert("This email address is already registered.");
        } else {
          throw new Error("An unknown error occurred.");
        }
      } else {
        getModal(e);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsDisabled(true);
    }
  };

  return (
    <div className="lg:max-w-[300px] mx-[20px] lg:ml-[10px]">
      <div className="flex items-center py-[25px] pl-[0px]">
        <div>
          <svg
            className="mr-[10px]"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.6514 1.34862H1.34862V54.6514H54.6514V1.34862ZM0 0V56H56V0H0Z"
              fill="black"
            />
            <path
              d="M16.5859 16.9645L18.8658 15.4706L16.5859 13.9766V16.9645Z"
              fill="#C92323"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5547 13.918L18.9253 15.4714L16.5547 17.0247V13.918ZM16.6189 14.0368V16.9059L18.8081 15.4714L16.6189 14.0368Z"
              fill="#C92323"
            />
            <path
              d="M5.45898 39.4912H8.10633V46.6238H9.6867V39.4912H12.3339V37.9775H5.45898V39.4912Z"
              fill="#242428"
            />
            <path
              d="M18.7826 37.9775L16.4464 44.0252L14.183 37.9775H12.4316L15.7388 46.6238H17.0868L20.4671 37.9775H18.7826Z"
              fill="#242428"
            />
            <path
              d="M13.0941 26.1879C12.8735 25.8652 12.6139 25.5845 12.3219 25.3539C12.0358 25.1281 11.7323 24.9415 11.4201 24.7992C11.1097 24.6583 10.7923 24.5538 10.4762 24.4887C10.1624 24.4244 9.85954 24.3916 9.57591 24.3916H6.18359V33.038H9.57591C9.86003 33.038 10.1631 33.0054 10.4762 32.9409C10.7921 32.8761 11.1097 32.7716 11.4203 32.6305C11.7321 32.4886 12.0355 32.302 12.3219 32.0759C12.6136 31.8456 12.8735 31.5652 13.0939 31.2422C13.3146 30.9196 13.492 30.5444 13.6213 30.1272C13.7509 29.7094 13.8165 29.234 13.8165 28.7148C13.8165 28.1959 13.7508 27.7207 13.6213 27.3022C13.492 26.8857 13.3146 26.5107 13.0941 26.1879ZM12.1682 28.715C12.1682 29.2208 12.0928 29.6557 11.9442 30.0072C11.7977 30.3542 11.5967 30.6417 11.3472 30.8616C11.0957 31.0836 10.7921 31.2504 10.4449 31.357C10.0844 31.468 9.68544 31.5242 9.25918 31.5242H7.76429V25.9056H9.25918C9.68544 25.9056 10.0844 25.9618 10.4447 26.0727C10.7919 26.1797 11.0957 26.3465 11.3472 26.5682C11.5967 26.7884 11.7977 27.0759 11.9442 27.4225C12.0928 27.7744 12.1682 28.2091 12.1682 28.715Z"
              fill="#242428"
            />
            <path
              d="M18.2722 24.3916L14.4648 33.038H16.2323L17.0582 31.0679H20.6427L21.4572 33.038H23.2528L19.5798 24.3916H18.2722ZM20.025 29.5541H17.6971L18.8894 26.7294L20.025 29.5541Z"
              fill="#242428"
            />
            <path
              d="M30.2332 30.3929L26.0517 24.3916H24.373V33.038H25.9536V27.0366L30.1348 33.038H31.8137V24.3916H30.2332V30.3929Z"
              fill="#242428"
            />
            <path
              d="M40.0204 30.7272C39.7639 31.0514 39.4609 31.3024 39.1198 31.473C38.7811 31.6425 38.387 31.7285 37.9484 31.7285C37.5443 31.7285 37.1721 31.6507 36.8425 31.4974C36.5095 31.3425 36.2201 31.1299 35.9824 30.8651C35.7426 30.5981 35.5517 30.2777 35.4153 29.9126C35.2786 29.5468 35.2091 29.144 35.2091 28.7154C35.2091 28.317 35.2784 27.9295 35.4153 27.5636C35.552 27.1978 35.7452 26.8731 35.9892 26.5983C36.2321 26.325 36.5246 26.1043 36.8586 25.9423C37.1867 25.7831 37.5535 25.7023 37.9484 25.7023C38.2857 25.7023 38.6144 25.7746 38.9259 25.9172C39.2342 26.0583 39.4869 26.265 39.6979 26.5489L39.8838 26.7987L41.2227 25.8261L41.0271 25.5693C40.654 25.0797 40.1839 24.7215 39.6298 24.5045C39.0937 24.2948 38.5278 24.1885 37.9482 24.1885C37.3114 24.1885 36.7168 24.3078 36.181 24.5435C35.6474 24.7784 35.1798 25.103 34.7909 25.5083C34.4017 25.9143 34.0957 26.3987 33.8817 26.9481C33.6684 27.4955 33.5605 28.0902 33.5605 28.7154C33.5605 29.365 33.673 29.9724 33.8946 30.5206C34.1166 31.0699 34.4282 31.552 34.8214 31.9534C35.2149 32.3552 35.6849 32.6738 36.2189 32.9003C36.7536 33.1274 37.3355 33.2425 37.9484 33.2425C38.6311 33.2425 39.2546 33.119 39.8016 32.8757C40.358 32.6283 40.8395 32.2369 41.2323 31.7125L41.4108 31.4739L40.2218 30.4728L40.0204 30.7272Z"
              fill="#242428"
            />
            <path
              d="M44.4163 31.5242V29.3018H48.2288V27.7881H44.4163V25.9054H48.5004V24.3916H42.8359V33.038H48.7041V31.5242H44.4163Z"
              fill="#242428"
            />
            <path
              d="M10.8261 15.433C10.5805 15.2415 10.2949 15.0816 9.97733 14.9577C9.683 14.8429 9.37384 14.734 9.05678 14.6333C8.75339 14.5393 8.49513 14.4449 8.28908 14.3522C8.10082 14.268 7.95258 14.1787 7.84848 14.0865C7.75641 14.0054 7.69316 13.9202 7.65479 13.8251C7.61394 13.7246 7.59319 13.6026 7.59319 13.4628C7.59319 13.2825 7.62794 13.1331 7.69942 13.0064C7.77255 12.8767 7.8666 12.7753 7.98717 12.6968C8.11992 12.6103 8.27326 12.5442 8.44291 12.5C8.85303 12.3937 9.29247 12.4059 9.68431 12.5793C9.89086 12.671 10.0521 12.8142 10.1773 13.0171L10.3723 13.3329L11.6679 12.2056L11.4664 11.9681C11.1384 11.5811 10.7577 11.3047 10.3352 11.1466C9.92808 10.9941 9.47415 10.917 8.98612 10.917C8.60301 10.917 8.22995 10.9711 7.87681 11.0777C7.51841 11.1862 7.19229 11.3495 6.90784 11.5631C6.61532 11.7829 6.37946 12.0601 6.20701 12.3875C6.03308 12.7188 5.94463 13.1073 5.94463 13.5419C5.94463 13.9158 6.00458 14.2451 6.12284 14.521C6.2411 14.797 6.40598 15.0374 6.61301 15.2357C6.81313 15.4278 7.05163 15.5914 7.32142 15.722C7.5754 15.8453 7.85623 15.9557 8.14924 16.0482C8.50336 16.169 8.81252 16.2745 9.07621 16.365C9.31455 16.4468 9.51187 16.5382 9.66257 16.6363C9.79022 16.7197 9.88427 16.8165 9.94159 16.9233C9.9994 17.0311 10.0287 17.1847 10.0287 17.3799C10.0287 17.5488 9.99199 17.6914 9.91622 17.8158C9.83255 17.9535 9.72796 18.0652 9.59652 18.158C9.45998 18.2543 9.30318 18.3286 9.13024 18.3791C8.64699 18.5198 8.17345 18.4668 7.75542 18.2625C7.50079 18.1384 7.30775 17.9602 7.16495 17.7179L6.97833 17.401L5.6582 18.4834L5.81665 18.7211C5.97247 18.9548 6.16122 19.1546 6.37765 19.3147C6.58617 19.4694 6.8133 19.5968 7.05295 19.6936C7.28765 19.7881 7.53521 19.8589 7.7887 19.9039C8.03971 19.9484 8.29435 19.9712 8.5452 19.9712C8.93374 19.9712 9.31603 19.9198 9.68151 19.818C10.0564 19.7139 10.3935 19.5523 10.6839 19.3377C10.9806 19.1183 11.222 18.8376 11.4019 18.5034C11.5845 18.164 11.6771 17.7633 11.6771 17.3121C11.6771 16.8717 11.599 16.4942 11.445 16.1901C11.2925 15.8895 11.0842 15.6348 10.8261 15.433Z"
              fill="#242428"
            />
            <path
              d="M20.7313 12.2038C20.3303 11.8026 19.8506 11.4843 19.3055 11.258C18.7599 11.0317 18.154 10.917 17.5049 10.917C16.8558 10.917 16.2498 11.0317 15.7041 11.2582C15.1589 11.4845 14.6795 11.8026 14.2784 12.2038C13.8767 12.6059 13.5603 13.0908 13.3378 13.6451C13.1162 14.197 13.0039 14.8022 13.0039 15.4441C13.0039 16.0859 13.1162 16.6912 13.3376 17.2427C13.5601 17.7971 13.8765 18.2822 14.2784 18.6842C14.6791 19.0855 15.1589 19.4037 15.7043 19.6298C16.2496 19.8561 16.8554 19.9708 17.5049 19.9708C18.1543 19.9708 18.7601 19.8561 19.3056 19.6296C19.8506 19.4035 20.3301 19.0854 20.7313 18.684C21.1332 18.2818 21.4495 17.7969 21.672 17.2426C21.8935 16.6902 22.0058 16.0851 22.0058 15.4439C22.0058 14.8027 21.8935 14.1976 21.6718 13.6451C21.4495 13.0908 21.133 12.6059 20.7313 12.2038ZM20.3574 15.4441C20.3574 15.8636 20.2863 16.2616 20.1463 16.6276C20.0066 16.9922 19.809 17.3141 19.5589 17.5847C19.3102 17.8536 19.008 18.0687 18.6606 18.2241C18.3147 18.3787 17.926 18.457 17.505 18.457C17.0839 18.457 16.6953 18.3787 16.3494 18.2241C16.0019 18.0689 15.6997 17.8536 15.451 17.5846C15.2006 17.3141 15.0031 16.992 14.8636 16.6274C14.7236 16.2618 14.6526 15.8637 14.6526 15.4441C14.6526 15.0244 14.7236 14.6262 14.8636 14.2604C15.0031 13.896 15.2009 13.5741 15.4513 13.3033C15.6998 13.0344 16.0019 12.8191 16.3494 12.6639C16.6955 12.5093 17.0842 12.431 17.505 12.431C17.9257 12.431 18.3144 12.5093 18.6605 12.6639C19.008 12.8193 19.3104 13.0346 19.5588 13.3034C19.8091 13.5742 20.0066 13.8963 20.1463 14.2606C20.2863 14.6264 20.3574 15.0246 20.3574 15.4441Z"
              fill="#242428"
            />
            <path
              d="M29.7487 17.4559C29.4923 17.7801 29.1892 18.0311 28.8481 18.2017C28.5095 18.3712 28.1155 18.457 27.6767 18.457C27.2722 18.457 26.9001 18.3794 26.5709 18.2259C26.2377 18.071 25.9484 17.8584 25.7108 17.5935C25.4708 17.3265 25.2799 17.0059 25.1437 16.6409C25.007 16.275 24.9375 15.8722 24.9375 15.4439C24.9375 15.0455 25.0068 14.658 25.1437 14.2919C25.2802 13.9266 25.4732 13.6019 25.7175 13.3268C25.9605 13.0535 26.253 12.8328 26.5867 12.6708C26.9151 12.5114 27.2819 12.4306 27.6767 12.4306C28.0139 12.4306 28.3428 12.503 28.6542 12.6454C28.9626 12.7867 29.2152 12.9934 29.4262 13.2772L29.6122 13.5271L30.9511 12.5544L30.7554 12.2976C30.3824 11.8081 29.9123 11.4499 29.3582 11.2328C28.8221 11.0233 28.2563 10.917 27.6767 10.917C27.0398 10.917 26.4452 11.0363 25.9097 11.272C25.3761 11.5069 24.9081 11.8315 24.5193 12.2368C24.1302 12.6426 23.8244 13.1271 23.6102 13.6766C23.3969 14.224 23.2891 14.8187 23.2891 15.4441C23.2891 16.0939 23.4016 16.7013 23.6231 17.249C23.8448 17.7982 24.1566 18.2803 24.5499 18.6819C24.9432 19.0836 25.4133 19.4022 25.9473 19.6288C26.4821 19.8558 27.064 19.9708 27.6767 19.9708C28.3593 19.9708 28.9827 19.8474 29.53 19.6039C30.0864 19.3564 30.5677 18.965 30.9605 18.4407L31.1392 18.2022L29.9502 17.201L29.7487 17.4559Z"
              fill="#242428"
            />
            <path
              d="M34.145 11.1211H32.5645V19.7675H34.145V11.1211Z"
              fill="#242428"
            />
            <path
              d="M39.0652 11.1211L35.2578 19.7675H37.0253L37.8511 17.7974H41.4357L42.2501 19.7675H44.0458L40.3728 11.1211H39.0652ZM40.818 16.2838H38.4902L39.6825 13.4591L40.818 16.2838Z"
              fill="#242428"
            />
            <path
              d="M46.7467 18.2537V11.1211H45.166V19.7675H50.412V18.2537H46.7467Z"
              fill="#242428"
            />
          </svg>
        </div>
        <p className="mlg:hidden font-poppins font-bold text-26px leading-7">
          Dance
          <br />
          Network
        </p>
        <p
          className="font-extrabold text-38px pb-[5px]
                      from-green-500 via-teal-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent lg:hidden"
        >
          Coming Soon
        </p>
      </div>
      <p
        className="font-extrabold text-38px pb-[5px]
                      from-green-500 via-teal-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent mlg:hidden"
      >
        Coming Soon
      </p>

      <p className="tracking-wide font-thin text-12px lg:max-w-[293px] ">
        Find bachata, salsa, kizomba and more dance events near you. Expand your
        dance world with socials, classes and festivals.
      </p>

      <p className="text-14px font-semibold py-[20px]">
        Join our waitlist to get early access
      </p>

      <form onSubmit={handleSubmit}>
        <p className="text-12px font-semibold">Email Address</p>
        <input
          type="email"
          value={inpValue}
          placeholder="your@example.com"
          onChange={handleInputChange}
          className={`text-12px py-[11px] px-[18px] rounded-md bg-gray-100 w-full mt-[10px] mb-[24px] ${
            !isEmailValid || isEmpty ? "border-red-500" : ""
          }`}
        />
        <button
          disabled={!(isEmailValid && !isEmpty && isDisabled) || modal}
          type="submit"
          className={cn(
            "text-12px font-semibold bg-customBlue rounded-md py-[11px] w-full text-white tracking-widest  transition duration-500 ease-in-out",
            (!(isEmailValid && !isEmpty && isDisabled) || modal) &&
              "opacity-50 cursor-not-allowed"
          )}
        >
          GET EARLY ACCESS
        </button>
      </form>

      <p className="text-10px font-normal text-gray-500 tracking-wide drop-shadow-xl mt-[20px] mb-[5px]">
        by submitting your email, agree to recieve email marketing from Social
        Dance TV. You can unsubscribe anytime.
      </p>
      {/*probably style props is here for temporary use */}
      <div style={{height: "50px"}} className="flex items-center gap-2 mb-[10px] lg:mb-0">
        {/* <img src="/forbs.png" alt="forbs" className="block w-24 h-8" />
        <img
          src="/yahoo.png"
          alt="yahoo"
          className="block w-[135px] pt-[10px]"
        /> */}
      </div>
      <div className="border-b w-full lg:hidden mb-[20px]"></div>
      
      <div className="flex justify-center lg:hidden mb-[20px]">

        <Socials className='w-[345px] flex justify-between px-[93px] items-center'>
        <WhatsAppIcon blockSize='w-[33px] h-[32px]' 
                        href='https://wa.me/+34654952169'
                        className={`w-[22px] h-[22px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#25D366] transition duration-500 ease-in-out`}/>
          <InstaIcon blockSize='w-[32px] h-[32px]' 
                      href='https://www.instagram.com/socialdancetv'
                      className={`w-[20px] h-[20px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#E1306C] transition duration-500 ease-in-out`}/>
          <YoutubeIcon blockSize='w-[32px] h-[32px]' 
                        href = 'https://www.youtube.com/@SocialDanceTV'
                        className={`w-[22px] h-[15px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#ff0000] transition duration-500 ease-in-out`}/>
          <FbIcon blockSize='w-[32px] h-[32px]' 
                  href = 'https://www.facebook.com/socialdancetv/'
                  className={`w-[20px] h-[20px] cursor-pointer fill-[#B4B4C4] text-transparent hover:fill-[#4267B2] transition duration-500 ease-in-out`}/>
        </Socials>
      </div>
    </div>
  );
}

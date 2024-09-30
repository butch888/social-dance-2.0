'use client'
import React, { useState } from 'react'
import { cn } from '@/components/MainCarousel/MainCarousel';

export default function Form({ isGuide, setModal, modal, textButton }) {
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
      guide: isGuide
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

        console.log(errorData);
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
    <div>
      <div className='flex flex-col gap-[24px]'>
        <p className="font-bold text-38px">
          Guide.pdf 
        </p>

        <p className="font-normal text-12px max-w-[293px] ">
          Find bachata, salsa, kizomba and more dance events near you. Expand your
          dance world with socials, classes and festivals.
        </p>

        <p className="text-12px font-semibold">
          Join our waitlist to get early access
        </p>
        <form onSubmit={handleSubmit} className='mb-[16px]'>
          <p className="text-12px font-semibold">Email Address</p>
          <input
            type="email"
            value={inpValue}
            placeholder="your@example.com"
            onChange={handleInputChange}
            className={`text-12px py-[11px] px-[18px] font-normal rounded-md bg-gray-100 w-full mt-[10px] mb-[24px] ${
              !isEmailValid || isEmpty ? "border-red-500" : ""
            }`}
          />
          <button
            disabled={!(isEmailValid && !isEmpty && isDisabled) || modal}
            type="submit"
            className={cn(
              "text-12px font-semibold bg-customBlue rounded-md py-[11px] w-full text-white tracking-widest transition duration-500 ease-in-out",
              (!(isEmailValid && !isEmpty && isDisabled) || modal)  &&
                "opacity-50 cursor-not-allowed"
            )}
          >
            {textButton}
          </button>
        </form>
      </div>

      <p className="text-10px font-normal text-gray-500 tracking-wide drop-shadow-xl">
        By clicking “Subscribe”, you agree to our
        <span className='text-black'> terms of service </span> 
        and acknowledge you have read our 
        <span className='text-black'> privacy policy</span>.
      </p>
    </div>
  )
}

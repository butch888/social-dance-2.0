"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import DanceLevelStep from "./steps/DanceLevelStep";
import StylesStep from "./steps/StylesStep";
import CityStep from "./steps/CityStep";
import BudgetStep from "./steps/BudgetStep";
import FestivalSelectionStep from "./steps/FestivalSelectionStep";

export default function FestivalNavigator() {
  const [modal, setModal] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const router = useRouter();
  const { register, handleSubmit, control, reset, watch, setValue } = useForm({});

  const handleNextClick = () => {
    if (activeStepIndex < 4) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  const handleSubmitClick = async (data) => {
    try {
      const response = await fetch("/api/festival-navigator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (errorData.error === "User already exists") {
          alert("This email address is already registered.");
          router.push("/");
        } else {
          throw new Error("An unknown error occurred.");
        }
      } else {
        setModal(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/gradient-mobile-fest.svg")] lg:bg-none'>
      <div className="max-w-[842px] mx-auto lg:my-[85px] relative transition duration-500 ease-in-out lg:h-auto overflow-auto">
        <img
          src="/gradient-desktop-fest.svg"
          className="w-full hidden lg:block"
        />
        <img
          src="/GroupFestivalMob.svg"
          className="absolute top-[80px] left-1/2 -translate-x-1/2 lg:hidden h-[140px]"
        />
        <div className="w-[40px] flex justify-center items-center"></div>
        <Link href="/">
          <img
            src="/closeBtn.svg"
            className="absolute top-[180px] right-4 lg:top-4 lg:right-4 cursor-pointer"
          />
        </Link>

        <div className="mb-[32px] mx-3 lg:mx-0 bg-white p-4 lg:p-[32px] pt-[24px] lg:absolute rounded-2xl lg:mt-0 mt-[240px] lg:left-auto lg:translate-x-0 lg:top-1/2  lg:-translate-y-1/2 lg:right-[121px]">
          <div className="text-[26px] font-bold leading-[38px]">
            Best Festival Navigator
          </div>
          <div className="min-w-[330px] h-[1px] my-[16px] bg-[#F2F2F7]"></div>

          <form onSubmit={handleSubmit(handleSubmitClick)}>
            {activeStepIndex === 0 && (
              <DanceLevelStep
                control={control}
                register={register}
                watch={watch}
                handleNextClick={handleNextClick}
                setActiveStepIndex={setActiveStepIndex}
                activeStepIndex={activeStepIndex}
              />
            )}
            {activeStepIndex === 1 && !!watch("dancelevel") && (
              <StylesStep
                control={control}
                register={register}
                watch={watch}
                handleNextClick={handleNextClick}
                setActiveStepIndex={setActiveStepIndex}
                activeStepIndex={activeStepIndex}
              />
            )}
            {activeStepIndex === 2 && !!watch("styles")?.length > 0 && (
              <CityStep
                control={control}
                register={register}
                watch={watch}
                handleNextClick={handleNextClick}
                setActiveStepIndex={setActiveStepIndex}
                activeStepIndex={activeStepIndex}
                setValue={setValue}
              />
            )}
            {activeStepIndex === 3 && !!watch("city") && (
              <BudgetStep
                control={control}
                register={register}
                watch={watch}
                handleNextClick={handleNextClick}
                setActiveStepIndex={setActiveStepIndex}
                activeStepIndex={activeStepIndex}
              />
            )}
            {activeStepIndex === 4 &&
              !!watch("budget") &&
              !!watch("city") &&
              !!watch("dancelevel") &&
              !!watch("styles")?.length > 0 && (
                <FestivalSelectionStep
                  control={control}
                  register={register}
                  watch={watch}
                  setActiveStepIndex={setActiveStepIndex}
                  activeStepIndex={activeStepIndex}
                />
              )}
          </form>
        </div>
        <div className="w-full h-[10px]" />
        {modal && (
          <Modal
            textTitle={"Check your inbox for your festival picks!"}
            src={"img-mail.svg"}
            setModal={setModal}
            isSocial={false}
            congratsText={false}
            additionalRouterProccess={router}
          />
        )}
      </div>
    </div>
  );
}

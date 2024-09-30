import React from "react";
import { Controller } from "react-hook-form";
import Step from "../Step";
import Arrow from "@/components/SvgComponents/Arrow";
import RadioItem from "../RadioItem";

const BudgetStep = ({ control, register, watch, handleNextClick, setActiveStepIndex, activeStepIndex }) => (
  <>
    <div className="flex flex-col justify-center gap-[24px]">
      <div className="flex items-center gap-[3px]">
        <Step
          setActiveStepIndex={setActiveStepIndex}
          title="DANCE LEVEL"
          className={
            watch("dancelevel") ? "text-custom-green" : "text-custom-blue"
          }
          donedOneStep={watch("dancelevel")}
        />
        <Arrow />
        <Step
          setActiveStepIndex={setActiveStepIndex}
          title="STYLES"
          className={
            watch("styles")?.length > 0
              ? "text-custom-green"
              : activeStepIndex === 1
              ? "text-custom-blue"
              : "gray-500"
          }
          donedOneStep={watch("styles")?.length > 0}
        />
        <Arrow />
        <Step
          setActiveStepIndex={setActiveStepIndex}
          title="CITY"
          className={
            watch("city")
              ? "text-custom-green"
              : activeStepIndex === 2
              ? "text-custom-blue"
              : "gray-500"
          }
          donedOneStep={watch("city")}
        />
        <Arrow />
        <Step
          setActiveStepIndex={setActiveStepIndex}
          title="BUDGET"
          className={
            watch("budget")
              ? "text-custom-green"
              : activeStepIndex === 3
              ? "text-custom-blue"
              : "gray-500"
          }
          donedOneStep={watch("budget")}
        />
      </div>
    </div>
    <h2 className="w-[330px] text-[18px] font-semibold my-[16px]">
      Your <span className="text-[#615EFF]">budget</span> for dance trip
    </h2>
    <Controller
      name="budget"
      control={control}
      render={({ field }) => (
        <ul>
          {[
            { title: "$1000" },
            { title: "$2000" },
            { title: "$3000" },
          ].map((item, index) => (
            <RadioItem
              register={register}
              nameRadio={"budget"}
              name={item.title}
              key={index}
              isChecked={watch("budget")}
              isDot={false}
            />
          ))}
        </ul>
      )}
    />
    <button
      onClick={handleNextClick}
      disabled={!watch("budget")}
      className="mt-[14px] w-full h-[48px] bg-[#7774FF] font-poppins text-[14px] font-bold text-white disabled:bg-opacity-50 rounded-full hover:bg-opacity-85"
    >
      Next
    </button>
  </>
);

export default BudgetStep;

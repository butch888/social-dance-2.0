import React from "react";
import { Controller } from "react-hook-form";
import Step from "../Step";
import Arrow from "@/components/SvgComponents/Arrow";
import RadioItem from "../RadioItem";

const DanceLevelStep = ({ control, register, watch, handleNextClick, setActiveStepIndex, activeStepIndex }) => (
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
            watch("city") ? "text-custom-green" : activeStepIndex === 2
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
            watch("budget") ? "text-custom-green" : activeStepIndex === 3
            ? "text-custom-blue"
            : "gray-500"
          }
          donedOneStep={watch("budget")}
        />
      </div>
    </div>
    <h2 className="w-[330px] text-[18px] font-semibold my-[16px]">
      How many <span className="text-[#615EFF]">years</span> your in dancing?
    </h2>
    <Controller
      name="dancelevel"
      control={control}
      render={({ field }) => (
        <ul>
          {[
            { title: "Brand New", year: "0-1" },
            { title: "Beginner", year: "1-3" },
            { title: "Pro", year: "3+" },
          ].map((item, index) => (
            <RadioItem
              register={register}
              nameRadio={"dancelevel"}
              name={item.title}
              year={item.year}
              key={index}
              isChecked={watch("dancelevel")}
              isDot
            />
          ))}
        </ul>
      )}
    />
    <button
      onClick={handleNextClick}
      disabled={!watch("dancelevel")}
      className="w-full h-[48px] bg-[#7774FF] font-poppins text-[14px] font-bold text-white disabled:bg-opacity-50 rounded-full hover:bg-opacity-85 mt-[14px]"
    >
      Next
    </button>
  </>
);

export default DanceLevelStep;

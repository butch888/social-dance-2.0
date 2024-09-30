import React from "react";
import { Controller } from "react-hook-form";
import Step from "../Step";
import Arrow from "@/components/SvgComponents/Arrow";
import CheckboxItem from "../CheckboxItem";
import SalsaSvg from "@/components/SvgComponents/SalsaSvg";

const StylesStep = ({ control, register, watch, handleNextClick, setActiveStepIndex, activeStepIndex }) => (
  <>
    <div className="flex flex-col justify-center gap-[24px]">
      <div className="flex items-center gap-[3px]">
        <Step
          setActiveStepIndex={setActiveStepIndex}
          title="DANCE LEVEL"
          className={
            watch("dancelevel") ? "text-custom-green" : "text-custom-blue"
          }
          blocked={!watch("styles")?.length > 0}
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
          blocked={!watch("styles")?.length > 0}
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
          blocked={!watch("styles")?.length > 0}
          donedOneStep={watch("budget")}
        />
      </div>
    </div>
    <h2 className="w-[330px] text-[18px] font-semibold my-[16px]">
      Your favorite <span className="text-[#615EFF]">dance</span> styles
    </h2>
    <ul className=" w-min-[330px] lg:w-[330px] flex flex-wrap justify-center">
      {[
        { title: "Cuban Salsa", svg: <SalsaSvg /> },
        { title: "Cuban Rumba", svg: <SalsaSvg /> },
        { title: "Cuban Ja", svg: <SalsaSvg /> },
        { title: "Cuban Jaz", svg: <SalsaSvg /> },
        { title: "Cuban Jzz", svg: <SalsaSvg /> },
      ].map((item, index) => (
        <Controller
          key={index}
          name="styles"
          control={control}
          render={({ field }) => (
            <CheckboxItem
              nameCheckbox={"styles"}
              register={register}
              name={item.title}
              svg={item.svg}
              key={index}
              checkedArr={watch("styles")}
            />
          )}
        />
      ))}
    </ul>
    <button
      onClick={handleNextClick}
      disabled={!watch("styles")?.length > 0}
      className="mt-[14px] w-full h-[48px] bg-[#7774FF] font-poppins text-[14px] font-bold text-white disabled:bg-opacity-50 rounded-full hover:bg-opacity-85"
    >
      Next
    </button>
  </>
);

export default StylesStep;

import React from "react";
import Step from "../Step";
import Arrow from "@/components/SvgComponents/Arrow";
import FestivalSelection from "@/components/SvgComponents/FestivalSelection";

const FestivalSelectionStep = ({ control, register, watch, setActiveStepIndex, activeStepIndex }) => (
  <div className="relative">
    <div className="flex flex-col justify-center gap-[24px]">
      <div className="flex items-center gap-[3px]">
        <Step
          setActiveStepIndex={setActiveStepIndex}
          title="DANCE LEVEL"
          className={
            watch("dancelevel")
              ? "text-custom-green"
              : "text-custom-blue"
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
    <h2 className="w-[330px] text-[18px] font-semibold my-[16px] mb-8">
      Your festival selection
    </h2>
    <div className="lg:w-[536px] h-[276px] shadow-5">
      <FestivalSelection />
    </div>
    <div className="absolute bg-white p-4 rounded-2xl shadow-5 top-[60px] right-1/2 translate-x-1/2">
      <h2 className="m-auto w-[248px] text-[18px] font-semibold my-[16px] text-center mt-0">
        Based on your preferences,{" "}
        <span className="text-[#615EFF] text-[16px] font-normal">
          we've picked three festivals for you!
        </span>
      </h2>
      <p className="text-12px font-semibold mb-3">
        Email Address
      </p>
      <div>
        <input
          type="email"
          className="w-full border p-2 rounded-[4px] mb-2 bg-[#F2F2F7] text-[12px] py-[11px] px-[16px] font-regular"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <button
        disabled={!watch("email")}
        type="submit"
        className="mt-[14px] w-[248px] h-[48px] bg-[#7774FF] font-poppins text-[14px] font-bold text-white disabled:bg-opacity-50 rounded-full hover:bg-opacity-85"
      >
        Send
      </button>
      <p className="text-10px font-normal mt-3 w-[248px]">
        By clicking “Get Access”, you agree to our terms of
        service and acknowledge you have read our privacy policy.
      </p>
    </div>
  </div>
);

export default FestivalSelectionStep;

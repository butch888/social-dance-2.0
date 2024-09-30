import React, { useState, useEffect } from "react";
import Step from "../Step";
import Arrow from "@/components/SvgComponents/Arrow";

const CityStep = ({ register, watch, handleNextClick, setActiveStepIndex, activeStepIndex, setValue }) => {
  const [listOfCities, setListOfCities] = useState([]);
  const [inputValue, setInputValue] = useState(watch("city") || "");

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (inputValue.length > 2) {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?city=${inputValue}&format=json&limit=3&addressdetails=1`
          );
          const data = await response.json();
          setListOfCities(data);
        } catch (error) {
          console.error(error);
        }
      } else {
        setListOfCities([]);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [inputValue]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  
  return (
    <>
      <div className="flex flex-col justify-center gap-[24px]">
        <div className="flex items-center gap-[3px]">
          <Step
            setActiveStepIndex={setActiveStepIndex}
            title="DANCE LEVEL"
            className={
              watch("dancelevel") ? "text-custom-green" : "text-custom-blue"
            }
            blocked={(!watch("city") && inputValue !== "") || !inputValue}
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
            blocked={(!watch("city") && inputValue !== "") || !inputValue}
            donedOneStep={watch("styles")?.length > 0}
          />
          <Arrow />
          <Step
            setActiveStepIndex={setActiveStepIndex}
            title="CITY"
            className={
              watch("city") && inputValue !== ""
                ? "text-custom-green"
                : activeStepIndex === 2
                ? "text-custom-blue"
                : "gray-500"
            }
            donedOneStep={watch("city") && inputValue !== ""}
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
            blocked={(!watch("city") && inputValue !== "") || !inputValue}
            donedOneStep={watch("budget")}
          />
        </div>
      </div>
      <h2 className="w-[330px] text-[18px] font-semibold my-[16px]">
        Choose your <span className="text-[#615EFF]">city</span> to dance
      </h2>
      <div className="flex flex-col relative">
        <input
          {...register("city")}
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="border p-2 rounded-[4px] mb-2 bg-[#F2F2F7] text-[12px] py-[11px] px-[16px] font-regular"
          placeholder="Location"
        />
        <ul className="bg-white  rounded-md max-h-60 overflow-y-auto absolute top-[45px] border ">
          {listOfCities?.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setInputValue(`${option.name}, ${option.address.state}, ${option.address.country}`);
                setValue("city", `${option.name}, ${option.address.state}, ${option.address.country}`);
                setListOfCities([]);
              }}
              className="w-full cursor-pointer hover:bg-gray-200 p-2 border text-[14px] font-regular"
            >
              {`${option.name}${option.address.state ? `, ${option.address.state}` : ""}${option.address.country ? `, ${option.address.country}` : ""}`}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleNextClick}
        disabled={(!watch("city") && inputValue !== "") || !inputValue}
        className=" mt-[14px] w-full h-[48px] bg-[#7774FF] font-poppins text-[14px] font-bold text-white disabled:bg-opacity-50 rounded-full hover:bg-opacity-85"
      >
        Next
      </button>
    </>
  );
};

export default CityStep;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import RadioItem from "./RadioItem";
import {
  Autocomplete,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import PopupIcon from "@/components/SvgComponents/PopupIcon";
import VideoOptions from "./VideoOptions";
import CheckBox from "@/components/CheckBox";
import { cn } from "@/components/MainCarousel/MainCarousel";

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "#80bdff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#80bdff",
            },
            "&.Mui-focused": {
              backgroundColor: "#ffffff",
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused": {
            backgroundColor: "#ffffff",
          },
        },
      },
    },
  },
});

async function fetchData() {
  try {
    const response = await fetch(`/api/get-festivals-and-video`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error("Network response was not ok:", response.statusText);
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

export default function FestivalVideoForm(props) {
  const [modal, setModal] = useState(false);
  const [options, setOptions] = React.useState([]);

  const [activeStepIndex, setActiveStepIndex] = useState({
    step1: true,
    step2: false,
    step3: false,
  });

  const router = useRouter();
  const { register, handleSubmit, control, reset, watch, setValue } = useForm(
    {}
  );

  useEffect(() => {
    (async () => {
      const dataOptions = await fetchData();
      setOptions(dataOptions);
    })();
  }, []);

  const handleSubmitClick = async (data) => {
    console.log(data);
    // try {
    //   const response = await fetch("/api/festival-navigator", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     const errorData = await response.json();

    //     if (errorData.error === "User already exists") {
    //       alert("This email address is already registered.");
    //       router.push("/");
    //     } else {
    //       throw new Error("An unknown error occurred.");
    //     }
    //   } else {
    //     setModal(true);
    //   }
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   reset();
    // }
  };

  const handleNextClick = () => {
    switch (watch("selectedLevel")) {
      case "Pre-order your dance video for an upcoming festival?":
        setActiveStepIndex({ step1: false, step2: true, step3: false });
        break;
      case "We filmed you at the festival. Get your video now!":
        setActiveStepIndex({ step1: false, step2: false, step3: true });
        break;
      default:
        setActiveStepIndex({ step1: true, step2: false, step3: false });
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='min-h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/videogradient-mobile-04.svg")] lg:bg-none'>
        <div className="max-w-[842px]  mx-auto lg:my-[85px] relative transition duration-500 ease-in-out lg:h-auto overflow-auto">
          <img
            src={
              activeStepIndex.step3
                ? "/video-frame-2.svg"
                : "/Frame-desctop-video.svg"
            }
            className={cn("w-full cover hidden lg:block", {
              "h-[661px]": activeStepIndex.step3,
              "h-[543px]": activeStepIndex.step1 || activeStepIndex.step2,
            })}
          />
          <img
            src="/img-Festival-video.svg"
            className="absolute top-[80px] left-1/2 -translate-x-1/2 lg:hidden h-[140px]"
          />
          <div className="w-[40px] flex justify-center items-center"></div>
          <Link href="/">
            <img
              src="/closeBtn.svg"
              className="absolute top-[180px] right-4 lg:top-4 lg:right-4 cursor-pointer"
            />
          </Link>

          <div className="lg:max-w-[400px] mb-[32px] mx-3 lg:mx-0 bg-white p-4 lg:p-[30px] pt-[24px] lg:absolute rounded-2xl lg:mt-0 mt-[240px] lg:left-auto lg:translate-x-0 lg:top-1/2  lg:-translate-y-1/2 lg:right-[121px]">
            <form onSubmit={handleSubmit(handleSubmitClick)}>
              {activeStepIndex.step1 && (
                <div id="step-1">
                  <div className="text-[26px] font-bold leading-[38px]">
                    Buy videos from Festivals
                  </div>
                  <div className="min-w-[330px] h-[1px] my-[16px] bg-[#F2F2F7]"></div>
                  <div className="flex justify-between">
                    <div>
                      <label className="text-black text-[14px] font-semibold block mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        {...register("name")}
                        className="w-[159px] h-[40px] bg-[#F2F2F7] placeholder:text-[#74747C] px-[16px] py-[11px] rounded"
                      />
                    </div>
                    <div>
                      <label className="text-black text-[14px] font-semibold block mb-1">
                        Email
                      </label>
                      <input
                        type="mail"
                        placeholder="Email"
                        {...register("email")}
                        className="w-[159px] h-[40px] bg-[#F2F2F7] placeholder:text-[#74747C] px-[16px] py-[11px] rounded"
                      />
                    </div>
                  </div>
                  <div className="mt-[24px]">
                    <Controller
                      name="selectedLevel"
                      control={control}
                      render={() => (
                        <ul>
                          {[
                            {
                              title:
                                "Pre-order your dance video for an upcoming festival?",
                            },
                            {
                              title:
                                "We filmed you at the festival. Get your video now!",
                            },
                          ].map((item, index) => (
                            <RadioItem
                              register={register}
                              nameRadio={"selectedLevel"}
                              name={item.title}
                              year={item.year}
                              key={index}
                              isChecked={watch("selectedLevel")}
                              isDot={false}
                            />
                          ))}
                        </ul>
                      )}
                    />
                    <button
                      disabled={
                        !(
                          watch("selectedLevel") &&
                          watch("name") &&
                          watch("email")
                        )
                      }
                      onClick={handleNextClick}
                      className="w-full h-[48px] bg-[#615EFF] text-white rounded-full mt-[16px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {activeStepIndex.step2 && (
                <div id="step-2">
                  <div className="text-[26px] font-bold leading-[38px] mt-3">
                    Buy videos from Festivals
                  </div>
                  <div className="text-[18px] font-semibold leading-[38px] mt-3">
                    Choose Your Festival and Video
                  </div>
                  <Controller
                    name="selectedFestivalsAndVideos"
                    control={control}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        className="mb-5"
                        popupIcon={<PopupIcon />}
                        size="small"
                        multiple
                        fullWidth
                        limitTags={2}
                        options={options}
                        getOptionLabel={(option) => option.Name}
                        onChange={(event, newValue) => {
                          setValue("selectedFestivalsAndVideos", newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...field}
                            {...params}
                            placeholder="Choose festivals"
                            variant="outlined"
                            sx={{ bgcolor: "#F2F2F7" }}
                          />
                        )}
                      />
                    )}
                  />
                  <VideoOptions register={register} />
                  <div>
                    <div className="text-[18px] font-semibold leading-[38px] mt-3">
                      Additional Features
                    </div>
                    <div className="flex items-center">
                      <CheckBox register={register} name={"promo"} />
                      <label className="ml-[8px] text-[12px] font-normal">
                        Promo
                      </label>
                      <span className="ml-[8px] bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[14px] font-semibold w-[49px] h-[29px]">
                        $100
                      </span>
                    </div>
                  </div>
                  <button disabled={!watch("selectedFestivalsAndVideos") || watch("selectedFestivalsAndVideos")?.length === 0}  className="mb-[8px] w-full h-[48px] bg-[#615EFF] text-white rounded-full mt-[16px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                    Get Your Video Now!
                  </button>
                  <p className="text-[#74747C] text-[10px] font-normal">
                    by submitting your email, you agree to receive email
                    marketing from Social Dance TV. You can unsubscribe anytime.
                  </p>
                </div>
              )}
              {activeStepIndex.step3 && (
                <div id="step-2">
                  <div className="text-[26px] font-bold leading-[38px] mt-3">
                    We filmed you at the festival. Get your video now!
                  </div>
                  <div className="text-[18px] font-semibold leading-[38px] mt-3">
                    Choose Your Festival and Video
                  </div>
                  <Controller
                    name="selectedFestivalsAndVideos"
                    control={control}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        className="mb-5"
                        popupIcon={<PopupIcon />}
                        size="small"
                        multiple
                        fullWidth
                        limitTags={2}
                        options={options}
                        getOptionLabel={(option) => option.Name}
                        onChange={(event, newValue) => {
                          setValue("selectedFestivalsAndVideos", newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...field}
                            {...params}
                            placeholder="Choose festivals"
                            variant="outlined"
                            sx={{ bgcolor: "#F2F2F7" }}
                          />
                        )}
                      />
                    )}
                  />
                  <VideoOptions register={register} />
                  <div>
                    <div className="text-[18px] font-semibold leading-[38px] mt-3">
                      Additional Features
                    </div>
                    <div className="flex items-center">
                      <CheckBox register={register} name={"promo"} />
                      <label className="ml-[8px] text-[12px] font-normal">
                        Promo
                      </label>
                      <span className="ml-[8px] bg-[#F2F2F7] rounded-lg flex items-center justify-center text-[14px] font-semibold w-[49px] h-[29px]">
                        $100
                      </span>
                    </div>
                  </div>
                  <button disabled={!watch("selectedFestivalsAndVideos") || watch("selectedFestivalsAndVideos")?.length === 0} className="mb-[8px] w-full h-[48px] bg-[#615EFF] text-white rounded-full mt-[16px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                    Pre-order Now
                  </button>
                  <p className="text-[#74747C] text-[10px] font-normal">
                    by submitting your email, you agree to receive email
                    marketing from Social Dance TV. You can unsubscribe anytime.
                  </p>
                </div>
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
    </ThemeProvider>
  );
}

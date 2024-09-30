"use client";
import React, { useState, useEffect } from "react";
import { Cards, EmblaCarousel } from "./EmblaCarousel";
import MainContent from "./MainContent";
import Modal from "./Modal";

// const slides = [
//   {
//     title: "main-1.png",
//     image: "main-1.png",
//     ttl: "Everywhere You Are",
//     desc: "Take classes at your own pace, on your own time, and on any device",
//   },
// ];

// const slidesMobile = [
//   {
//     title: "main-mobile.png",
//     image: "main-mobile.png",
//     ttl: "Everywhere You Are",
//     desc: "Take classes at your own pace, on your own time, and on any device",
//   },
// ];

export default function Main() {
  const [modal, setModal] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    {!isLargeScreen && <EmblaCarousel />}
      <div className="flex justify-center mx-auto">
        <div className="lg:max-w-[1264px] xl:mx-[88px]">
          <div className="flex flex-col-reverse lg:grid lg:items-center lg:place-content-end lg:grid-cols-2 lg:pr-8 lg:pl-16 lg:p-7 bg-white lg:rounded-2xl ">
            <div>
              <MainContent modal={modal} setModal={setModal} />
            </div>
            <div>
              {isLargeScreen && (
                <Cards
                  className={"flex flex-col space-y-[1.02rem] w-[340px] ml-4"}
                />
              )}
              {/* {isLargeScreen ? null : (
                <img src="/Frame-mobile.svg" className="w-full" />
              )} */}
            </div>
          </div>
          {modal && <Modal textTitle={"You're in!"} src={'img-done.svg'}  setModal={setModal} />}
        </div>
      </div>
      
    </>
  );
}

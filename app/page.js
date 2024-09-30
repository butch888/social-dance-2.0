import React from "react";
import ContainerComponent from "@/components/ContainerComponent";
import Main from "./../components/Main";

export const metadata = {
  title: "Be the First to Know",
  description:
    "Join our waitlist to be the first to access the ultimate dance event calendar. Get exclusive early access and stay ahead of the curve with the latest event updates, insider tips, and more.",
};

export default function Home() {
  return (
    <ContainerComponent className="mt-[60px]">
      <Main />
    </ContainerComponent>
  );
}

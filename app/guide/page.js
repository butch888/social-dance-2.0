
import React from 'react'
import Guide from "../../components/Guide";
import ContainerComponent from "@/components/ContainerComponent";

export const metadata = {
  title: 'Free Dance Event Guide',
  description: 'Planning to attend your next big dance event? Download our comprehensive guide packed with tips, checklists, and insights to make your experience unforgettable. Sign up now to get your free copy and start planning your dance adventures today!',
};

export default function Guid() {

  return (
    <ContainerComponent>
      <Guide />
    </ContainerComponent>
  )
}

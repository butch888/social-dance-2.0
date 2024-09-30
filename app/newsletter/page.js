import React from 'react'
import StayTuned from "../../components/StayTuned";
import ContainerComponent from '@/components/ContainerComponent';

export const metadata = {
  title: 'Stay Tuned',
  description: 'Subscribe to our newsletter and never miss an update! Get the latest news on upcoming dance events, exclusive content, and special offers straight to your inbox. Stay connected with the dance community and be in the know.'
}

export default function Guid() {

  return (
    <ContainerComponent>
      <StayTuned />
    </ContainerComponent>
  )
}

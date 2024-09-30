import ContainerComponent from '@/components/ContainerComponent'
import React from 'react'
import Videografer from './components/Videographer';

export const metadata = {
  title: 'Dance Festival Navigator: Find the Perfect Dance Festival',
  description: 'Unlock a world of dance festivals tailored to your style and location! Get personalized recommendations straight to your inbox. Start your dance adventure today!',
  keywords: ['Dance festivals', 'bachata festival', 'salsa festival', 'social dancing', 'festival navigator', 'dance events', 'dance community', 'festival recommendations', 'dance styles', 'dance locations']
};

export default function page() {
  return (
    <ContainerComponent>
      <Videografer/>
    </ContainerComponent>
  )
}

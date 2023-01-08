import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import ExperienceImg from '../Assets/ExpereienceHero.avif';
import ExperienceDataList from '../Components/ExperienceDataList';

function Experience() {
  return (
    <>
      <Hero 
        cName= 'hero__mid'
        heroImg= {ExperienceImg}
        alt= 'Luxury Villas'
        title= 'Experience'        
      />

      <Content
        title= 'ACTIVITIES'
        text= ' All of our Villas are acclaimed for its gentle nature, while it constitutes a water playground protected from wind, enticing you to get your sea legs and enjoy all the water sports opportunities. Dotted with smaller welcoming bays just waiting to be explored, the snorkeling enthusiast will delight in the treasures to be found below the surface of the sea.  For undisturbed enjoyment and fun, we offer a selection of activities ideal for children and adults .'
      />

      <ExperienceDataList />
    </>
  )
}

export default Experience
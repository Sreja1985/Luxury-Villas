import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Location from '../Components/Location';
import HomeImg from '../Assets/HomeHero.avif';


function Home() {
  return (
    <>
      <Hero 
        cName= 'hero'
        heroImg= {HomeImg}
        alt= 'Luxury Villas'
        title= 'LUXURY VILLAS'
        text= 'Choose Yor Destination'
        btnClass= 'show'
        url= '/villas'
        btnText= "Welcome"
      />

      <Content
        title= 'WELCOME'
        subtitle= 'Elegance, Luxury & Unparalleled location '
        text= ' Allow yourself to meet the extraordinary through our villas in Dalmatia, our 3 cities on Adriatic Cost .
                Live the Luxury Experience: The concept of villa with Hotel services.        
                Enjoy your privacy with all facilities on your hand (amenities/linens/towels/daily cleaning/Breakfast delivery).'
      />

      <Content
        title= 'OUR STORY AND PHILOSOPHY'
        text= ' Our goal is to provide an amazing & unforgettable experience, close to the nature in a wild environment. At Luxury, we have developed the new way of luxury, creating and elegantly delivering uncompromising and perfectly tailored services.
                We think that nature is precious, that is why we are really careful regarding the respect of the environment. Highest priority was given to the preservation of the island is resources and the enhancement of the natural ecosystem following the latest quality standards in construction.'
      />

      <Content
        title= 'HEADQUARTERS'
      />

      <Location />


    </>
  )
}

export default Home
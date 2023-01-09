import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Location from '../Components/Location';
import AboutImg from '../Assets/AboutHero.avif';



function About() {
  return (
    <>
      <Hero 
        cName= 'hero__mid'
        heroImg= {AboutImg}
        alt= 'Luxury Villas'
        title= 'About'        
      />

      <Content
        title= 'HISTORY'
        text= 'Luxury Villas is accommodation agency with headquarters in Split.
                Since 2003 we have been working with tourism in the entire area of ​​Dalmatia.
                We have been one of the most successful agencies in Croatia for years providing accommodation to our guests.
                Many guests show their trust in us and always come back.'
              
      />

      <Content
        title= 'PLANS'
        text= 'We want to expand the service in the future and our improve quality.
                By 2024, we plan to build a complex of villas in central and southern Dalmatia.
                We give young architects the opportunity to design the villa of YOUR dreams.'
      />

      <Content
        title= 'HEADQUARTERS'
      />

      <Location />

    </>
  )
}

export default About
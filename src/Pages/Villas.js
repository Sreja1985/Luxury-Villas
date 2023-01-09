import React from 'react';
import Hero from '../Components/Hero';
import VillaImg from '../Assets/VillaHero.avif';
import VillaDataList from '../Components/VillaDataList';


function Villas() {
  return (
    <>
      <Hero 
        cName= 'hero__mid'
        heroImg= {VillaImg}
        alt= 'Luxury Villas'
        title= 'VILLAS'
        text= 'Pick Yor Accommodation'
      />

      <VillaDataList />
    </>
  )
}

export default Villas
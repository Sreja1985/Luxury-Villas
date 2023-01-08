import React from 'react';
import './Experience.css';
import ExperienceData from './ExperienceData';
import JetSki from '../Assets/Activities/JetSki.jpg';
import Parasailing from '../Assets/Activities/Parasialing.jpg'
import FoodWine from '../Assets/Activities/Food&Vine.jpg';
import Seafood from '../Assets/Activities/Seafood.jpg';
import Skywalk from '../Assets/Activities/Skywalk.jpg';
import Hikeing from '../Assets/Activities/Hikeing.jpg';
import NationalParks1 from '../Assets/Activities/NP1.jpg';
import NationalParks2 from '../Assets/Activities/NP2.jpg';

function ExperienceDataList() {
  return (
    <main className='experience'>
        <section>
            <ExperienceData 
                cName= 'des'
                heading= 'Water Sport'
                text= 'With its sandy beaches & crystal water , the region is perfect for water activities. '
                alt1= 'JetSki'
                image1={JetSki}
                alt2= 'Parasailing'
                image2={Parasailing}
            />

            <ExperienceData 
                cName= 'des-revers'
                heading= 'Food & Vine'
                text= 'For one night or for all your stay, have the best chef dedicated to your palate Our Chef will create a bespoke menu in order to prepare your favorite dishes in your villa. '
                alt1= 'Food & Wine'
                image1={FoodWine}
                alt2= 'Seafood'
                image2={Seafood}
            />

            <ExperienceData 
                cName= 'des'
                heading= 'Hikeing'
                text= 'Biokovo is the second-highest mountain range in Croatia, located along the Dalmatian coast of the Adriatic Sea, between the rivers of Cetina and Neretva. It is sometimes referred to as Bijakovo, especially among inhabitants of the eastern side of the mountain. Its highest peak is Sveti Jure, at 1762 m.a.s.l.'
                alt1= 'Skywalk'
                image1={Skywalk}
                alt2= 'Biokovo'
                image2={Hikeing}
            />

            <ExperienceData 
                cName= 'des-revers'
                heading= 'National Parks'
                text= ' In our area you can visit servel National parks, by car or by boat. With our agency, you can take an organized trip to the nearest national parks.'
                alt1= 'Krka'
                image1={NationalParks1}
                alt2= 'Kornati'
                image2={NationalParks2}
            />
        </section>
    </main>
  )
}

export default ExperienceDataList
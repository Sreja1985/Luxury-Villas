import React from 'react';
import Hero from '../Components/Hero';
import ContactImg from '../Assets/ContactHero.avif';
import ContactForm from '../Components/ContactForm';

function Contact() {
  return (
    <>
      <Hero 
        cName= 'hero__mid'
        heroImg= {ContactImg}
        alt= 'Luxury Villas'
        title= 'Contact'  
        text= 'Contac Us for more information'      
      />

      <ContactForm />
    </>
  )
}

export default Contact
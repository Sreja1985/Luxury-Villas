import React from 'react';
import './Location.css';
import LocationData from './LocationData';
import City1 from '../Assets/City/Split.jpg';
import City2 from '../Assets/City/Zadar.jpg';
import City3 from '../Assets/City/Šibenik.jpg';

function Location() {
  return (
    <main className='headquarters'>
        <section className='headquarters__cards'>
            <LocationData
                image={City1}
                description='Split'
                city='Split'
                addres=' Ostravska 2, 21000 Split'
                hrefTel='tel:+38521457892'
                tel='+38521457892'
                hrefMob='tel:+385911556306'
                mob='+385911556306'
                hrefMail='mailto:contact@luxuryvillas.com'
                mail='contact@luxuryvillas.com'
            />

            <LocationData
                image={City2}
                description='Zadar'
                city='Zadar'
                addres=' Petra Krežimira IV 25, 23000 Zadar'
                hrefTel='tel:+38521457892'
                tel='+38521457892'
                hrefMob='tel:+385911558306'
                mob='+385911558306'
                hrefMail='mailto:contact-zd@luxuryvillas.com'
                mail='contact-zd@luxuryvillas.com'
            />

            <LocationData
                image={City3}
                description='Šibenik'
                city='Šibenik'
                addres=' I. G. Kovačića 3, 22000 Šibenik'
                hrefTel='tel:+38522975473'
                tel='+38522975473'
                hrefMob='tel:+385911557306'
                mob='+385911557306'
                hrefMail='mailto:contact-si@luxuryvillas.com'
                mail='contact-si@luxuryvillas.com'
            />
        </section>
    </main>
  )
}

export default Location
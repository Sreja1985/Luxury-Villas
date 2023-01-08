import React from 'react';
import './Villa.css';
import VillaData from './VillaData';
import Villa1 from '../Assets/Villas/Villa1.avif';
import Villa2 from '../Assets/Villas/Villa2.avif';
import Villa3 from '../Assets/Villas/Villa3.avif';
import Villa4 from '../Assets/Villas/Villa4.avif';
import Villa5 from '../Assets/Villas/Villa5.avif';
import Villa6 from '../Assets/Villas/Villa6.avif';
import Villa7 from '../Assets/Villas/Villa7.avif';
import Villa8 from '../Assets/Villas/Villa8.avif';
import Villa9 from '../Assets/Villas/Villa9.avif';
import Villa10 from '../Assets/Villas/Villa10.avif';

function VillaDataList() {
  return (
    <main className='villas'>

        <section className='villa__cards'>

            <VillaData
                alt= 'Villa Celine'
                image={Villa1}
                price='1256'
                heading='Villa Celine'
                guests='10'
                bedrooms= '5'
                bathrooms= '5'
            />

            <VillaData
                alt= 'Villa Nera'
                image={Villa2}
                price='2564'
                heading='Villa Nera'
                guests='16'
                bedrooms= '9'
                bathrooms= '9'
            />

            <VillaData
                alt= 'Villa Cvita'
                image={Villa3}
                price='999'
                heading='Villa Cvita'
                guests='8'
                bedrooms= '5'
                bathrooms= '5'
            />

                <VillaData
                alt= 'Villa Little Heaven'
                image={Villa4}
                price='1768'
                heading='Villa Little Heaven'
                guests='12'
                bedrooms= '6'
                bathrooms= '6'
            />

            <VillaData
                alt= 'Villa Ice'
                image={Villa5}
                price='1100'
                heading='Villa Ice'
                guests='10'
                bedrooms= '5'
                bathrooms= '5'
            />

            <VillaData
                alt= 'Villa Agava'
                image={Villa6}
                price='1333'
                heading='Villa Agava'
                guests='14'
                bedrooms= '7'
                bathrooms= '8'
            />

            <VillaData
                alt= 'Villa Extravaganza'
                image={Villa7}
                price='2378'
                heading='Villa Extravaganza'
                guests='9'
                bedrooms= '5'
                bathrooms= '5'
            />

            <VillaData
                alt= 'Villa Royal'
                image={Villa8}
                price='1250'
                heading='Villa Royal'
                guests='8'
                bedrooms= '4'
                bathrooms= '5'
            />

            <VillaData
                alt= 'Villa Miracle'
                image={Villa9}
                price='1647'
                heading='Villa Miracle'
                guests='20'
                bedrooms= '11'
                bathrooms= '12'
            />

            <VillaData
                alt= 'Villa Mermaid'
                image={Villa10}
                price='1222'
                heading='Villa Mermaid'
                guests='10'
                bedrooms= '5'
                bathrooms= '6'
            />

        </section>
    </main>
  )
}

export default VillaDataList
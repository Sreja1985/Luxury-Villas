import React from 'react';
import './Villa.css';

function VillaData(props) {
  return (
    <article className='card'>
        <figure className='villa__image'>
            <img alt={props.alt} src={props.image} />
            <figcaption className='details'>
                <div clasName='details__price'> From {props.price}€ per night</div>
            </figcaption>
        </figure>
        <h4>{props.heading}</h4>
        <div>
            <p><i class="fa-sharp fa-solid fa-people-group"/> Guests: {props.guests}</p>
            <p><i class="fa-sharp fa-solid fa-bed"/> Bedrooms: {props.bedrooms}</p>
            <p><i class="fa-sharp fa-solid fa-bath"/> Bathrooms: {props.bathrooms}</p>
        </div>
    </article>
  )
}

export default VillaData
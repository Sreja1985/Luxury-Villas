import React from 'react';
import './Location.css';


function LocationData(props) {
  return (
    <article className='card'>
        <figure className='card__image'>
            <img alt={props.description} src={props.image} />                            
        </figure>
        <h3>{props.city}</h3> 
        <addres>
            <p>{props.addres}</p>
            <p>
              <label>Tel: </label>                
              <a  href={props.hrefTel}>{props.tel}</a> <br/>
              <label>Mob: </label>  
              <a  href={props.hrefMob}>{props.mob}</a> <br/>
              <label>Email: </label>
              <a  href={props.hrefMail}>{props.mail}</a>
            </p>
        </addres>
    </article>
  )
}

export default LocationData
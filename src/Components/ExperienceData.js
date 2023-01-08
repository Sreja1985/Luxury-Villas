import React from 'react';
import './Experience.css';


function ExperienceData(props) {
  return (
    <section className={props.cName}>
        <article className='description'>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </article>

        <article className='image'>
            <img alt={props.alt1} src={props.image1} />
            <img alt={props.alt2} src={props.image2} />
        </article>
    </section>
  )
}

export default ExperienceData
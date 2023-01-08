import React from 'react';
import './Hero.css';

function Hero(props) {
  return (
    <header className={props.cName}>
        <img alt={props.alt} src={props.heroImg} />
        < div className='hero__text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url}  className={props.btnClass}>
                {props.btnText}
            </a>
        </div>

    </header>
  )
}

export default Hero
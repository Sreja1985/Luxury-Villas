import React from 'react';
import { MenuItems } from './MenuItems';
import {useState} from 'react';
import './Navbar.css';


function Navbar() {

    const [clicked, setClicked] = useState(false);
    
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar__logo'>Luxury Villas</h1>

        <div className='menu__icons' onClick={() => {
            setClicked(!clicked);
        }}>
            < i className= { clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
        </div>

        <ul className={ clicked ? 'nav__menu active' : 'nav__menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.url} onClick={() => 
                            {
                                setClicked(!clicked);
                            }}
                        >
                           <i className={item.icon} /> {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar
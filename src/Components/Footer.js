import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
        <section className='top'>
            <div>
                <h1>Luxury Villas</h1>
                <p>Choose Your destination</p>
            </div>
            <div>
                <a href='/' target='_blank'>
                    <i className='fa-brands fa-facebook-square' />
                </a>
                <a href='/' target='_blank'>
                    <i className='fa-brands fa-twitter-square' />
                </a>
                <a href='/' target='_blank'>
                    <i className='fa-brands fa-youtube-square' />
                </a>
                <a href='/' target='_blank'>
                    <i className='fa-brands fa-instagram-square' />
                </a>

            </div>

        </section>
        <section className='middle'>
            <div>
                <h4>Accomodation</h4>
                <Link className='links' to='/'>Beach Front</Link>
                <Link className='links' to='/'>Palm Garden</Link>
                <Link className='links' to='/'>River Beach</Link>
                <Link className='links' to='/'>Spirou</Link>
                <Link className='links' to='/'>Treasure Cove</Link>
            </div>

            <div>
                <h4>The Experience</h4>
                <Link className='links' to='/experience'>Water Sport</Link>
                <Link className='links' to='/experience'>Food & Wine</Link>
                <Link className='links' to='/experience'>Hikeing</Link>
                <Link className='links' to='/experience'>National Parks</Link>
            </div>

            <div>
                <h4>Terms & Conditions</h4>
                <Link className='links' to='/'>Terms & Conditions</Link>
                <Link className='links' to='/'>Terms of Use - Data Policy</Link>                
            </div>

            <div>
                <h4>Contact Us</h4>
                <address>
                    <p>Split, Splitsko-dalmatinska, Croatia</p>
                    <a className='links' href='tel:+38521457892'>+385 21 457 892</a>
                    <a className='links' href='tel:+385911556306'>+385 91 1556 306</a>
                    <a className='links' href='mailto:contact@luxuryvillas.com'>contact@luxuryvillas.com</a>
                </address>
            </div>
        </section>
        <section className='bottom'>
            <p>
                <span> Copyright &copy;</span>
                <span>Luxury Villas</span>
            </p>             
        </section>
    </footer>
  )
}

export default Footer
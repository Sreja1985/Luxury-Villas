import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className='footer'>
        <section className='top'>
            <div>
                <h1>Luxury Villas</h1>
                <p>Choose Your destination</p>
            </div>
            <div>
                <a href='www.facebook.com' target='_blank'>
                    <i className='fa-brands fa-facebook-square' />
                </a>
                <a href='www.twitter.com' target='_blank'>
                    <i className='fa-brands fa-twitter-square' />
                </a>
                <a href='www.youtube.com' target='_blank'>
                    <i className='fa-brands fa-youtube-square' />
                </a>
                <a href='www.instagram.com' target='_blank'>
                    <i className='fa-brands fa-instagram-square' />
                </a>

            </div>

        </section>
        <section className='middle'>
            <div>
                <h4>Accomodation</h4>
                <a className='links' href='/'>Beach Front</a>
                <a className='links' href='/'>Palm Garden</a>
                <a className='links' href='/'>River Beach</a>
                <a className='links' href='/'>Spirou</a>
                <a className='links' href='/'>Treasure Cove</a>
            </div>

            <div>
                <h4>The Experience</h4>
                <a className='links' href='/experience'>Water Sport</a>
                <a className='links' href='/experience'>Food & Wine</a>
                <a className='links' href='/experience'>Hikeing</a>
                <a className='links' href='/experience'>National Parks</a>
            </div>

            <div>
                <h4>Terms & Conditions</h4>
                <a className='links' href='/'>Terms & Conditions</a>
                <a className='links' href='/'>Terms of Use - Data Policy</a>                
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
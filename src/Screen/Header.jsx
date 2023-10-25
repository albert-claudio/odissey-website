import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Header.css';


function Header() {
  return (
    <div className='Header'>
        <header>
            <nav>
                <ul>
                    <a href='/'><FaTwitter/></a>
                    <a href='/'><FaInstagram/></a>
                    <a href='/'><FaFacebook/></a>
                </ul>
                <button className='btn'>Reserva Agora</button>
            </nav>
        </header>

    </div>
  )
}

export default Header
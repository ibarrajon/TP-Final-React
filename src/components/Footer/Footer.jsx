import React from 'react';
import './Footer.css';
import { AiOutlineUp} from "react-icons/ai";
import wsp from '../assets/whatsapp.png';

const Footer = () => {
    return(
        <footer>
            <div className='inicio'>
                <a href="#inicio"><button className='arriba'><AiOutlineUp/></button></a>
                <p>JI Business 2023. Desarrollado por Jon Ibarra.</p>
            </div>
            <div className="terminos"> 
                <p><a href="#">Terminos y condiciones</a></p>
                <p><a href="#">Política de privacidad</a> </p>
                <a href="whatsapp://send?phone=+542324541770"><img src={wsp} className='wsp' alt="whatsapp" /></a>    
            </div>
        </footer>
    )
}
export { Footer }
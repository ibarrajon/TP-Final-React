import React from 'react';
import './Principal.css';
import banner from '../assets/banner-principal.png';
import { Contacto } from '../Contacto/Contacto';

const Principal = () => {
    return (
        <section id='inicio'>
            <div className='banner'>
                <img src={banner} alt="banner" />
                <div className='info-banner'>
                    <h1>REDUCE EL PAGO DE IMPUESTOS.</h1>
                    <h2>TE BRINDAMOS ASESORÍA FISCAL PERSONALIZADA</h2> 
                </div>
                
                <button className='btn-asesoria'><Contacto nombreBoton="SOLICITA UNA ASESORIA"/></button>
            </div>
            
            <div className='asesoria'>
                <h2>¿Necesitas asesoría fiscal para reducir el pago de impuestos?</h2>
                <button className='btn-contactanos'><Contacto nombreBoton="Contáctanos"/></button>
            </div>
        </section>
    )
}

export { Principal }
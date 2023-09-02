import React, { useState } from 'react';
import './Contacto.css';

const Contacto = ({ nombreBoton }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* <a onClick={togglePopup}>{nombreBoton}</a> */}
            {/* <a onClick={togglePopup}>{nombreBoton}</a> */}
            <button className="btn-contacto" onClick={togglePopup}>{nombreBoton}</button>
            {isOpen && (
                <div className="popup">
                    <form className='container-contacto'>
                        <div className="form-container">
                            <label>Nombre:</label>
                            <input className='contacto-input' type="text" id="nombre" required />

                            <label>Email:</label>
                            <input className='contacto-input' type="email" id="email" required />

                            <label>Asunto:</label>
                            <input className='contacto-input' type="text" id="asunto" required />

                            <label>Mensaje:</label>
                            <textarea rows="5" className='contacto-mensaje' id="message"></textarea>

                            <div className="enviar-container">
                                <button className='enviar-form' type="submit">Enviar</button>
                                <button className='enviar-form' onClick={togglePopup}>Cerrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export { Contacto }
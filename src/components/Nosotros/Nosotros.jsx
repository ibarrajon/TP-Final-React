import React from 'react';
import './Nosotros.css';
import nosotros from '../assets/nosotros.png'
import finanzas from '../assets/finanzas.png'

const Nosotros = () => {
    return (
        <section id="nosotros">
            <img src={nosotros} className="fondo-nosotros" alt="nosotros" />
         
            <div className='infoquienes'>
                <h2>¿Quiénes Somos?</h2>
                <p>Somos una firma de contabilidad especializados en brindar asesoría fiscal para la reducción del pago de impuesto y la gestión de nominas, retenciones salariales y pago de utilidades. Nuestro clientes principales son:</p>
            
                <div className="cuadrados">  
                    <div className="cuadrado1">
                        <div className="contenido rotar-imagen">
                            <img src={finanzas} alt="finanzas" />
                            <h3>Personas Físicas</h3>
                        </div>
                    </div>

                    <div className="cuadrado2">
                        <div className="contenido rotar-imagen">
                            <img src={finanzas} alt="finanzas" />
                            <h3>Personas Morales</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Nosotros }
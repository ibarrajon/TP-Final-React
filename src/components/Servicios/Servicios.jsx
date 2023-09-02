import React from 'react';
import './Servicios.css';
import estrategias from '../assets/estrategias.png'
import nomina from '../assets/nomina.png'
import costos from '../assets/costos.png'
import impuestos from '../assets/impuestos.png'
import { VscRocket } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";

const Servicios = () => {
    return ( 
        <section id="servicios">    
            <div className="izquierda">
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos Servicios de Contabilidad General. Asesoría Fiscal para reducción de pago de impuestos, Auditorías Financieras, Auditorías Fiscales y la Gestión de Nómina, retenciones y pagos de utilidades.</p>
                <p>También contamos con servicios como auditorías internas, trámites empresariales y asesoramiento en procesos de certificación ISO.</p>
            </div>
            <div className="derecha">
                <div className="row-servicios">
                    <div className="sub-derecha">
                        <div className="info-derecha">
                            <img src={estrategias} alt="estrategias" />
                            <VscRocket className='icon-servicio' />
                            <p><a href="#">Estrategias Fiscales</a></p>
                        </div>
                        <div className="info-derecha">
                            <img src={costos} alt="costos" /> 
                            <AiOutlinePieChart className='icon-servicio' />
                            <p><a href="#">Contabilidad de Costos</a></p>
                        </div>  
                    </div>
                    <div className="sub-derecha">
                        <div className="info-derecha">
                            <img src={nomina} alt="nomina" />
                            <IoIosPeople className='icon-servicio' />
                            <p><a href="#">Gestión de Nómina</a></p>
                        </div>
                        <div className="info-derecha">
                            <img src={impuestos} alt="impuestos" />
                            <GiAlarmClock className='icon-servicio' />
                            <p><a href="#">Devolución de Impuestos</a></p>
                        </div>
                    </div>
                </div>
            </div>      
        </section>
    )
}

export { Servicios }
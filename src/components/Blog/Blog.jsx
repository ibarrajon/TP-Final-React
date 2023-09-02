import React, { useState } from 'react';
import './Blog.css';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import { LiaUser } from "react-icons/lia";

const Blog = () => {
    const textoBlog1 = "Una devolución de saldo a favor del SAT se refiere a cuando un contribuyente ha pagado más impuestos de los que debe, y solicita la restitución de ese exceso de pago presentando una solicitud ante el Servicio de Administración Tributaria. Si la solicitud es aceptada, el SAT reembolsa el exceso de pago al contribuyente a través de un depósito bancario o lo aplica a futuros pagos. Es importante cumplir con los requisitos y normativas del SAT para evitar demoras en el proceso y se aconseja consultar la legislación tributaria o buscar asesoramiento profesional si es necesario."

    const textoBlog2 = "El Servicio de Administración Tributaria (SAT) dio a conocer que en la próxima miscelánea fiscal implementada a partir del 2022 los médicos profesionales serán fiscalizados de manera más cautelosa, pues se busca que haya menos evasión de impuestos. La medida aplica luego de que el SAT se dio cuenta que el sector evadía el pago de impuestos gracias a la dificultad que representa rastrear pagos en efectivo, lo que implica conocer con exactitud el monto real de sus ingresos."

    const textoBlog3 = "El Servicio de Administración Tributaria (SAT) meterá en cintura a dentistas, doctores, nutriólogos y psicólogos incumplidos en el pago de sus impuestos. Los primeros en fiscalizar serán aquellos que no estén aceptando pagos con tarjeta de débito o de crédito."

    //funciones para cambiar el valor de leer mas y tambien para que al precionarlo se muestre el texto completo
    const [leerMasBlog1, setLeerMasBlog1] = useState(true);
    const toggleBlog1 = () => setLeerMasBlog1(!leerMasBlog1);

    const [leerMasBlog2, setLeerMasBlog2] = useState(true);
    const toggleBlog2 = () => setLeerMasBlog2(!leerMasBlog2);

    const [leerMasBlog3, setLeerMasBlog3] = useState(true);
    const toggleBlog3 = () => setLeerMasBlog3(!leerMasBlog3);

    return (
        <section id='blog'>
            <h2>Nuestro Blog</h2>

            <div className="card-container">
                <div className="card">
                    <img src={blog1} className='card-image' alt="blog1" />
                    <div className="card-contentido">
                        <h3>¿Qué es una devolución de saldo a favor SAT?</h3>
                        <p>{leerMasBlog1 ? textoBlog1.slice(0,100) + "..." : textoBlog1}</p> {/*mostrar texto comprimido, solo 100 caracteres. cuando se apreta leer mas se ve completo */}
         
                        <ul>
                            <li>
                                <a href="#"><LiaUser className='icon-user'/> JIBUSINESS</a>
                            </li>
                            <li>
                            <a onClick={toggleBlog1}> {leerMasBlog1 ? 'LEER MÁS' : 'LEER MENOS'}</a> {/*<a cuando se apreta leer mas, el link se cambia a leer menos */}
                            </li>
                        </ul>        
                    </div>
                </div>
                <div className="card">
                    <img src={blog2} className='card-imagen' alt="blog2" />
                    <div className="card-contentido">
                        <h3>SAT va tras los médicos, clausurarán consultorios si no pagan impuestos; así pueden rastrearte</h3>
                        <p>{leerMasBlog2 ? textoBlog2.slice(0,100) + "..." : textoBlog2}</p> {/*mostrar texto comprimido, solo 100 caracteres. cuando se apreta leer mas se ve completo */}
                    
                        <ul>
                            <li>
                                <a href="#"><LiaUser className='icon-user'/> JIBUSINESS</a>
                            </li>
                            <li>
                            <a onClick={toggleBlog2}> {leerMasBlog2 ? 'LEER MÁS' : 'LEER MENOS'}</a> {/*cuando se apreta leer mas, el link se cambia a leer menos */}
                            </li>
                        </ul> 
                    </div>
                </div>
                <div className="card">
                    <img src={blog3} className='card-imagen' alt="blog3" />
                    <div className="card-contentido">
                        <h3>El fisco va por doctores y dentistas incumplidos</h3>
                        <p>{leerMasBlog3 ? textoBlog3.slice(0,100) + "..." : textoBlog3}</p> {/*mostrar texto comprimido, solo 100 caracteres. cuando se apreta leer mas se ve completo */}

                        <ul>
                            <li>
                                <a href="#"><LiaUser className='icon-user'/> JIBUSINESS</a>
                            </li>
                            <li>
                                <a onClick={toggleBlog3}> {leerMasBlog3 ? 'LEER MÁS' : 'LEER MENOS'}</a> {/*cuando se apreta leer mas, el link se cambia a leer menos */}
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>       
        </section >
    )
}

export { Blog }
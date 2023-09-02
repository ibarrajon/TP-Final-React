import './Header.css';
import { BsTelephoneFill,BsChevronDown } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub} from "react-icons/ai";
import logo from '../assets/logo.png';
import { Contacto } from '../Contacto/Contacto';

const Header = () => {
    return (
        <header id="inicio">
            <div className='inicio-datos'>
                <div className='inicio-info'>
                    <BsTelephoneFill />    
                    <a href="whatsapp://send?phone=+542324541770">(2324) 541770</a>
                    <GoMail />          
                    <a href="mailto:jon.programador@hotmail.es">jon.programador@hotmail.es</a>   
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/jon-ibarra/"><BiLogoLinkedin style={{ color: 'white'}} /></a>
                    <a href="https://github.com/ibarrajon"><AiFillGithub style={{ color: 'white' }} /></a>
                </div>
            </div>

            <div className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <nav>
                        <div className="navbar-container">
                            <ul className="navbar-links">
                                <li><a href="/#inicio">INICIO</a></li>
                                <li><a href="#nosotros">NOSOTROS</a></li>
                                <li className="dropdown">
                                    <a className="servicios">SERVICIOS <BsChevronDown /></a>
                                    <ul className="dropdown-contenido">
                                        <li><a href="#servicios">ESTRATEGIAS FISCALES</a></li>
                                        <li><a href="#servicios">GESTION DE NOMINA</a></li>
                                        <li><a href="#servicios">CONTABILIDAD DE COSTOS</a></li>
                                        <li><a href="#servicios">DEVOLUCION DE IMPUESTOS</a></li>    
                                    </ul>
                                </li>
                                <li><a href="#blog">BLOG</a></li>
                                <li className='li-contacto'><Contacto nombreBoton="CONTACTO"/></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export { Header }
import './FooterNav.css'
import './FooterNavResponsive.css'
import logoFooter from './logo2.png'
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-scroll'

function FooterNav(){
    return(
        <div class="footer-nav">
        <div class="footer-nav-logo">
            <img src={logoFooter} alt="logo footer"></img>
            <p>CNPJ: 41.619.939/0001-16</p>
        </div>

        <div class="footer-nav-contact">
            <div class="footer-nav-contact-title">
                <h2>Contato</h2>
            </div>
            <p><FaWhatsapp /> 55 (11) 94707-9030</p>
            <p><BsFillTelephoneFill /> (11) 94707-9030</p>
            <p><MdEmail /> terelitacontato@gmail.com</p>
            <p><FaLocationDot /> Rua Zumbi dos Palmares 258 - Pq. <br/> São Vicente - 09371-076</p>
        </div>

        <div class="footer-nav-navigation">
            <div class="footer-nav-navigation-title">
                <h2>Navegação</h2>
            </div>
            <ul>
                <li>
                    <Link to="home" smooth duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="sobre" smooth duration={500}>Sobre</Link>
                </li>
                <li>
                    <Link to="produtos" smooth duration={500}>Produtos</Link>
                </li>
                <li>
                    <Link to="contato" smooth duration={500}>Contato</Link>
                </li>
                <li>
                    <a href="https://terelitacafe.lojavirtualnuvem.com.br/produtos/">Comprar</a>
                </li>
            </ul>
        </div>

        <div class="footer-nav-follow">
            <div class="footer-nav-follow-title">
                <h2>Siga-nos</h2>
            </div>
            <ul>
                <li>
                    <a href="https://www.instagram.com/terelitacafe"><PiInstagramLogo /> Instagram</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=61552178273850&locale=pt_BR"><FaFacebook /> Facebook</a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default FooterNav
import './Home.css'
import './HomeResponsive.css'
import logo from './logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-scroll'

function Home (){
    return(
        <div class="header" id="home">
        <div class="header-logo">
            <img src={logo} alt="logo terelita"></img>
        </div>
        <div class="header-nav">
            <ul>
                <li className='carShopAuto'>
                    <Link to="sobre" smooth duration={500}>Sobre</Link>
                </li>
                <li className='carShopAuto'>
                    <Link to="produtos" smooth duration={500}>Produtos</Link>
                </li>
                <li className='carShopAuto'>
                    <Link to="contato" smooth duration={500}>Contato</Link>
                </li>
                <li className='carShopAuto'>
                    <a href="https://terelitacafe.lojavirtualnuvem.com.br/produtos/"><FaCartShopping/></a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Home
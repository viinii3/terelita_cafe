import './Home.css'
import logo from './logo.png'
import { FaCartShopping } from "react-icons/fa6";

function Home (){
    return(
        <div class="header" id="home">
        <div class="header-logo">
            <img src={logo} alt="logo terelita"></img>
        </div>
        <div class="header-nav">
            <ul>
                <li className='carShopAuto'>
                    <a href="#sobre">Sobre</a>
                </li>
                <li className='carShopAuto'>
                    <a href="#produtos">Produtos</a>
                </li>
                <li className='carShopAuto'>
                    <a href="#contato">Contato</a>
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
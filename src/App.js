import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import FooterNav from './components/FooterNav/FooterNav';
import Home from './components/Home/Home';
import Link from './components/Link/Link';
import Produtos from './components/Produtos/Produtos';
import Slide from './components/Slide/Slide';
import Sobre from './components/Sobre/Sobre';
import ZapButton from './components/ZapButton/ZapButton';

function App() {
  return (
    <div className="App">
      <ZapButton/>
      <Home/>
      <Carrousel/>
      <Sobre/>
      <Link/>
      <Produtos/>
      <Slide/>
      <Contato/>
      <FooterNav/>
      <Footer/>
    </div>
  );
}

export default App;

import './Produtos.css'
import imagem1 from './imagem1produto.jpg'
import imagem2 from './imagem2produto.jpg'
import imagem3 from './imagem3produto.jpg'

function Produtos(){
    return(
        <div class="produtos" id="produtos">
        <h1>Produtos</h1>
        <div class="produtos-container">
            <div class="produto-container-box1">
                <img src={imagem1} alt="cafe 500g"></img>
                    <p>Café especial em grãos torrado - torra média - 500g</p>
                    <h3><span class="predef1">R$ </span><span class="predef2">50,00</span></h3>
                    <div class="button">
                        <a href="https://terelitacafe.lojavirtualnuvem.com.br/produtos/cafeespecialemgraos1/"><span class="estilo1">Com</span><span class="estilo2">prar</span></a>
                    </div>
            </div>
            <div class="produto-container-box2">
                <img src={imagem2} alt="cafe 1k"></img>
                    <p>Café clássico em grãos torrado - torra média - 1kg</p>
                    <h3><span class="predef3">R$ </span><span class="predef4">58,00</span></h3>
                    <div class="button">
                        <a href="https://terelitacafe.lojavirtualnuvem.com.br/produtos/cafeclassicoemgraos/"><span class="estilo3">Com</span><span class="estilo4">prar</span></a>
                    </div>
            </div>
            <div class="produto-container-box3">
                <img src={imagem3} alt="cafe premium"></img>
                    <p>Café premium moído e torrado - torra média - 500g</p>
                    <h3><span class="predef5">R$ </span><span class="predef6">30,00</span></h3>
                    <div class="button">
                        <a href="https://terelitacafe.lojavirtualnuvem.com.br/produtos/terelitacafemoido/"><span class="estilo5">Com</span><span class="estilo6">prar</span></a>
                    </div>
            </div>
        </div>
        <div class="btn-verMais">
            <a href="https://terelitacafe.lojavirtualnuvem.com.br/produtos/">Ver Mais</a>
        </div>
    </div>
    )
}

export default Produtos
import './Slide.css'
import './SlideResponsive.css'
import lavoura from './lavoura.png'
import cafe from './pe_cafe.png'
import familiaAnimacao from './familia-animacao.png'
import familiaFoto from './familia-foto.png'

function Slide(){
    return(
        <div class="slider-img">
            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn" id="radio1"></input>
                    <input type="radio" name="radio-btn" id="radio2"></input>
                    <input type="radio" name="radio-btn" id="radio3"></input>
                    <input type="radio" name="radio-btn" id="radio4"></input>
                    <div class="slide first">
                        <img src={lavoura} alt="Imagem da lavoura"></img>
                    </div>
                    <div class="slide">
                        <img src={cafe} alt="imagem do pé de café"></img>
                    </div>
                    <div class="slide">
                        <img src={familiaAnimacao} alt="arte da familia"></img>
                    </div>
                    <div class="slide">
                        <img src={familiaFoto} alt="imagem da lavoura"></img>
                    </div>
                </div>
                <div class="navigation-bar">
                    <label class="manual-btn" for="radio1"></label>
                    <label class="manual-btn" for="radio2"></label>
                    <label class="manual-btn" for="radio3"></label>
                    <label class="manual-btn" for="radio4"></label>
                </div>
            </div>
        </div>
    )
}

export default Slide
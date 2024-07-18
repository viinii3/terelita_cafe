import './Slide.css'

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
                        <img src={"./especial 2 (1)/1.png"} alt=""></img>
                    </div>
                    <div class="slide">
                        <img src={"./especial 2 (1)/2.png"} alt=""></img>
                    </div>
                    <div class="slide">
                        <img src={"./especial 2 (1)/4.png"} alt=""></img>
                    </div>
                    <div class="slide">
                        <img src={"./lavoura.png"} alt="imagem da lavoura"></img>
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
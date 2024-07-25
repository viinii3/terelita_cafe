import './Link.css'
import './LinkResponsive.css'
import { LiaInstagram } from "react-icons/lia";

function Link(){
    return(
        <div class="link">
            <h2>
            <LiaInstagram 
                style={{
                    paddingTop:'10px'
                }}
            /> 
                terelitacafe
            </h2>
            <p>Estamos no Instagram</p>
            <a href="https://www.instagram.com/terelitacafe">Siga-nos</a>
        </div>
    )
}

export default Link
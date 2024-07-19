import './Contato.css'
import { useState } from 'react'

function Contato(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [menssage, setMenssage] = useState('')

    function sendEmail(e){
        e.preventDefault();
    }

    return(
        <div class="contato" id="contato">
            <h1>Contato</h1>
            <div class="contato-form">
                <form onSubmit={sendEmail}>
                    <input 
                        type="text"
                        required 
                        placeholder="Insira seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <br/>
                    <input 
                        type="tel" 
                        required 
                        placeholder="Insira seu telefone"
                        onChange={(e) => setTel(e.target.value)}
                        value={tel}
                    />
                    <br/>
                    <input 
                        type="email" 
                        required 
                        placeholder="Insira seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <br/>
                    <textarea 
                        required 
                        placeholder="Nos envie oque precisa"
                        onChange={(e) => setMenssage(e.target.value)}
                        value={menssage}
                    />
                    <br/>
                    <div class="contato-form-btn">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contato
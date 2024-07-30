import './Contato.css'
import './ContatoResponsive.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contato(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [menssage, setMenssage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        const templateParams = {
            from_name: name,
            menssage: menssage,
            tel: tel,
            email: email
        }

        emailjs.send(
            "service_miy7mep", 
            "template_ie3wi5q", 
            templateParams, 
            "iPhIQBftscAnU7FNG"
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setName('')
            setEmail('')
            setMenssage('')
            setTel('')
        }, (err) => {
            console.log('FAILED: ', err);
        })
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
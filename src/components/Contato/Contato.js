import './Contato.css'

function Contato(){
    return(
        <div class="contato" id="contato">
            <h1>Contato</h1>
            <div class="contato-form">
                <form action="https://formsubmit.co/terelitacontato@gmail.com" method="POST">
                    <label for="name">Nome:</label>
                    <br/>
                    <input type="text" name="name" id="name" required placeholder="Insira seu nome"></input>
                    <br/>
                    <label for="tel">Telefone:</label>
                    <br/>
                    <input type="tel" name="tel" id="tel" required placeholder="Insira seu telefone"></input>
                    <br/>
                    <label for="email">Email:</label>
                    <br/>
                    <input type="email" name="email" id="email" required placeholder="Insira seu email"></input>
                    <br/>
                    <label for="mesage">Mensagem:</label>
                    <br/>
                    <textarea name="mesage" id="mesage" required placeholder="Nos envie oque precisa"></textarea>
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
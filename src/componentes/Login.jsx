import { } from 'react'
import './Login.scss'

function Login() {
  return (
    <>
    <aside2>
      <div className='login'>
        <h1> Contato </h1>

          <div className='nome_all'>
            <label htmlFor="nome">Nome </label>
            <input type="text" id='nomeid' placeholder='Digite seu nome' required='required' />
          </div>
        
          <div className='email_all'>
            <label htmlFor="email">Email </label>
            <input type='email' id='emailid' placeholder='Digite seu email' required='required' />
          </div>
        
          <div className='telefone_all'>
            <label htmlFor="telefone">Telefone </label>
            <input type='number'  id='telidd' placeholder='Digite seu Numero de celular' required='required' />
          </div>

          <textarea placeholder='Deixe Sua Mensagem'></textarea>
          <input type='submit' id='submit' className='enviar'/>
        
      </div> 
    </aside2>
    </>
  )
}

export default Login
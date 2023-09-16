import { } from 'react'
import './Doacao.scss'




function Doacao() {
  return (
    <>
      <aside>
        <div className='doacao'>
          <h1> Faça Sua Doação </h1>
          <p>
          Para contribuir com este projeto que ira ajudar a vida de muitas pessoas, faça uma doação ou Apenas divulgue para que alcance  mais pessoas 
          </p>

          <div className='redes_sociais'>
            <div className='img_doacao'>
              <img src="src\img\pix.png" alt="pix" className='img'/> 
              <img src="src\img\insta.png" alt="insta" className='img' /> 
              <img src="src\img\whatsapp.png" alt="whats" className='img' /> 
              <img src="src\img\gmail.png" alt="gmail" className='img' /> 
            </div>

            <div className="contatos">
              <p className="contato"> 1194334-7167 </p>
              <p className="contato"> Instagram </p>
              <p className="contato"> 55 1194334-7167 </p>
              <p className="contato"> Aqua.Alert2023@gmail.com </p>
            </div>
          </div>

        </div>
      </aside>
      
    </>
  )
}

export default Doacao
import { } from 'react'
import './Menu.scss'


function Menu() {
  return (
    <>
    <main>
      <section>
        <div className='abertura'>
          <h1> Abertura </h1>
          <p> Nos dias atuais há um evolução das tecnologias inteligentes, a aplicação dessas tecnologias na vida urbana tem se tornado cada vez mais relevante. Uma das áreas em que isso é possível é na detecção de enchentes por meio de software inteligente. Através da utilização de sensores e algoritmos, é possível prever e prevenir inundações, minimizando seus impactos na cidade e na vida das pessoas. </p>
        </div>

        <div className="problema">
          <h1> Problema </h1>
          <p> Ultimamente, estão surgindo diversos relatos de grandes enchentes invadindo ambientes urbanos e domésticos, causando grandes danos às famílias e sujeitando-as a procurar outras formas de ter um lar ou até mesmo sobreviver, além disso, as enchentes acabam atrasando a vida de muitas pessoas que saem todos os dias para o trabalho de carro, motocicletas ou transporte público obstruindo a rotas de locomoção. </p>
        </div>
      </section>

      <section>
        <div className="contexto">
          <h1> Contexto </h1>
          <p> Tais inundações ocorrem por latência na detecção das condições temporais, climáticas e atmosféricas, o que causa uma impossibilidade de ação prévia como ocorrido no desastre nas regiões de Ilha Bela, Caraguatatuba e Ubatuba. Além da questão de fatores momentâneos, há também uma variedade de fatores geográficos fixos que geram locais suscetíveis a desastres, desde mapas históricos de locais propensos a enchentes, até disposição de sedimento e composição do solo, o que significa que um número considerável de pessoas estão constantemente presentes em áreas de risco sem meios confiáveis de serem alertados. </p>
        </div>
      </section>

      <section>
        <div className="caracteristicas">
          <h1> Caracteristicas </h1>
          <img src="src\img\AquaAlert.png" alt="AquaAlert" />

          <ul>
            <li> Compacto </li>
            <li> Utilização de dados em tempo real </li>
            <li> Econômico </li>
            <li> Fácil aplicação </li>
            <li> Acessível por conta de manuseio simples por meio de aplicativo </li>
            <li> Eficiente por conta de redundância </li>
            <li> Evita falso negativos e falso positivos </li>
          </ul>
        </div>
      </section>
    </main>

    <aside className='atualidade'>
      <section>
        <div className="problemas_dos_atuais">
          <h1> Problema das soluções atuais </h1>
          <p> Embora existam sistemas de detecção e alerta de enchentes já disponíveis, muitos deles apresentam algumas desvantagens. Alguns são muito caros e requerem uma grande infraestrutura para serem instalados e mantidos, o que torna seu uso inviável para muitas cidades e regiões. Outros podem ser imprecisos e apresentar falhas, o que pode resultar em alarmes falsos ou até mesmo na falta de alerta em situações de risco real. Além disso, muitos sistemas de alerta de enchentes não são acessíveis a toda a população, deixando muitas pessoas vulneráveis aos riscos de enchentes. </p>
        </div>
      </section>

      <section>
        <div className="materia_prima">
          <h1> Matéria Prima </h1>
          <p> Visamos que cada estação seja composta por apenas duas peças principais, o corpo onde estará presente os dispositivos de coleta, baterias de alta capacidade e uma antena de transmissão de dados, e um pequeno painel solar para garantir autonomia constante da unidade. </p>
        </div>
      </section>
    </aside>

    <article>
      <section>
        <div className="diferencial_empreendedor">
          <h1> Diferencial Empreendedor </h1>
          <p> Visando resolver os problemas apresentados formulamos o conceito do AquaAlert, um dispositivo compacto, eficiente, econômico e de fácil aplicação. É um projeto que se divide em duas partes, o hardware e o software. </p>
          
          <h3> Software </h3>
          <p> 
            Sendo a parte que terá contato direto com o usuário, visamos um aplicativo de celular simples e direto, mostrando 3 informações principais; O nível de risco de enchente em uma certa região, a rota mais curta para escapar de uma região de risco e um mapa mostrando os pontos foco de risco.
            Para isso, utilizaremos algoritmos de reconhecimento de padrões para comparar dados atuais e históricos visando gerar uma previsão certeira.Sintetizando os dados fixos com os dados em tempo real é possível criar uma previsão de quando um novo evento crítico há de ocorrer e formular uma porcentagem de chance de acontecer, assim, podemos criar um gradiente de risco sobre um mapa e formular uma rota de saída eficiente, além disso, mesmo em dias em que não há risco de alagamento podemos avisar o usuário caso ele se encontre em uma zona de risco.
          </p>

           <h3> Hardware </h3>
           <p>
              Ao invés de termos uma única estação de detecção grande, de difícil instalação, e custosa, apresentamos a ideia da utilização de várias estações pequenas que comunicam entre si.
              As vantagens desse modelo se dão primeiramente pela fácil instalação de várias estações por conta do tamanho e custo reduzido, além da vantagem monetária, a presença de várias estações significa uma grande resistência da rede a danos físicos e muita precisão já que caso uma das estações estiver obtendo resultados errados por razões externas ou internas, basta comparar com as informações de outras estações para corrigir ou descartar os dados errôneos.
           </p>
        
        </div>
      </section>
    </article> 
    
    </>
  )
}

export default Menu
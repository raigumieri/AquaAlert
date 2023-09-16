import { } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss';

function Nav() {
  return (
    <>
       <body>
        <header>
          
          <h1>AquaAlert</h1>
          
          <div className='menu_nav'>
            <NavLink to='Menu' className='rotas'>Menu</NavLink>
            <NavLink to='Doacao'className='rotas'> Doação </NavLink>
            <NavLink to='Login'className='rotas'> Login </NavLink>
          </div>
        </header>
        </body> 
    </>
  )
}

export default Nav
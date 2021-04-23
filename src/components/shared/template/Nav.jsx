import React from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'

const Nav = (props) => {
    return (
        <nav>
            <Menu>
                <MenuItem to="/" label="Pagina Inicial" icon="home" /> 
                <MenuItem to="/PgRiscos" label="Riscos" icon="warning" />
                <MenuItem to="/PgControles" label="Controles" icon="sliders" />
                <MenuItem to="/PgMeusControles" label="Meus Controles" icon="sliders" />
            </Menu>
        </nav>
    )
}

export default Nav

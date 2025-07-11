import { useState } from 'react'
import { BotonNav } from './BotonNav'
import { CartWidget } from './CartWidget'
import { LogoNav } from './LogoNav'

export function Navbar () {
    const [menuAbierto, setMenuAbierto] = useState(false)

    const menuHambur = () => {
        setMenuAbierto(prev => !prev)
    }

    const cerrarMenu = () => {
        setMenuAbierto(false)
    }

    return (
        <nav className="navbar-responsive">
            <LogoNav />

            <button className="menu-hambur" onClick={menuHambur}>
                ☰ 
            </button>

            <div className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
                <BotonNav categoria="" label="📄Todo" onClick={cerrarMenu} />
                <BotonNav categoria="pizza" label="🍕 Pizzas" onClick={cerrarMenu} />
                <BotonNav categoria="sandwich" label="🥖 Sandwiches" onClick={cerrarMenu} />
                <BotonNav categoria="bebida" label="🍺 Bebidas" onClick={cerrarMenu} />
            </div>

            <CartWidget />
        </nav>
    )
}
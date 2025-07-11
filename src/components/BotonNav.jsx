import { NavLink } from 'react-router'

export function BotonNav ({ categoria, label, onClick }) {
    return (
        <NavLink 
            to={categoria ? `/category/${categoria}` : '' }
            className={({ isActive }) =>
                isActive
                    ? 'boton-filtro boton-filtro-activo'
                    : 'boton-filtro'
            }
            onClick={onClick}
        >
                {label}
        </NavLink>
    )
}
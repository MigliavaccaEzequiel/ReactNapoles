import { BotonNav } from './BotonNav'
import { CartWidget } from './CartWidget'
import { LogoNav } from './LogoNav'

export function Navbar () {
    return (
        <nav>
            <LogoNav />
            <div>
                <BotonNav categoria="" label="📄Todo" />
                <BotonNav categoria="beauty" label="💄Belleza" />
                <BotonNav categoria="fragrances" label="🫙Fragancias" />
                <BotonNav categoria="furniture" label="🪑Muebles" />
            </div>
            <CartWidget />
        </nav>
    )
}
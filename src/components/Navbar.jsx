import { BotonNav } from "./BotonNav"
import { CartWidget } from "./CartWidget"
import { LogoNav } from "./LogoNav"

export function Navbar () {
    return (
        <nav style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems:'center', gap: '10px', border: 'solid, green, 2px', padding: '10px'}}>
            <LogoNav />
            <BotonNav categoria={'🍕Pizzas'} />
            <BotonNav categoria={'🥖Sanguches'} />
            <BotonNav categoria={'🍺Bebidas'} />
            <CartWidget />
        </nav>
    )
}
import { Item } from "./Item";

export function ItemList ({ items }) {

    return (
        <div className="borde-rojo">
            {items.map(item => <Item item={item} key={item.id}/>)}
        </div>
    )
}
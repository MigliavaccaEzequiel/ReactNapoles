import { useState } from 'react';

export function ItemCount() {
  const [contador, setContador] = useState(1);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }
  const limpiar = () => setContador(1)

  return (
    <div className='contador'>
      <p>Cantidad: {contador}</p>
      <button onClick={disminuir}>-</button>
      <button onClick={limpiar}>Limpiar</button>
      <button onClick={aumentar}>+</button>
    </div>
  );
}
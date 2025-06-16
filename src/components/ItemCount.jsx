import { useState } from 'react';

export function ItemCount() {
  const [contador, setContador] = useState(0);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }
  const reiniciar = () => setContador(0)

  return (
    <div className='contador'>
      <p>Contador: {contador}</p>
      <button onClick={disminuir}>-</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={aumentar}>+</button>
    </div>
  );
}
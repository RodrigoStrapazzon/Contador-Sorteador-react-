import { useState } from "react";

function MeuContador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador == 0) {
      alert("O contador não pode ser menor que zero.");
      return;
    }
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default MeuContador;

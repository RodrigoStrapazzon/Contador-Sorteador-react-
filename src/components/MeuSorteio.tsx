import { useState } from "react";

export function MeuSorteio() {
  const [valorSelecionado, setValorSelecionado] = useState("");
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [valorSorteado, setValorSorteado] = useState<number | null>(null);
  const [resultado, setResultado] = useState<string>("");

  const sortearNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
  };

  const jogar = () => {
    if (valorSelecionado === "") {
      alert("Por favor, selecione um número antes de jogar.");
      return;
    }
    const numeroSorteado = sortearNumero();
    setValorSorteado(numeroSorteado);

    if (parseInt(valorSelecionado) === numeroSorteado) {
      setResultado("Parabéns! Você ganhou!");
    } else {
      setResultado(
        `Que pena! O número sorteado foi ${numeroSorteado}. Tente novamente!`
      );
    }
  };

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setValorSelecionado(event.target.value);
  }
  return (
    <div>
      <h1>Meu Sorteio</h1>
      <div>
        {" "}
        <select
          id="select-dezena"
          value={valorSelecionado}
          onChange={handleSelectChange}
        >
          <option value="">Selecione...</option>
          {/* 5. Mapeia o array de números para criar os elementos option */}
          {numeros.map((numero) => (
            <option key={numero} value={numero}>
              {numero}
            </option>
          ))}
        </select>
        {valorSelecionado && <p>Você selecionou: {valorSelecionado}</p>}
        <button onClick={jogar}>Jogar</button>
        {valorSorteado && <p>Número sorteado: {valorSorteado}</p>}
        {resultado && <p>{resultado}</p>}
      </div>
    </div>
  );
}

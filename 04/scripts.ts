interface Etiqueta {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}

const etiquetas = (etiqueta: Etiqueta): string[] => {
  let result: string[] = [];
  for (let i = 1; i <= etiqueta.qtd; i++) {
    result.push(`${etiqueta.lote} - ${etiqueta.ano} - 00${i}`);
  }
  return result;
};
console.log(
  etiquetas({
    produto: "CPU Dual Core 3.0GHZ",
    lote: 321,
    ano: 2022,
    qtd: 5,
  })
);

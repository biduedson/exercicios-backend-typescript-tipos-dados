const soletrando = (texto: string): string => {
  let result: string = "";
  return texto.split("").join("-");
};

console.log(soletrando("programador"));

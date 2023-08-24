let arrayDeNumeros: number[] = [1, 5, 2];

const tabuada = (arrayNumber: number[]): void => {
  for (let numero of arrayNumber) {
    for (let i = 0; i < 11; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
    console.log("---------------- \n");
  }
};

tabuada(arrayDeNumeros);

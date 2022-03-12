let cantidadTotal: number = Number(prompt("ingrese la cantidad de numeros"));
let numerosIngresados: number[] = [];
let cantidadNegativos: number = 0;
let cantidadPositivos: number = 0;
let cantidadCeros: number = 0;

for (let i: number = 0; i < cantidadTotal; i++) {
  let numeroIngresado: number = Number(prompt("ingrese un numero"));
  numerosIngresados[i] = numeroIngresado;
  if (numeroIngresado === 0) {
    cantidadCeros++;
  } else if (numeroIngresado < 0) {
    cantidadNegativos++;
  } else {
    cantidadPositivos++;
  }
}
console.log("Numeros ingreasdos:", numerosIngresados);
console.log("cantidad de numeros positivos:", cantidadPositivos);
console.log("cantidad de numeros negativos:", cantidadNegativos);
console.log("cantidad de ceros:", cantidadCeros);

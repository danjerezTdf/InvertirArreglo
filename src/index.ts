let largo: number = Number(
  prompt(`Ingrese la cantida de posiciones del arreglo:`)
);
let arregloUno: number[] = new Array(largo);

for (let i: number = 0; i < largo; i++) {
  arregloUno[i] = Number(prompt(`ingreser valor para la posicion ${i + 1}:`));
}
for (let i: number = largo - 1; i >= 0; i--) {
  console.log(`valor para la posicion ${i + 1} es:${arregloUno[i]}`);
}

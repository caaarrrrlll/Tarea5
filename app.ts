//tarea5
let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];

// Utilizamos un ciclo for para recorrer el arreglo
for (let i = 0; i < numbers.length; i++) {
  // Verificamos si el número es par o impar usando el operador %
  const esPar: boolean = numbers[i] % 2 === 0;

  // Imprimimos el mensaje correspondiente
  if (esPar) {
    console.log(`${numbers[i]} es un número par`);
  } else {
    console.log(`${numbers[i]} es un número impar`);
  }
}

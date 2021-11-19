// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Codigo del círculo
console.group("Círculos");

// const radioCirculo = 4

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);

  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aquí conectamos con el HTML
//Cuadrado
function cacularPerimetroCuadrado() {
  const resPerimetro = document.getElementById("result-span-perimeter-square");
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  resPerimetro.innerHTML = perimetro.toFixed(2) + "cm";
}

function cacularAreaCuadrado() {
  const resArea = document.getElementById("result-span-area-square");
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  resArea.innerHTML = area.toFixed(2) + "cm";
}

//Triangulo
function calcularPerimetroTriangulo() {
  const resPerimetro = document.getElementById(
    "result-span-perimeter-triangle"
  );
  const inputLado1 = document.getElementById("inputLadoUnoTriangulo");
  const lado1 = parseInt(inputLado1.value);
  const inputLado2 = document.getElementById("inputLadoDosTriangulo");
  const lado2 = parseInt(inputLado2.value);
  const inputBase = document.getElementById("inputBaseTriangulo");
  const base = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  resPerimetro.innerHTML = perimetro.toFixed(2) + "cm";
}

function calcularAreaTriangulo() {
  const resArea = document.getElementById("result-span-area-triangle");
  const inputBase = document.getElementById("inputBaseTriangulo");
  const base = inputBase.value;
  const inputAltura = document.getElementById("inputAlturaTriangulo");
  const altura = inputAltura.value;

  const area = areaTriangulo(base, altura);
  resArea.innerHTML = area.toFixed(2) + "cm";
}

/*Isnt working */
function calcularAlturaTrianguloIsosceles() {
  const inputLado1 = document.getElementById("inputLadoUnoTrianguloIsosceles");
  const lado1 = parseInt(inputLado1.value);
  const inputLado2 = document.getElementById("inputLadoDosTrianguloIsosceles");
  const lado2 = parseInt(inputLado2.value);
  const inputBase = document.getElementById("inputBaseTrianguloIsosceles");
  const base = parseInt(inputBase.value);

  if (lado1 != lado2) {
    alert("No es un triángulo isósceles");
  } else {
    const lado2Dividido = base / 2;
    const baseDividida = lado1;
    const lado2DivididoCuadrado = lado2Dividido * lado2Dividido;
    const baseDivididaCuadrada = baseDividida * baseDividida;
    const lado1Dividido = Math.sqrt(
      baseDivididaCuadrada - lado2DivididoCuadrado
    );

    const altura = lado1Dividido.toFixed(2);

    return alert(altura);
  }
  // function isosceles(lado1, lado2, base) {}

  // if (lado1 === lado2 && lado1 != base && lado2 != base) {
  //   const cateto = (base / 2) ** 2;
  //   const hipotenusa = lado1 ** 2;
  //   const altura = Math.sqrt(hipotenusa - cateto).toFixed(2);
  //   alert(altura);

  //   // const altura = Math.sqrt(lado1 * lado1 - base * base);
  //   // alert(altura);
  // } else {
  //   alert("No es un triángulo isósceles");
  // }
}

//Circulo
function calcularPerimetroCirculo() {
  const resPerimetro = document.getElementById("result-span-perimeter-circle");
  const inputRadio = document.getElementById("inputRadioCirculo");
  const radio = parseInt(inputRadio.value);

  const diametro = diametroCirculo(radio);

  const perimetro = diametro * PI;

  const perimetroFixed = perimetro.toFixed(2);

  resPerimetro.innerHTML = perimetroFixed + "cm";
}

function cacularAreaCirculo() {
  const resArea = document.getElementById("result-span-area-circle");
  const inputRadio = document.getElementById("inputRadioCirculo");
  const radio = parseInt(inputRadio.value);

  const area = areaCirculo(radio);
  const areaFixed = area.toFixed(3);

  resArea.innerHTML = areaFixed + "cm";
}

//Undo
function undo() {
  const resPerimetro = document.getElementById("result-span-perimeter");
  const resArea = document.getElementById("result-span-area");
  document.getElementById("form").reset();
  resPerimetro.innerHTML = 0 + "cm";
  resArea.innerHTML = 0 + "cm";
}

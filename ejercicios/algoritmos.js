// ----------- EJERCICIO 1 -----------
function numerosImparesDe0a100() {
  for (let n = 0; n <= 100; n++) {
    n % 2 !== 0 ? console.log(n) : null;
  }
}

// ----------- EJERCICIO 2 -----------
class Operarios {

  constructor(...sueldos) {
    this.sueldos = [];
    sueldos.forEach( 
      sueldo => parseFloat(sueldo) 
      ? this.sueldos.push( parseFloat(sueldo) ) 
      : null 
    );
  }

  imprimirSueldos() {
    console.log(this.sueldos);
  }

}

const operarios = new Operarios(100.20, "hola", "40.05");
operarios.imprimirSueldos();

// ----------- EJERCICIO 3 -----------
class Alumno {
  constructor(nombre, edad) {
    // Se hacen algunas validaciones de los datos ingresados.
    if (nombre === '' || edad <= 0 || !parseInt(edad))
      return console.error('Los datos ingresados son invalidos.');

    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarInformacion() {
    if (!this.nombre) return console.error('Hubo un error al crear al alumno.');
    console.log(`Nombre del alumno: ${this.nombre}, edad: ${this.edad}`);
  }

  esMayorDeEdad() {
    if (!this.edad) return console.error('Hubo un error al crear al alumno.');
    console.log(this.edad >= 18 ? 'Mayor de edad' : 'Menor de edad');
  }

}

/*
const alumno1 = new Alumno("Leonel Gonzalez", 20); 
alumno1.mostrarInformacion();
// Output: Nombre del alumno: Leonel Gonzalez, edad: 20
alumno1.esMayorDeEdad();
// Output: Mayor de edad

const alumno2 = new Alumno("Martin Fabregues", -18); 
//Los datos ingresados son invalidos.
alumno2.mostrarInformacion();
// Output: Hubo un error al crear al alumno.
alumno2.esMayorDeEdad();
// Output: Hubo un error al crear al alumno.
*/


// ----------- EJERCICIO 4 -----------
const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];
console.log( y.filter( y => !x.includes(y)) );
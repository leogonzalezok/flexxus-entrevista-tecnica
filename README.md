# Entrevista Técnica I+D Flexxus

## Algoritmos - JavaScript

1. Crear un algoritmo que muestre los números impares entre el 0 y el 100.
![](https://github.com/leogonzalezok/flexxus-entrevista-tecnica/blob/main/img/algoritmos-ejercicio-1.png?raw=true)
<br/>

2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector.
![](https://github.com/leogonzalezok/flexxus-entrevista-tecnica/blob/main/img/algoritmos-ejercicio-2.png?raw=true)
<br/>

3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)
![](https://github.com/leogonzalezok/flexxus-entrevista-tecnica/blob/main/img/algoritmos-ejercicio-3.png?raw=true)
<br/>

4. JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código. const x = ["n", "bro", "c", "|"]; const y = ["d", "n", "l", "bro", "g"];
![](https://github.com/leogonzalezok/flexxus-entrevista-tecnica/blob/main/img/algoritmos-ejercicio-4.png?raw=true)
<br/>

## SQL QUERIES
Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)
```sql
SELECT nombres
FROM empleados
ORDER BY nombres DESC;
``` 

Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte'. 
```sql
SELECT e.nombres, p.puesto, l.localidad
FROM puestos p
  JOIN empleados e ON p.id = e.puesto_id
  JOIN departamentos d ON e.departamento_id = d.id
  JOIN localidades l ON l.id = d.localidad_id
WHERE p.puesto = 'Soporte';
```
 Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’. 
```sql
SELECT nombres
FROM empleados
WHERE nombres LIKE 'o%';
```
Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz. 
```sql
SELECT e.nombres, e.sueldo, p.puesto, l.localidad
FROM localidades l
  JOIN departamentos d ON l.id = d.localidad_id
  JOIN empleados e ON d.id = e.departamento_id
  JOIN puestos p ON e.puesto_id = p.id
WHERE l.localidad = 'Carlos Paz';
```

Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000. 
 ```sql
SELECT e.nombres, e.sueldo, l.localidad
FROM empleados e
  JOIN departamentos d ON d.id = e.departamento_id
  JOIN localidades l ON l.id = d.localidad_id
WHERE e.sueldo >= 10000 AND e.sueldo <= 13000;
```
Visualizar los departamentos con más de 5 empleados 
``` sql
SELECT
  empleados.departamento_id,
  COUNT(*)
FROM
  empleados,
  departamentos
WHERE
    empleados.departamento_id = departamentos.id
GROUP BY
    empleados.departamento_id
HAVING
    COUNT(*) > 5;
```

Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador'.
```sql
SELECT e.nombres, p.puesto, l.localidad
FROM localidades l
  JOIN departamentos d ON l.id = d.localidad_id
  JOIN empleados e ON d.id = e.departamento_id
  JOIN puestos p ON e.puesto_id = p.id
WHERE  l.localidad = 'Córdoba'
  AND p.puesto = 'Analista'
  OR p.puesto = 'Programador';
```
Calcula el sueldo medio de todos los empleados.
```sql
SELECT
  SUM(sueldo) / COUNT(*)
FROM
  empleados
```

¿Cuál es el máximo sueldo de los empleados del departamento 10?
```sql
SELECT
  MAX(sueldo)
FROM
  departamentos d
  JOIN empleados e ON
    (d.id = e.departamento_id)
WHERE
    e.departamento_id = 10;
```

Calcula el sueldo mínimo de los empleados del departamento 'Soporte'
```sql
SELECT
  MIN(sueldo)
FROM
  departamentos d
  JOIN empleados e ON
    (d.id = e.departamento_id)
WHERE
    d.denominacion = 'Soporte';
```

Para cada puesto obtener la suma de sueldos.
```sql
SELECT
  p.puesto,
  SUM(sueldo) AS Suma
FROM
  empleados e
  JOIN puestos p ON
    p.id = e.puesto_id
GROUP BY
    e.puesto_id;
```

## Frontend - React JS
Según el diseño de figma, plasmar en código, un listado de productos con búsqueda por descripción y código de producto. Los productos pueden venir de un array o un archivo json.

Simular un tiempo de respuesta de 3 segundos con un setTimeOut
Se valora el manejo de estados entre componentes, uso de hooks y estilos.

Diseño : [Link al Diseño en Figma](https://www.figma.com/file/D3jw2OCgmuxMm3YlRo2DPe/Untitled?node-id=0%3A1&t=xOD5k4nlkDXczbV4-0 "Link al Diseño en Figma")

Deploy de la Aplicación: [Listado de Productos](https://flexxus-entrevista-tecnica.vercel.app/ "Listado de Productos")


-- Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A) --
SELECT nombres 
FROM `empleados` 
ORDER BY nombres DESC;

-- Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’. --
SELECT e.nombres, p.puesto, l.localidad 
FROM puestos p 
JOIN empleados e ON p.id = e.puesto_id 
JOIN departamentos d ON e.departamento_id = d.id 
JOIN localidades l ON l.id = d.localidad_id 
WHERE p.puesto = 'Soporte';

-- Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’. --
SELECT nombres 
FROM empleados 
WHERE nombres LIKE 'o%';

-- Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz. --
SELECT e.nombres, e.sueldo, p.puesto, l.localidad
FROM localidades l 
JOIN departamentos d ON l.id = d.localidad_id 
JOIN empleados e ON d.id = e.departamento_id 
JOIN puestos p ON e.puesto_id = p.id 
WHERE l.localidad = 'Carlos Paz';

-- Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000. --
SELECT e.nombres, e.sueldo, l.localidad 
FROM empleados e 
JOIN departamentos d ON d.id = e.departamento_id 
JOIN localidades l ON l.id = d.localidad_id 
WHERE e.sueldo >= 10000 AND e.sueldo <= 13000;

-- Visualizar los departamentos con más de 5 empleados --



-- CONSULTA DE EJEMPLO --
SELECT f.title, count(f.film_id) as veces_alquilada from film f
inner join (select * from inventory i
inner join rental r on r.inventory_id = i.inventory_id) res on res.film_id = f.film_id
group by f.title
order by veces_alquilada DESC
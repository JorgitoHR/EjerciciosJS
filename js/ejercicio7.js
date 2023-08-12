// Ejercicio lógica
let day = prompt("ingrese dia"); //LUNES

if (day === null || day === "") {
    alert(day + "Opcion invalida");
} else {
    day = day.toLowerCase();
    if (
        day === "lunes" || 
        day === "martes" || 
        day === "miercoles" ||
        day === "miércoles" ||
        day === "jueves" || 
        day === "viernes"
        ) {
    alert("es un dia entre semana");
    } else {
        // if ANIDADOS
        if (day === "sabado" || day === "sábado" || day === "domingo") {
    alert("es un fin de semana");
        } else {
    alert("favor ingresar solo dias de la semana");
    }
    }
    }







/**
 * NOTAS:
 * 1- Mayusculas
 * 2- Palabras que no son dias
 * 3- Vacio
 * 4- No le da nada
 * 5- tildes 
 */

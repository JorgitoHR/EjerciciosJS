/**
 * 1-
 * ingresar un departamento (cundinamarca, quindio , antioquia, valle)
 * alert("opcion no valida")
 * dependiendo de que departamento se debe mostrar cual es la capital
 */

let city = prompt("ingrese departamento");

if (city === null || day === "") {
    alert(city + "Opcion invalida");
} else {
    city = city.toLowerCase();
    if (
        city === "cundinamarca" || 
        day === "quindio" || 
        day === "antioquia" ||
        day === "valle"
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
 * 2-
 */
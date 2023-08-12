// Logica y algoritmos
// direccion, estado civil, cedula, celular, correo , salario
let userName = ""
let age = ""
let adress = ""
let civilStatus = ""
let identification = ""
let celPhone = ""
let mail = ""
let salary = ""

function registerData() {
 userName = prompt("ingrese su nombre")
 age = prompt ("ingrese su edad")
 adress = prompt("ingrese su direccion")
 civilStatus = prompt("ingrese su estado civil")
 identification = prompt("ingrese su identificacion")
 celPhone = prompt("ingrese su celular")
 mail = prompt("ingrese su correo")
 salary = prompt("ingrese su salario")
}

function showData() {
alert("Tu nombre es: " + userName + " tu edad es: " + age + " tu direccion es: " + adress + " tu estado civil es: " + civilStatus + " tu identificacion es: " + identification + " tu celular es: " + celPhone + " tu correo es: " + mail + " y tu salario es: " + salary)
}

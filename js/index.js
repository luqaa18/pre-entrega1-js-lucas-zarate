alert("Bienvenido a Valentime Nails, tu lugar de manicuría favorito")

let nombre
let habitual
let servicio
let tipoServicio

nombre = prompt("Ingresa tu nombre");
// Bienvenida al nuevo cliente
while (nombre == ""){
    nombre = prompt("Por favor, no te olvides de ingresar tu nombre");
}
console.log(`Hola ${nombre}`);

alert(`Hola ${nombre}, te damos la bienvenida a Valentime Nails`) ;

habitual = parseInt(prompt("¿Es la primera vez que te contactás con nosotros?\n1. Si \n2. No"))

while (isNaN(habitual) || habitual < 1 || habitual > 2) {
    habitual = parseInt(prompt("Por favor, seleccioná una opción válida \n1. Si \n2. No"))
}
if (habitual == 1) {
console.log("¡Nos alegra volver a verte!");
alert("¡Nos alegra volver a verte!");
} else{
    console.log("¡Estamos contentos de que nos hayas elegido!");
    alert("¡Estamos contentos de que nos hayas elegido!");
}

//Servicios que ofrecemos

servicio = parseInt(prompt("¿Qué nos vamos a hacer hoy? \n1. Semipermanentes \n2. Esculpidas \n3. Service"))

function servicioElegido (servicio) {
    console.log(`Parece que hoys nos vamos a hacer unas ${servicio}`);
    alert(`Parece que hoys nos vamos a hacer unas ${servicio}`);
}

while (isNaN(servicio) || servicio < 1 || servicio > 3) {
    servicio = parseInt(prompt("Porfavor selecciona un servicio disponible: \n1. Semipermanentes \n2. Esculpidas \n3. Service"))
}

switch (servicio) {
    case 1:
        servicio = "Semipermanentes";
        servicioElegido(servicio);
        break;
    case 2:
        servicio = "Esculpidas";
        servicioElegido(servicio);
        break;
    case 3:
        servicio = "Service";
        servicioElegido(servicio);
        break;
    default: false;
}


if (servicio === "Semipermanentes") {
    tipoServicio = parseInt(prompt("¿Para qué color estamos hoy? \n1. Rojo pasión \n2. Vía láctea \n3. Azul marino"))

    while (isNaN(tipoServicio) || tipoServicio < 1 || tipoServicio > 3) {
        tipoServicio = parseInt(prompt("Porfavor selecciona un tipo de servicio disponible: \n1. Rojo pasión \n2. Vía láctea \n3. Azul marino"))
    }

    switch (tipoServicio) {
            case 1:
                tipoServicio = "Rojo pasión";
                break;
            case 2:
                tipoServicio = "Vía láctea";
                break;
            case 3:
                tipoServicio = "Azul marino";
                break;
        }
    console.log(`Hermosa elección, el ${tipoServicio} queda espectacular en esta epoca`)
    alert(`Hermosa elección, el ${tipoServicio} queda espectacular en esta epoca`)
}

if (servicio === "Esculpidas") {
    tipoServicio = parseInt(prompt("¿Para qué estilo estamos hoy? \n1. Almendradas \n2. Stiletto \n3. Coffin"))

    while (isNaN(tipoServicio) || tipoServicio < 1 || tipoServicio > 3) {
        tipoServicio = parseInt(prompt("Porfavor selecciona un tipo de servicio disponible: \n1. Almendradas \n2. Stiletto \n3. Coffin"))
    }
    
    switch (tipoServicio) {
            case 1:
                tipoServicio = "Almendradas";
                break;
            case 2:
                tipoServicio = "Stiletto";
                break;
            case 3:
                tipoServicio = "Coffin";
                break;
        }
    console.log(`Parece que elegiste las ${tipoServicio}, este diseño siempre queda precioso!`)
    alert(`Parece que elegiste las ${tipoServicio}, este diseño siempre queda precioso!`)
}

if (servicio === "Service") {
    tipoServicio = parseInt(prompt("¿Para qué tipo de service estamos hoy? \n1. Remoción de cutículas \n2. Calcio \n3. Hidratación"))

    while (isNaN(tipoServicio) || tipoServicio < 1 || tipoServicio > 3) {
        tipoServicio = parseInt(prompt("Porfavor selecciona un tipo de servicio disponible: \n1. Remoción de cutículas \n2. Calcio \n3. Hidratación"))
    }

    switch (tipoServicio) {
            case 1:
                tipoServicio = "Remoción de cutículas";
                break;
            case 2:
                tipoServicio = "Calcio";
                break;
            case 3:
                tipoServicio = "Hidratación";
                break;
        }
    console.log(`Elegiste mimarte con ${tipoServicio}`)
    alert(`Elegiste mimarte con ${tipoServicio}`)
}



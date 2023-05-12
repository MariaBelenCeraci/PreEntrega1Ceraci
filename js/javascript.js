let productos = ""
let total = 0
const valorDescuento = 0.1


function ingresarDato(){
    return prompt(`Hola!🖐️ Bienvenido a mi tienda de ilustraciones. Elige los productos que quieras comprar ingresando el número que les corresponde: 
        1. Print - $1000
        2. Original - $4000
        3. Remera  - $3000
        4. Taza - $800
        5. Agenda - $2500
        
        - ESC (Finalizar compra)`)
} 

let eleccion = ingresarDato()


while (eleccion.toLowerCase() != "esc") {
    switch (eleccion) {
        case "1":
            eleccion = "Print"
            total = total + 1000;
            break;

        case "2":
            eleccion = "Original"
            total = total + 4000;
            break;

        case "3":
            eleccion = "Remera"
            total = total + 3000;
            break;

        case "4":
            eleccion = "Taza"
            total = total + 800;
            break;

        case "5":
            eleccion = "Agenda"
            total = total + 2500;
            break;

        default:
            alert("El producto ingresado no es válido, por favor elige un producto de nuestra lista")
            break;
    }

    if((eleccion == "Print") || (eleccion == "Original") || (eleccion == "Remera") || (eleccion == "Taza") || (eleccion == "Agenda")){
        productos = productos + eleccion + "\n"
        }

        eleccion = ingresarDato()
}

function aplicarDescuento(valorDescuento){
    if (total > 7000) {
        let descuento = total - total * valorDescuento;
        alert("Felicidades!✨Tu compra supera los $7000, te aplicaremos un descuento del "+ valorDescuento*100 + "%" +
        "\n" +
        "Esta es tu lista de productos elegidos: " +
        "\n" +
        productos +
        "\n" +
        "✅Total a pagar: $" + descuento)
    } else {
        alert("Gracias por tu compra! Esta es tu lista de productos elegidos: " +
        "\n" +
        productos +
        "\n" +
        "✅Total a pagar: $" + total);
}
}

aplicarDescuento(valorDescuento)

function enviarDomicilio (){
    let domicilio = confirm("Querés que te enviemos tu pedido a domicilio?")
    if(domicilio){
        let direccion = prompt("Ingresá tu dirección")
        alert("Te enviaremos tu pedido a " + direccion)
    }else{
        alert("De acuerdo, podés pasar por nuestro local a retirarlo.")
    }
}

enviarDomicilio()
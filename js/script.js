// (1)      Crear un algoritmo con un "condicional" ("if" "else" "else if" "switch")
// (2)      crear un algoritmo utilizando un ciclo ("for" - "while" - "do, while")
// (3)      armar la estructura de el proyecto en html dando a entender que sera
let SALIR = false;
let deseaSeguir = "";
let idProducto = "";
const p1 = {
    valor: 300000,
    nombre: "Nintendo Switch",
    stock: 17,
};
const p2 = {
    valor: 800000,
    nombre: "Playstation 5",
    stock: 15,
};
const p3 = {
    valor: 550000,
    nombre: "Xbox Series X",
    stock: 12,
};
const p4 = {
    valor: 55000,
    nombre: "Pokemon Escarlata",
    stock: 7,
};
const p5 = {
    valor: 55000,
    nombre: "Mario Party",
    stock: 22,
};
const p6 = {
    valor: 65000,
    nombre: "God of War Ragnarok (PS5)",
    stock: 13,
};
const p7 = {
    valor: 50000,
    nombre: "Halo Infinite (XBOX)",
    stock: 3,
};
const p8 = {
    valor: 90000,
    nombre: "Switch Controller (Control Nintendo)",
    stock: 29,
};
const p9 = {
    valor: 35000,
    nombre: "Control Xbox",
    stock: 24,
};
const p10 = {
    valor: 45000,
    nombre: "Elden Ring (PC)",
    stock: 7,
};
const p11 = {
    valor: 55000,
    nombre: "Elden Ring (PS5)",
    stock: 10,
};
const p12 = {
    valor: 25000,
    nombre: "Catan - El juego",
    stock: 15,
};
let nombre = "";
nombre = prompt("Bienvenido, ingresa tu nombre");
while (nombre === "") {
    nombre = prompt("porfavor ingrese un nombre valido");
}
alert("Bienvenido " + nombre);
while (SALIR === false) {
    let productoSelec = null;
    while (productoSelec === null) {
        idProducto = prompt(
            "Esta es nuestra lista de productos, ingresa el numero del producto que quieras:" +
                "\n" +
                "1: Nintendo Switch (300.000 CLP)" +
                "\n" +
                "2: Playstation 5 (800.000 CLP)" +
                "\n" +
                "3: Xbox Series X (550.000 CLP)" +
                "\n" +
                "4: Pokemon Escarlata (55.000 CLP)" +
                "\n" +
                "5: Mario Party (55.000 CLP)" +
                "\n" +
                "6: God of War Ragnarok - PS5 (65.000 CLP)" +
                "\n" +
                "7: Halo Infinite - XBOX (50.000 CLP)" +
                "\n" +
                "8: Switch Controller (90.000 CLP)" +
                "\n" +
                "9: Control Xbox (30.000 CLP)" +
                "\n" +
                "10: Elden Ring - PC (45.000 CLP)" +
                "\n" +
                "11: Elden Ring - PS5 (55.000 CLP)" +
                "\n" +
                "12: Catan - El Juego (25.000 CLP)" +
                "\n" +
                "SALIR: ESC"
        );
        switch (idProducto) {
            case "1":
                productoSelec = p1;
                break;
            case "2":
                productoSelec = p2;
                break;
            case "3":
                productoSelec = p3;
                break;
            case "4":
                productoSelec = p4;
                break;
            case "5":
                productoSelec = p5;
                break;
            case "6":
                productoSelec = p6;
                break;
            case "7":
                productoSelec = p7;
                break;
            case "8":
                productoSelec = p8;
                break;
            case "9":
                productoSelec = p9;
                break;
            case "10":
                productoSelec = p10;
                break;
            case "11":
                productoSelec = p11;
                break;
            case "12":
                productoSelec = p12;
                break;
            case "ESC":
                SALIR = true;
                break;
            default:
                break;
        }
        if (SALIR === true) {
            break;
        }
    }
    if (SALIR === true) {
        break;
    }
    pedirStock(productoSelec);
    while (SALIR === false) {
        deseaSeguir = prompt(
            "¿Desea seguir comprando?" + "\n" + "Si" + "\n" + "No"
        );
        if (deseaSeguir.toUpperCase() === "SI") {
            break;
        } else if (deseaSeguir.toUpperCase() === "NO") {
            SALIR = true;
            break;
        }
    }
}
alert("Gracias por visitarnos!" + "\n" + "Esperamos verte de nuevo " + nombre);

function pedirStock(productoSelec) {
    let cantidad = Number(
        prompt(
            "Cuantas " +
                productoSelec.nombre +
                " deseas llevar" +
                "\n" +
                "Stock: " +
                productoSelec.stock
        )
    );
    let descuento1 = "DESCUENTO";
    let total = Number(cantidad * productoSelec.valor);
    let pedirDescuento = prompt(
        "El total de tu compra es de " +
            total +
            "\n" +
            "Si tienes algun cupon de descuento ingresalo a continuación"
    );
    if (pedirDescuento == descuento1) {
        total = total - 10000;
        alert("Felicidades! tu descuento de 10000 CLP ha sido activado");
        if (cantidad > productoSelec.stock) {
            cantidad = prompt("Ingrese un stock valido");
            alert(
                "Haz agregado " +
                    cantidad +
                    " " +
                    productoSelec.nombre +
                    "\n" +
                    "Precio Total: " +
                    total +
                    " (Descuento de 10000 CLP ya incluido)"
            );
        } else {
            alert(
                "Haz agregado " +
                    cantidad +
                    " " +
                    productoSelec.nombre +
                    "\n" +
                    "Precio Total: " +
                    total +
                    " (Descuento de 10000 CLP ya incluido)"
            );
        }
    } else if (pedirDescuento != descuento1) {
        if (cantidad > productoSelec.stock) {
            cantidad = prompt("Ingrese un stock valido");
            alert(
                "Haz agregado " +
                    cantidad +
                    " " +
                    productoSelec.nombre +
                    "\n" +
                    "Precio Total: " +
                    total
            );
        } else {
            alert(
                "Haz agregado " +
                    cantidad +
                    " " +
                    productoSelec.nombre +
                    "\n" +
                    "Precio Total: " +
                    total
            );
        }
    }
}

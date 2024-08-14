function reverseString(texto) {
    let textoEnReversa = texto.split("").reverse().join("");
    console.log(textoEnReversa);
}

let text = prompt("Ingresa un texto: ");
reverseString(text);
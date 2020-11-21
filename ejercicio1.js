//Sumar 2 valores con funciones.
const iva = 0.19
function suma() {
    return 2 + 2
}
function sumaConParametros(num1, num2) {
    return (num1 + num2) 
}
function sumaConParametrosYVariablesExternas(num1, num2) {
    return (num1 + num2) * iva
}
function sumaConParametrosYVariablesExternasEInternas(num1, num2) {
    const descuento = 0.1
    let resultado = ((num1 + num2) * iva) * descuento
    return resultado
}

let suma1 = suma()
let suma2 = sumaConParametrosYVariablesExternas(15000, 20000)
let suma3 = sumaConParametrosYVariablesExternasEInternas(20000, 40000)
console.log('Funcion sin parametro: ', suma1)
console.log('sumaConParametrosYVariablesExternas: ', suma2)
console.log('sumaConParametrosYVariablesExternasEInternas: ', suma3)
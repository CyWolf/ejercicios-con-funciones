//Ingresar 3 productos, mostrar resultado 
//subtotal, iva y total
//Tarea

//Declaramos valor de iva
const tax = 0.19

//Funcion que suma tres valores que se le asigna por parametros
function subTotal (harina, cafe, pasta) {
    let add = harina + cafe + pasta
    return add
}
//Funcion que calcula el iva y recibe un subtotal como parametro
function iva (subtotal) {
    let result2 =  subtotal * tax
    return result2
}
//Funcion que calcula el total recibiendo como paramettos subtotal e iva
function total (subtotal, iva) {
    let total = subtotal + iva
    return total
}

//Llama la funcion y guarda si retorno en la variable declarada
let result1 = subTotal(2000, 5000, 1500)
//Llama la funcion, toma el valor de la variable result1 y lo asigna a la funcion.  
//Tambien guarda su retorno en la variable declarada
let result2 = iva(result1)
//Llama la funcion, toma el valor de la variable result1 y result2 lo asigna a la funcion.  
//Tambien guarda su retorno en la variable declarada
let result3 = total(result1, result2)
//Imprime los resultados de las variables
console.log('SubTotal: ', result1)
console.log('Iva: ', result2)
console.log('Total: ', result3)

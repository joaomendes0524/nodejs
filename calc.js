let somar_v1 = function somar_v1(){
    let n1 = 10;
    let n2 = 5;
    let resultado;
    resultado = n1 + n2;
    console.log('RESULTADO DA SOMA '+ resultado);
}

//somar_v1();

let somar_v2 = function somar_v2(n1, n2){
    let resultado;
    resultado = n1 + n2;
    console.log('RESULTADO DA SOMA '+ resultado);
}
//somar_v2(50, 5);

let somar_v3 = function somar_v3(n1, n2){
    return n1 + n2
}
//console.log('RESULTADO DA SOMA '+ somar_v3(5, 9))

module.exports = (somar_v1, somar_v2, somar_v3);
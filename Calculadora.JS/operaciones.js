let suma = (num1, num2) =>{ console.log("Resultado: \n", num1+num2);}

let resta = (num1, num2) =>{ console.log("Resultado: \n", num1 - num2); }
let division = (num1, num2) =>
{
    if(num2 != 0)
    {
    
        console.log("Resultado: \n", num1 / num2);
    }
    else
    {
        console.log("ERROR. No se puede dividir por 0. \n");
    }
}
let multiplicacion = (num1, num2) => { console.log("Resultado: \n", num1 * num2); }

module.exports = {suma, resta, division, multiplicacion};

const{preguntar, cerrar} = require('./io.js');
const{suma, resta, division, multiplicacion} = require('./operaciones.js');

async function main()
{
    let op, flag, num1, num2, operador;
    op = 0;
    flag = 0;
    operador = "";
    num1 = 0, num2 = 0;
    do
    {
        console.log("0.Para salir del menu.\n");
        console.log("1. Para realizar una operacion (suma, resta, division, multiplicacion).\n");
        
        op = parseInt(await preguntar("Ingrese la opcion:"),10);
            while(Number.isNaN(op) || op<0 || op>1)
            {
                console.log("ERROR. Debe ingresar un numero o una opcion. \n");
                op = parseInt(await preguntar("Ingrese la opcion:"),10);
            }
        
        switch(op)
        {
            case 1:

                operador = await preguntar("Ingrese el operador de la operacion que desea realizar (+, -, /, *): \n");
                num1 = parseFloat(await preguntar("Ingrese el primer numero: \n"),10);
                num2 = parseFloat(await preguntar("Ingrese el segundo numero: \n"),10);

                    while(Number.isNaN(num1) || Number.isNaN(num2))
                    {
                        console.log("ERROR. Numero invalido, vuelva a intentarlo: \n");
                        num1 = parseFloat(await preguntar("Ingrese el primer numero: \n"),10);
                        num2 = parseFloat(await preguntar("Ingrese el segundo numero: \n"),10);

                    }
                
                switch(operador)
                {
                    case "+":
                        suma(num1, num2);
                    break;
                    case "-":
                        resta(num1, num2);
                    break;
                    case "*":
                        multiplicacion(num1, num2);
                    break;
                    case "/":
                        division(num1, num2);
                    break;
                }
        }
        
    
    
    }while(op!=0);

cerrar();
}

main();

const{preguntar, cerrar} = require('./io.js');


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
        console.log("1.\n");
        
        op = parseInt(await preguntar("Ingrese la opcion:"),10);
            while(Number.isNaN(op) || op<0 || op>1)
            {
                console.log("ERROR. Debe ingresar un numero o una opcion. \n");
                op = parseInt(await preguntar("Ingrese la opcion:"),10);
            }
        
        switch(op)
        {
            case 1:

            
            break;
        }
    
        
    
    
    }while(op!=0);

cerrar();
}

main();
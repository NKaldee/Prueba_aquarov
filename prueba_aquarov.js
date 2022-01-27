//Resolución Nicolás Calderón Silva
function directorio_estandar(directorio){
    let regex =/[.*]/;
    let result=directorio.split(regex);
    return `/${result[0]}`;
}

function esPosible(arrayEnteros){
    if(arrayEnteros[0]>=arrayEnteros.length-1){//Si el numero del primer indice es mayor o igual al largo del array: true
        return true;
    }else if(arrayEnteros[0]==0){//Si el primer elemento es 0: false
        return false;
    }
    else{//Caso en que el alcance del indice 0 se encuentra con valores 0, pero alcanzan un numero más adelante.
        let arrayAux=arrayEnteros.slice(0,arrayEnteros[0])
        while(arrayAux.includes(0) && arrayAux[1]==0){
            arrayAux.splice(1,1);
        }
        arrayEnteros=arrayAux.concat(arrayEnteros.slice(arrayAux[0],arrayEnteros.length));
        arrayEnteros.shift();
        return esPosible(arrayEnteros);
    }

}


// PRUEBAS DE CODIGO, LAS DEJE COMENTADAS EN CASO DE ENCONTRAR CASOS EXTREMOS NO CONTEMPLADOS.

/*const solucion_1=directorio_estandar("usr/bin/code/.././scripts/../");
console.log(solucion_1);

const solucion_2 = esPosible([1, 3, 1, 2, 0, 1]);
console.log(solucion_2);

const solucion_3 = esPosible([0, 0, 3, 0, 0]);
console.log(solucion_3);

const solucion_4 = esPosible([0]);
console.log(solucion_4);

const solucion_5 = esPosible([0, 0, 3, 0, 0]);
console.log(solucion_5);

const solucion_6 = esPosible([1,0,0,4,0,0]);
console.log(solucion_6);

const solucion_7 = esPosible([0]);
console.log(solucion_7);

const solucion_8 = esPosible([1, 2, 1, 0, 0]);
console.log(solucion_8);

const solucion_9 = esPosible([1, 3,0, 0, 4, 0, 1]);
console.log(solucion_9);*/
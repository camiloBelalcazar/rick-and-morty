   //funcion que retorna numero aleatorio entre 1 y 126
export const getRandomDimension = () => {
    //0 =>0.99999999999 === 0 =>125.999999999 === 0 =>125 === 1 => 126
    return Math.floor (Math.random() * 126) + 1;
 
}


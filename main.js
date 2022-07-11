
let turno = 0;
let jugador1 = '';
let jugador2 = '';
const tablero = [];


const btnPulsado = (e, pos) =>{
    turno++;
    const btn = e.target;
    const color = turno % 2 ? 'pink' : 'grey';
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    if(Ganar())alert('Felicidades, has ganado ' + color === "pink" ? jugardor1 : jugador2);
}



const Ganar = () =>{
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablero[2] == tablero[4] && tablero[0] == tablero[6] && tablero[2]){
        return true;
    }
       return false;
}



document.querySelectorAll('button').forEach((obj,i) => obj.addEventListener('click',(e)=> btnPulsado(e,i)));

function captura(){
    const form = document.getElementsByTagName("form")[0];
    const inputs = form.getElementsByTagName("input");

    Array.from(inputs).forEach((input, index) => {
        console.log("Input", input, "and index", index);

        jugador[index] = input.value; // check line 3 and 4

        alert(`Preparados: ${jugador1} y ${jugador2} -> ${jugador1} Serás el primero en jugar con el color rosa`);
    });
}

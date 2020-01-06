var jugador=-1;
var gameStillOn=true;
var a1,a2,a3,b1,b2,b3,c1,c2,c3;
var casilleros = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
var casillerosid = ["a","b","c"]
var movimientos = 0;
var uno = 0;
var dos = 0;
var saver=[];

// cambiar por array
// controlar que no se reemplacen los casiLLeros ocupados
// resetear tablero
// opcional: marcador de puntaje

function playerSwitch () {
    jugador=jugador*(-1);
    saveGame();
    saveScore();
}

function winner (pw){
    blink();
    
    gameStillOn=false;
    document.getElementById("info").innerHTML="El jugador "+pw+" ha ganado.";
    var winner = document.getElementById("winAudio");
    winner.volume = 0.2;
    winner.play();
    casilleros = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    document.getElementsByTagName("td").innerHTML=" ";

    if(pw == 1){
        uno = uno + 1;
        document.getElementById("p1").innerHTML="Jugador Uno <br><b>"+uno+"</b>";
    }else{
        dos = dos + 1;
        document.getElementById("p2").innerHTML="Jugador Dos <br><b>"+dos+"</b>";
    };
}

function empate (){
    document.getElementById("info").innerHTML="¡Empate!";
    casilleros = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    gameStillOn = false;
}

function gameEnder () {
    if ( casilleros[0][0]+casilleros[1][0]+casilleros[2][0] == 3 || casilleros[0][1]+casilleros[1][1]+casilleros[2][1]==3 || casilleros[0][2]+casilleros[1][2]+casilleros[2][2]==3 || casilleros[0][0]+casilleros[0][1]+casilleros[0][2]==3 || casilleros[1][0]+casilleros[1][1]+casilleros[1][2]==3 || casilleros[2][0]+casilleros[2][1]+casilleros[2][2]==3 || casilleros[0][0]+casilleros[1][1]+casilleros[2][2]==3 || casilleros[2][0]+casilleros[1][1]+casilleros[0][2]==3) {
        winner(1);
    }

    if ( casilleros[0][0]+casilleros[1][0]+casilleros[2][0] == -3 || casilleros[0][1]+casilleros[1][1]+casilleros[2][1]== -3 || casilleros[0][2]+casilleros[1][2]+casilleros[2][2]== -3 || casilleros[0][0]+casilleros[0][1]+casilleros[0][2]== -3 || casilleros[1][0]+casilleros[1][1]+casilleros[1][2]== -3 || casilleros[2][0]+casilleros[2][1]+casilleros[2][2]== -3 || casilleros[0][0]+casilleros[1][1]+casilleros[2][2]== -3 || casilleros[2][0]+casilleros[1][1]+casilleros[0][2]== -3) {
        winner(2);
    }

    if(casilleros[0][0] && casilleros[1][0] && casilleros[2][0] && casilleros[0][1] && casilleros[1][1] && casilleros[2][1] && casilleros[0][2] && casilleros[1][2] && casilleros[2][2] !==0){
          empate();
    }
}

function blink (){
    if(casilleros[0][0]+casilleros[1][0]+casilleros[2][0] == 3 || casilleros[0][0]+casilleros[1][0]+casilleros[2][0] == -3){
        document.getElementById("A0").setAttribute("class", "combinacionGanadora");
        document.getElementById("B0").setAttribute("class", "combinacionGanadora");
        document.getElementById("C0").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
    if(casilleros[0][1]+casilleros[1][1]+casilleros[2][1] == 3 || casilleros[0][1]+casilleros[1][1]+casilleros[2][1] == -3){
        document.getElementById("A1").setAttribute("class", "combinacionGanadora");
        document.getElementById("B1").setAttribute("class", "combinacionGanadora");
        document.getElementById("C1").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
    if(casilleros[0][2]+casilleros[1][2]+casilleros[2][2] == 3 || casilleros[0][2]+casilleros[1][2]+casilleros[2][2] == -3){
        document.getElementById("A2").setAttribute("class", "combinacionGanadora");
        document.getElementById("B2").setAttribute("class", "combinacionGanadora");
        document.getElementById("C2").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
    if(casilleros[0][0]+casilleros[0][1]+casilleros[0][2] == 3 || casilleros[0][0]+casilleros[0][1]+casilleros[0][2] == -3){
        document.getElementById("A0").setAttribute("class", "combinacionGanadora");
        document.getElementById("A1").setAttribute("class", "combinacionGanadora");
        document.getElementById("A2").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
    if(casilleros[1][0]+casilleros[1][1]+casilleros[1][2] == 3 || casilleros[1][0]+casilleros[1][1]+casilleros[1][2] == -3){
        document.getElementById("B0").setAttribute("class", "combinacionGanadora");
        document.getElementById("B1").setAttribute("class", "combinacionGanadora");
        document.getElementById("B2").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
    if(casilleros[2][0]+casilleros[2][1]+casilleros[2][2] == 3 || casilleros[2][0]+casilleros[2][1]+casilleros[2][2] == -3){
        document.getElementById("C0").setAttribute("class", "combinacionGanadora");
        document.getElementById("C1").setAttribute("class", "combinacionGanadora");
        document.getElementById("C2").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
    if(casilleros[0][0]+casilleros[1][1]+casilleros[2][2] == 3 || casilleros[0][0]+casilleros[1][1]+casilleros[2][2] == -3){
        document.getElementById("A0").setAttribute("class", "combinacionGanadora");
        document.getElementById("B1").setAttribute("class", "combinacionGanadora");
        document.getElementById("C2").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
    if(casilleros[2][0]+casilleros[1][1]+casilleros[0][2] == 3 || casilleros[2][0]+casilleros[1][1]+casilleros[0][2] == -3){
        document.getElementById("A2").setAttribute("class", "combinacionGanadora");
        document.getElementById("B1").setAttribute("class", "combinacionGanadora");
        document.getElementById("C0").setAttribute("class", "combinacionGanadora");
        console.log("gan� una vez")
    };
}

//traduce un id a su posicion en la matriz
function findPosition (id){ 
    let letter=id.substr(0,1); //guardo la letra del id
    let translatedLetter=letter.charCodeAt(0); //y la transformo en número
    translatedLetter=translatedLetter-65; //le resto 65 (motivo explicado abajo en findId())
    let nro=parseInt(id.substr(1,1)); //destransformo el número del id, que era un string
    let array=[translatedLetter,nro]; //guardo ambos números en un array de 2 posiciones. si el id que pase fuera "A0", el array va a verse así: array=[0,0].

    return array //y devuelvo el array
}

//traduce una posicion (ejemplo [0][2]) a un id (en caso de [0][2] seria "A2")
function findId(posobject) { // le paso como parametro un objeto con las 2 posiciones en el array como propiedades row y col (posobject.row devuelve la primera coordenada de la matriz)
    let letter=posobject.row+65; // 65 es la letra "A" en unicode, por lo tanto le sumo 65 para que recorra a partir de la A
    letter=String.fromCharCode(letter);//transformo el numero en letra (65=>"A",66=>"B",etc)
    let id=letter+posobject.col;// sumo la letra al numero, que se transforma en string porque letter ya es un string

    return id; // y lo devuelvo
}

function createTable () { //crea la tabla desde javascript
    let tabla=document.getElementById("tabla");
    tabla.innerHTML=null;
    for (let i=0;i<3;i++) {
        let row=tabla.insertRow(i);
        for (let j=0; j<3; j++) {
            let cell=row.insertCell(j);
            cell.setAttribute("onclick","drawer(id);gameEnder()");
            cell.setAttribute("id",findId({row:i,col:j}));
        }
    }
}

function drawer (id) {
    let clickedElement=document.getElementById(id);
    if (gameStillOn==true) {
            if (jugador==1) {
                let idposition=findPosition(id);
                casilleros[idposition[0]][idposition[1]]=jugador;
                saveGame();
                clickedElement.innerHTML="O";
                clickedElement.setAttribute("class", "circulo");
                clickedElement.setAttribute("onclick","")
                var audio = document.getElementById("firstAudio");
                audio.volume = 0.3;
                audio.play();
          //      casilleroActual=1;
                movimientos = movimientos+1;
                playerSwitch();
            } else{
                let idposition=findPosition(id);
                casilleros[idposition[0]][idposition[1]]=jugador;
                saveGame();
                clickedElement.innerHTML="X";
                clickedElement.setAttribute("class", "cruz");
                clickedElement.setAttribute("onclick","")
                var anotherAudio = document.getElementById("secondAudio");
                anotherAudio.volume = 0.1;
                anotherAudio.play();
          //      casilleroActual=-1;
                movimientos = movimientos+1;
                playerSwitch();
            };
            gameEnder();
            return jugador;
        }  
    } 


function reset(){
    saver=[];
    casilleros = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    createTable();
    gameStillOn= true;
    document.getElementById("info").innerHTML="";
    saveGame();
    jugador=-1;
}


function saveGame() {
    let gameState=JSON.stringify(casilleros);
    localStorage.setItem("tablero",gameState);
}

function saveScore() {
    let scoreArray=[uno,dos];
    localStorage.setItem("puntaje",JSON.stringify(scoreArray));
    console.log(JSON.stringify(scoreArray));
}

function loadGame() {
    casilleros=JSON.parse(localStorage.getItem("tablero"));
    let scoreArray=localStorage.getItem("puntaje");
    console.log(scoreArray);
    scoreArray=JSON.parse(scoreArray);
    console.log(scoreArray);
    uno=scoreArray[0];
    dos=scoreArray[1];
    document.getElementById("p2").innerHTML="Jugador Dos <br><b>"+dos+"</b>";
    document.getElementById("p1").innerHTML="Jugador Uno <br><b>"+uno+"</b>";
    createTable();
    loadPrevPosition();
}

function loadPrevPosition() {
    for (let i=0; i<3; i++) {
        for (let j=0;j<3;j++) {
            if (casilleros[i][j]==-1) {
                let Xholder=document.getElementById(findId({row:i,col:j}));
                Xholder.innerHTML="X";
                Xholder.setAttribute("class","cruz");
                Xholder.setAttribute("onclick","");
            }
            if (casilleros[i][j]==1) {
                let Oholder=document.getElementById(findId({row:i,col:j}));
                Oholder.innerHTML="O";
                Oholder.setAttribute("class","circulo");
                Oholder.setAttribute("onclick","");
            }
        }
    }
    gameEnder();
}

window.onload = loadGame();

// dentro de funci�n reset y al cerrar?
// JSONstringify
// Cuando termina el juego lo borro
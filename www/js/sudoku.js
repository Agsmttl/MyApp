
//Hacer Tablero
var HTMLboard = document.getElementById("sudokuBoard");
var selectedTile;
var currentRow;
var currentCol;
var teclado = document.getElementById("tecladoJS");

for(i=0; i<9; i++){
    let row = document.createElement("tr");
    for(j=0; j<9; j++){
        let col = document.createElement("td");
        col.setAttribute("id",i+""+j);
        //col.appendChild(select);
        row.insertAdjacentElement("beforeend",col);
    }
    HTMLboard.insertAdjacentElement("beforeend",row);
}



//onchange='createTable()'

//generateMatrix(){}
//por ahora voy a usar un sudoku armado

var matrixBoard =
[
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];


function printWholeBoard(){
    for(i=0; i<9; i++){
        for(j=0; j<9; j++){
            let square = document.getElementById(i+""+j);
            if (matrixBoard[i][j] !== 0) {
                square.innerHTML = matrixBoard[i][j];
                square.value = matrixBoard[i][j];
                square.setAttribute("class","numFijo");
            }
            else{
                square.setAttribute("onclick","selectTile("+i+","+j+")");
            }
        }
    }
}

function selectTile(row,col){
    selectedTile = document.getElementById(row+""+col);
    //selectedTile.classList.add("activeBox");

    currentRow = row;
    currentCol = col;
};

function selectNumber(num){
    selectedTile.value = num;

    if (selectedTile.value !== 0) {
        selectedTile.innerHTML = num;
    }else{
        selectedTile.innerHTML = "";
    }

    matrixBoard[currentRow][currentCol] = num;

}

function findMatches(arrayPosition){
    if (currentrow) {
        for(let i=0; 1<9; i++){
            
        }
    }
}


printWholeBoard();

//function changeSquare(){}

//count lives
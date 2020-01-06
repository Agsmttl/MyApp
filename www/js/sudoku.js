
//Hacer Tablero
var HTMLboard = document.getElementById("sudokuBoard");

for(i=0; i<9; i++){
    let row = document.createElement("tr");
    for(j=0; j<9; j++){
        let col = document.createElement("td");
        //var select = document.createElement('<select name="socket" id="'+i+''+j+'">');
        /*var select = document.createElement("select");
        select.setAttribute("name", "");
        select.setAttribute("id", i+""+j);
        for(k=0; k<=9; k++){
            //var option = document.createElement('<option value="'+i+'">1</option>');
            var option = document.createElement("option");
            option.setAttribute("value", k);
            option.innerText = k;
            select.insertAdjacentElement("beforeend", option)
        }*/
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
    for(i=0; 1<9; i++){
        for(j=0; j<9; j++){
            var square = document.getElementById(i+""+j);
            if (matrixBoard[i][j] !== 0) {
                square.innerHTML= matrixBoard[i][j];
            }
        }
    }
}


printWholeBoard();

//function changeSquare(){}

//count lives
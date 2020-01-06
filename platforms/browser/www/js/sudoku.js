var HTMLboard = document.getElementById("sudokuBoard");

for(i=0; i<9; i++){
    var row = document.createElement("tr");
    for(j=0; j<9; j++){
        var col = document.createElement("td");
        col.setAttribute("id",i+""+j);
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

//printBoard(){}
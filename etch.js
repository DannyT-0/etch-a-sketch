const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const squares = document.createElement("div");
    squares.className = "grid";
    container.appendChild(squares);
    gridManipulation();


}


function createGrid() {
    container.innerHTML = "";
    let gridPrompt = prompt("How many squares would you your grid to be");
    while (gridPrompt > 100) {
        gridPrompt = prompt("Please enter a number less than 100");
    }
    let gridSize = gridPrompt * gridPrompt;
    container.style.gridTemplateColumns = `repeat(${gridPrompt}, 1fr)`;
    for (let i = 0; i < gridSize; i++) {
        const newSquares = document.createElement("div");
        newSquares.className = "grid";
        container.appendChild(newSquares);
        gridManipulation();

    }
}


const gridCreate = document.querySelector("#createGrid");
gridCreate.addEventListener("click", createGrid);


function gridManipulation() {
    const gridSquares = document.querySelectorAll(".grid");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
        })
    })

    const btnReset = document.querySelector("#resetbutton");
    btnReset.addEventListener("click", () => {
        gridSquares.forEach((square) => {
            square.style.backgroundColor = "wheat";

        })
    });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
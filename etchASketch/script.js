let board = document.querySelector(".board");;
const input = document.getElementById('item');
const btn = document.querySelector("button");
const error = document.querySelector(".error");

function init() {
    let gridCount = 1;

    while (gridCount <= 16 * 16) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        board.appendChild(newDiv);
        console.log('added')
        gridCount++;
    }
}


function update() {

    let grid = document.querySelectorAll(".grid");
    board = document.querySelector(".board");

    let items = board.children.length;
    let gridSize = Math.ceil(Math.sqrt(items));

    let darken = document.getElementById('darken').checked;

    Array.from(board.children).forEach(item => {
        item.style.flex = `1 1 calc(100%/ ${gridSize}`;
    });

    grid.forEach((item) => {
        let maxColour = 255;
        item.addEventListener("mouseover", () => {
            if (darken){
                maxColour *= 0.8;
                console.log(maxColour);
            }
            item.style.backgroundColor = randomColor(maxColour);
        });
    });
}
init();
update();


function randomColor(maxColour) {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    const r = randomBetween(0, maxColour);
    const g = randomBetween(0, maxColour);
    const b = randomBetween(0, maxColour);

    return `rgb(${r},${g},${b})`; // Collect all to a css color string
}


btn.addEventListener("click", updateGrid);

function updateGrid() {
    let gridCount = 1;
    if (isNaN(input.value) || input.value > 100 || input.value === ''){
        error.innerText = "Error, size has to be a number and less than 100";
        error.style.color = 'red';
        return console.log("error", typeof input.value)
    }
    while (board.hasChildNodes()) {
        error.innerText = '';
        board.removeChild(board.firstChild);
    }
    while (gridCount <= (input.value * input.value)) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        board.appendChild(newDiv);
        console.log('added')
        gridCount++;
    }
    update();
    
}

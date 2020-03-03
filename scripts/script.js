const app = {};

app.form = document.querySelector('form');

app.numberOfRows = document.querySelector('#rows');

app.tableLimit = document.querySelector('#highest-number');

app.button = document.querySelector("button[type='submit']");

app.createTwoDimensionalArray = (numberOfRows, tableLimit) => {
    let multipliedNumbersArrays = [];
    
    for (let i = 0; i < numberOfRows; i++) {
        multipliedNumbersArrays[i] = [];

        for (let j = 0; j < tableLimit; j++) {
            multipliedNumbersArrays[i][j] = `<div class="cell">${[i + 1] * [j + 1]}</div>`;            
        }
        
    }

    app.displayTable(multipliedNumbersArrays);
}

app.displayTable = (array) => {
    const multiplicationTable = document.querySelector('#multiplication-table');
    
    const row = array.map(element => {
        let formattedElement = element.join('');
        formattedElement = `<div class="row">${formattedElement}</div>`;
        
        return formattedElement;
    })
    
    const formattedRow = row.join('');

    if (multiplicationTable.childElementCount != 0) {
        multiplicationTable.innerHTML = '';
    }

    multiplicationTable.insertAdjacentHTML("beforeend", formattedRow);
}

app.multiplicationTableInit = () => {
    app.form.addEventListener('submit', event => {
        const numberOfRows = app.numberOfRows.value;
        const tableLimit = app.tableLimit.value;
        event.preventDefault();

        app.createTwoDimensionalArray(numberOfRows, tableLimit);
    })
}

if (document.readyState === 'complete') {
	app.multiplicationTableInit();
} else {
	document.addEventListener('DOMContentLoaded', app.multiplicationTableInit);
};


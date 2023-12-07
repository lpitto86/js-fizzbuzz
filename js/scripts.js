const rowContainer = document.getElementById('rowContainer');

for (let i = 1; i <= 7; i++) {
    const column = document.createElement('div');
    column.className = 'column';

    for (let j = i; j <= 100; j += 7) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        // Verifica se è un multiplo
        if (j % 3 === 0 && j % 5 === 0) {
            cell.textContent = 'FizzBuzz';
            cell.style.backgroundColor = '#e74c3c';

            // di 3
        } else if (j % 3 === 0) {
            cell.textContent = 'Fizz';
            cell.style.backgroundColor = '#2ecc71';

            // di 5
        } else if (j % 5 === 0) {
            cell.textContent = 'Buzz';
            cell.style.backgroundColor = '#f1c40f';
        } else {
            cell.textContent = j;
            cell.style.backgroundColor = '#3498db';
        }

        // Aggiungi la cella alla colonna
        column.appendChild(cell);
    }

    rowContainer.appendChild(column);
}
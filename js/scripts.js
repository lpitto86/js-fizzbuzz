const rowContainer = document.getElementById('rowContainer');

for (let i = 1; i <= 7; i++) {
    const column = document.createElement('div');
    column.className = 'column';

    for (let j = i; j <= 100; j += 7) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = j;
        column.appendChild(cell);
    }

    rowContainer.appendChild(column);
}
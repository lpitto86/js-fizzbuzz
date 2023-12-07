const rowContainer = document.getElementById('rowContainer');

        for (let i = 1; i <= 7; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            // Imposta il testo della cella
            cell.textContent = i;

            // Colora le caselle
            if (i % 2 === 0) {
                cell.style.backgroundColor = '#2ecc71'; // Verde
            } else if (i % 3 === 0) {
                cell.style.backgroundColor = '#e74c3c'; // Rosso
            } else if (i % 4 === 0) {
                cell.style.backgroundColor = '#f39c12'; // Arancione
            } else if (i % 5 === 0) {
                cell.style.backgroundColor = '#9b59b6'; // Viola
            } else if (i % 6 === 0) {
                cell.style.backgroundColor = '#1abc9c'; // Verde acqua
            } else if (i % 7 === 0) {
                cell.style.backgroundColor = '#34495e'; // Grigio bluastro
            }

            // Aggiungi la cella al contenitore della riga
            rowContainer.appendChild(cell);
        }
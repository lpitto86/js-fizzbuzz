const rowContainer = document.getElementById('rowContainer');

        for (let i = 1; i <= 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            // Imposta il testo della cella
            cell.textContent = i;

            // Aggiungi la cella al contenitore della riga
            rowContainer.appendChild(cell);
        }
document.addEventListener('DOMContentLoaded', function () {
    let currentCellNumber = 1;
    let selectedColor = "#ff0000";

    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            const cellId = `cell-${currentCellNumber}`;
            const cell = document.getElementById(cellId);

            if (cell) {
                cell.textContent = currentCellNumber;

                if (currentCellNumber === 10) {
                    cell.addEventListener('mouseover', function () {
                        if (!cell.classList.contains('selected')) {
                            const randomColor = generateRandomColor();
                            cell.style.backgroundColor = randomColor;
                        }
                    });

                    cell.addEventListener('click', function () {
                        cell.classList.remove('selected');
                        cell.style.backgroundColor = selectedColor;
                    });

                    cell.addEventListener('dblclick', function () {
                        const cell12 = document.getElementById('cell-12');
                        cell.classList.remove('selected');
                        cell12.classList.remove('selected');

                        cell.style.backgroundColor = selectedColor;
                        cell12.style.backgroundColor = selectedColor;
                    });
                }

                currentCellNumber++;
            }
        }
    }

    function generateRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', function () {
        selectedColor = colorPicker.value;
    });
});

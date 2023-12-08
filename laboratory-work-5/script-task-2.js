document.addEventListener('DOMContentLoaded', function () {
    let currentCellNumber = 1;
    let selectedColor = "#ff0000"; // Початковий колір

    // Організуємо цикл для нумерації клітинок
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            const cellId = `cell-${currentCellNumber}`;
            const cell = document.getElementById(cellId);

            if (cell) {
                cell.textContent = currentCellNumber;

                // Додаємо обробник події "mouseover" для клітинки "cell-10"
                if (currentCellNumber === 10) {
                    cell.addEventListener('mouseover', function () {
                        if (!cell.classList.contains('selected')) {
                            const randomColor = generateRandomColor();
                            cell.style.backgroundColor = randomColor;
                        }
                    });

                    // Додаємо обробник події "click" для клітинки "cell-10"
                    cell.addEventListener('click', function () {
                        cell.classList.remove('selected');
                        cell.style.backgroundColor = selectedColor;
                    });
                }

                currentCellNumber++;
            }
        }
    }

    // Функція для генерації рандомного кольору
    function generateRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    // Оновлюємо вибраний колір при зміні вибору в палітрі
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', function () {
        selectedColor = colorPicker.value;
    });
});

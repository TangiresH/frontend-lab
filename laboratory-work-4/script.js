const myNameElement = document.getElementById('my-name');
const birthplaceElement = document.querySelector('#birthplace');


myNameElement.addEventListener('click', function() {
    changeColors(myNameElement);
});

birthplaceElement.addEventListener('click', function() {
    changeColors(birthplaceElement);
});


function changeColors(element) {
    const randomBgColor = getRandomColor();
    const randomTextColor = getRandomColor();

    element.style.backgroundColor = randomBgColor;
    element.style.color = randomTextColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
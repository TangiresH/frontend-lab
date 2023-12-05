const myNameElement = document.getElementById('my-name');
const birthplaceElement = document.querySelector('#birthplace');
const buttonsContainer = document.querySelector('.buttons-container');

myNameElement.addEventListener('click', function () {
    changeColors(myNameElement);
});

birthplaceElement.addEventListener('click', function () {
    changeColors(birthplaceElement);
});

buttonsContainer.addEventListener('click', function (event) {
    const targetButton = event.target;
    if (targetButton.tagName === 'BUTTON') {
        handleButtonClick(targetButton);
    }
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

function addPhotoButton() {
    const newPhoto = document.createElement('img');
    newPhoto.src = 'https://sofitel.accor.com/destinations/imagerie/florence-city-photo-1400x787-877d_1400x788.jpg';
    newPhoto.alt = 'photo';
    newPhoto.classList.add('photo-city');
    document.body.appendChild(newPhoto);
}

function handleButtonClick(button) {
    const photos = document.querySelectorAll('.photo-city');
    const lastPhoto = photos[photos.length - 1];

    switch (button.dataset.action) {
        case 'addPhoto':
            addPhotoButton();
            break;
        case 'enlargePhoto':
            modifyPhotoSize(lastPhoto, 1.2);
            break;
        case 'reducePhoto':
            modifyPhotoSize(lastPhoto, 0.8);
            break;
        case 'deletePhoto':
            deletePhotoButton(lastPhoto);
            break;
    }
}

function modifyPhotoSize(photo, factor) {
    if (photo) {
        const currentWidth = parseFloat(window.getComputedStyle(photo).width);
        const currentHeight = parseFloat(window.getComputedStyle(photo).height);
        photo.style.width = `${currentWidth * factor}px`;
        photo.style.height = `${currentHeight * factor}px`;
    }
}

function deletePhotoButton(photo) {
    if (photo) {
        photo.remove();
    }
}

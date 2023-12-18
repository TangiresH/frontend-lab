import React, { useState } from 'react';

function Image() {
    const [photoSize, setPhotoSize] = useState(450);

    const addPhoto = () => {
        const newPhoto = document.createElement('img');
        newPhoto.src = 'https://sofitel.accor.com/destinations/imagerie/florence-city-photo-1400x787-877d_1400x788.jpg';
        newPhoto.alt = 'photo';
        newPhoto.classList.add('photo-city');
        document.body.appendChild(newPhoto);
    };

    const modifyPhotoSize = (factor) => {
        const photos = document.querySelectorAll('.photo-city');
        const lastPhoto = photos[photos.length - 1];

        if (lastPhoto) {
            const currentWidth = parseFloat(window.getComputedStyle(lastPhoto).width);
            const currentHeight = parseFloat(window.getComputedStyle(lastPhoto).height);
            lastPhoto.style.width = `${currentWidth * factor}px`;
            lastPhoto.style.height = `${currentHeight * factor}px`;
        }
    };

    const handleButtonClick = (action) => {
        switch (action) {
            case 'addPhoto':
                addPhoto();
                break;
            case 'enlargePhoto':
                modifyPhotoSize(1.2);
                break;
            case 'reducePhoto':
                modifyPhotoSize(0.8);
                break;
            case 'deletePhoto':
                deletePhoto();
                break;
            default:
                break;
        }
    };

    const deletePhoto = () => {
        const photos = document.querySelectorAll('.photo-city');
        const lastPhoto = photos[photos.length - 1];

        if (lastPhoto) {
            lastPhoto.remove();
        }
    };

    return (
        <div>
            <a href="https://sofitel.accor.com/it/destinations/italy/luxury-firenze-city-guide.shtml" target="_blank">
                <img
                    src="https://sofitel.accor.com/destinations/imagerie/florence-city-photo-1400x787-877d_1400x788.jpg"
                    alt="photo"
                    className="photo-city"
                    style={{ height: `${photoSize}px` }}
                />
            </a>
            <div className="buttons-container">
                <button onClick={() => handleButtonClick('addPhoto')}>Додати</button>
                <button onClick={() => handleButtonClick('enlargePhoto')}>Збільшити</button>
                <button onClick={() => handleButtonClick('reducePhoto')}>Зменшити</button>
                <button onClick={() => handleButtonClick('deletePhoto')}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;

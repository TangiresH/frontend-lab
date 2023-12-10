const userContainer = document.getElementById('user-container');
const apiUrl = 'https://randomuser.me/api';
let users = [];



document.getElementById('downloadButton').addEventListener('click', fetchRandomUserInfo);



function fetchRandomUserInfo() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];
            const pictureUrl = user.picture.large;
            const cell = user.cell;
            const city = user.location.city;
            const email = user.email;
            const coordinates = `${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`;

            users.push({
                pictureUrl,
                cell,
                city,
                email,
                coordinates,
            });

            displayAllUsers();

            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        })
        .catch(error => {
            console.error('Error fetching random user info:', error);
        });
}

function displayAllUsers() {
    userContainer.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user-card';
        userDiv.innerHTML = `
      <img src="${user.pictureUrl}" id="picture" alt="User Picture">
      <p class="text cell">Cell: ${user.cell}</p>
      <p class="text city">City: ${user.city}</p>
      <p class="text email">Email: ${user.email}</p>
      <p class="text coordinates">Coordinates: ${user.coordinates}</p>
    `;
        userContainer.appendChild(userDiv);
    });
}
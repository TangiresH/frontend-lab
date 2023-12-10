const userContainer = document.getElementById('user-container');
let users = [];



document.getElementById('downloadButton').addEventListener('click', fetchRandomUserInfo);



function fetchRandomUserInfo() {
    const apiUrl = 'https://randomuser.me/api';

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
      <img src="${user.pictureUrl}" alt="User Picture">
      <p>Cell: ${user.cell}</p>
      <p>City: ${user.city}</p>
      <p>Email: ${user.email}</p>
      <p>Coordinates: ${user.coordinates}</p>
    `;
        userContainer.appendChild(userDiv);
    });
}
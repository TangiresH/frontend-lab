const fullNameInput = document.querySelector('.input-container.full-name');
const groupInput = document.querySelector('.input-container.group');
const phoneInput = document.querySelector('.input-container.phone');
const addressInput = document.querySelector('.input-container.address');
const emailInput = document.querySelector('.input-container.email');
const nameOutput = document.querySelector('.name-output');
const groupOutput = document.querySelector('.group-output');
const phoneOutput = document.querySelector('.phone-output');
const addressOutput = document.querySelector('.address-output');
const emailOutput = document.querySelector('.email-output');

document.addEventListener('DOMContentLoaded', function () {
    function showErrorMessage(input, message) {
        const errorContainer = input.nextElementSibling.nextElementSibling;
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
    }

    function hideErrorMessage(input) {
        const errorContainer = input.nextElementSibling.nextElementSibling;
        errorContainer.style.display = 'none';
    }

    function validateFullName(fullName) {
        const fullNameRegex = /^[А-ЯІЇЄЁа-яіїєё\s.'-]{2,15}\s[А-ЯІЇЄЁа-яіїєё]\.[А-ЯІЇЄЁа-яіїєё]\.$/;
        return fullNameRegex.test(fullName);
    }

    function validateGroup(group) {
        const groupRegex = /^[А-ЯІЇЄЁа-яіїєё]{2}-\d{2}$/;
        return groupRegex.test(group);
    }

    function validatePhone(phone) {
        const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(phone);
    }

    function validateAddress(address) {
        const addressRegex = /^м\.\s[А-ЯІЇЄЁа-яіїєё\s.'-]+$/;
        return addressRegex.test(address);
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    const submitButton = document.querySelector('.button-accepted');
    submitButton.addEventListener('click', function () {
        const fullName = fullNameInput.value;
        const group = groupInput.value;
        const phone = phoneInput.value;
        const address = addressInput.value;
        const email = emailInput.value;

        hideErrorMessage(fullNameInput);
        hideErrorMessage(groupInput);
        hideErrorMessage(phoneInput);
        hideErrorMessage(addressInput);
        hideErrorMessage(emailInput);

        if (!validateFullName(fullName)) {
            showErrorMessage(fullNameInput, 'Дані мають бути у форматі: Прізвище І.П.');
        } else if (!validateGroup(group)) {
            showErrorMessage(groupInput, 'Дані мають бути у форматі: ТТ-ЧЧ');
        } else if (!validatePhone(phone)) {
            showErrorMessage(phoneInput, 'Дані мають бути у форматі: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ');
        } else if (!validateAddress(address)) {
            showErrorMessage(addressInput, 'Дані мають бути у форматі: м. ЧЧЧЧЧЧ');
        } else if (!validateEmail(email)) {
            showErrorMessage(emailInput, 'Дані мають бути у форматі: тттттт@ттттт.com');
        } else {
            nameOutput.textContent = fullName;
            groupOutput.textContent = group;
            phoneOutput.textContent = phone;
            addressOutput.textContent = address;
            emailOutput.textContent = email;
        }
    });
});

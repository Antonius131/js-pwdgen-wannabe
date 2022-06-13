// user name request
const userName = prompt('Il tuo nome');

// user surname request
const userSurname = prompt('Il tuo cognome');

// user favourite color request
const userFavouriteColor = prompt('Il tuo colore preferito');

// generated password
const generatedPassword = userName + userSurname + userFavouriteColor + 22;

document.getElementById('user-generated-password').innerHTML = generatedPassword;
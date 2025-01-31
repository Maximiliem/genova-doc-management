// auth.js
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';
            loadBuildings(); // Cargar edificios al iniciar sesión
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
}

function logout() {
    firebase.auth().signOut()
        .then(() => {
            document.getElementById('login-container').style.display = 'block';
            document.getElementById('app-container').style.display = 'none';
        });
}
// app.js
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        loadBuildings();
    }
});
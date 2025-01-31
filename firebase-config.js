// firebase-config.js

// Configuración de Firebase (copia TUS datos aquí)
const firebaseConfig = {
    apiKey: "AIzaSyAy78QCeA5ro3oKDC3uJOsB6HNlhK3J85c",
    authDomain: "genova-doc-management.firebaseapp.com",
    projectId: "genova-doc-management",
    storageBucket: "genova-doc-management.appspot.com", // Corregí esto
    messagingSenderId: "587013193355",
    appId: "1:587013193355:web:507cf6f835b3e3f7e35e8e"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Obtener instancias de los servicios
  const db = firebase.firestore();
  const storage = firebase.storage();
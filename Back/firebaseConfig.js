// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Utilisez le service que vous souhaitez (ex: Firestore)

const firebaseConfig = {
    apiKey: "AIzaSyBMJeDdtPZ_k06iFWlDdVV94OxcqwgqU7A",
    authDomain: "add2-da2c2.firebaseapp.com",
    projectId: "add2-da2c2",
    storageBucket: "add2-da2c2.appspot.com",
    messagingSenderId: "957581741000",
    appId: "1:957581741000:web:80b4a4dee34524fe134efd"
};

// Initialisez Firebase avec la configuration
const firebaseApp = initializeApp(firebaseConfig);

// Accédez au service Firebase que vous souhaitez utiliser (ex: Firestore)
const firestore = getFirestore(firebaseApp);

export { firestore };


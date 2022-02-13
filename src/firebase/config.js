import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2x2TajQkKPSpPO-zO8nVULXFg_RC7S-4",
    authDomain: "cooking-site-fee72.firebaseapp.com",
    projectId: "cooking-site-fee72",
    storageBucket: "cooking-site-fee72.appspot.com",
    messagingSenderId: "672748839862",
    appId: "1:672748839862:web:7cd36afa10f76fc5245717",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services

const projectFirestore = firebase.firestore();

export { projectFirestore };

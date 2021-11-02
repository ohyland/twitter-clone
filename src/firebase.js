import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC6McTnXmOAh3MxLqlVsUJevt1reswzPVw",
	authDomain: "twitter-clone-73227.firebaseapp.com",
	projectId: "twitter-clone-73227",
	storageBucket: "twitter-clone-73227.appspot.com",
	messagingSenderId: "125438715565",
	appId: "1:125438715565:web:25fc3dbf5b36e403808824",
	measurementId: "G-YVMKL795SC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firebaseApp.firestore();

export default db;

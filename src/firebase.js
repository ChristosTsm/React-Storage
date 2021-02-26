import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAVWtQt5HQMKycVOcE48UX4Jd5DvgBpRpU",
	authDomain: "v-drive-3ab57.firebaseapp.com",
	projectId: "v-drive-3ab57",
	storageBucket: "v-drive-3ab57.appspot.com",
	messagingSenderId: "450869036091",
	appId: "1:450869036091:web:29fc4ded4b72fc0398c81e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, storage, db };

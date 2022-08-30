import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAutkH1Q9NKGXel9LbyT8uIKy1id0sMA9o",
    authDomain: "crwn-clothing-db-3574d.firebaseapp.com",
    projectId: "crwn-clothing-db-3574d",
    storageBucket: "crwn-clothing-db-3574d.appspot.com",
    messagingSenderId: "838615318045",
    appId: "1:838615318045:web:afd6ac195ca99d2284d0f4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Sign-In Provider:
const googleProvider = new GoogleAuthProvider(); //Google Provider

googleProvider.setCustomParameters({
    prompt: "select_account"
});

//Init google Auth:
export const auth = getAuth();

//Exporting the signIn data;
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // If user data not exists :
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }

    }

    //return userDocRef;
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

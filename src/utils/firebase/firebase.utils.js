import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // If user data not exists :
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }

    }

    return userDocRef;
};
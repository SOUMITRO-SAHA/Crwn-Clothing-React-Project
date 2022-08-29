import React, { useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth';
import {auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

function SignIn() {
  //User Log-In/ Sign-In Via Redirect.
  useEffect(() => {
    async function fetchData(){
      const response = await getRedirectResult(auth); //response is an Object.
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user); //Creating doc in the db from User data.
      }
    }
    fetchData();
  }, []);
  
  //User Log-In/ Sign-In Via Google Popup.
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); //Getting the user data.
    const userDocRef = await createUserDocumentFromAuth(user); //Creating doc in the db from User data.
  };

  return (
      <div>
          <h1>Sign In Page</h1>
          <button onClick={logGoogleUser}>Sign in with Google Popup</button>
          <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
          <SignUpForm />
    </div>
  )
}

export default SignIn
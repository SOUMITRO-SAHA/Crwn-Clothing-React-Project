import React, { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { SignUpContainer, ButtonsContainer } from "./sign-in.style.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  //User Log-In/ Sign-In Via Google Popup.
  const signInWithGoogle = async () => {
    await signInWithGooglePopup(); //Getting the user data.
  };

  //This function is only going to run when Submit Button is being pressed :
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //eslint-disable-next-line
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // Resetting the Form fields to empty :
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password.");
          break;
        case "auth/user-not-found":
          alert("Incorrect Email.");
          break;
        default:
          console.error(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sing In With your email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>

          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
}

export default SignInForm;

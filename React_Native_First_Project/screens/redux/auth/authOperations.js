// import { auth,db } from "../../../firebase/config";

import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/config";

export const authSignUpUser =
   ({ email, password, login }) =>
   async (dispatch, getState) => {
      try {
         await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
         console.log(error.message);
      }
   };

const authSignInUser = async (dispatch, getState) => {};

const authSignOutUser = async (dispatch, getState) => {};

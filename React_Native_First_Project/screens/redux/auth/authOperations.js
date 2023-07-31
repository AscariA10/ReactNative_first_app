import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/config";

import { authSlice } from "../auth/authReducer";

export const authSignUpUser =
   ({ email, password, login }) =>
   async (dispatch, getState) => {
      try {
         const response = await createUserWithEmailAndPassword(auth, email, password);

         const user = await auth.currentUser;
         await updateProfile(auth.currentUser, { displayName: login });
         const updatedUser = await auth.currentUser;

         console.log(updatedUser);

         dispatch(
            authSlice.actions.updateUserProfile({
               userId: updatedUser.uid,
               nickName: updatedUser.displayName,
            })
         );
      } catch (error) {
         console.log(error.message);
      }
   };

export const authSignInUser =
   ({ email, password }) =>
   async (dispatch, getState) => {
      try {
         const user = await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
         console.log(error.message);
      }
   };

const authSignOutUser = async (dispatch, getState) => {};

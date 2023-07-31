import { NavigationContainer } from "@react-navigation/native";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useRoute } from "../router";
import { store } from "../screens/redux/store";
import { authStateChanged } from "../screens/redux/auth/authOperations";

import { auth } from "../firebase/config";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Main = () => {
   const [user, setUser] = useState(null);

   const dispatch = useDispatch();
   const { stateChange } = useSelector(state => state.auth);

   console.log(stateChange);

   //    useEffect(() => {
   //       dispatch(authStateChanged());
   //    }, []);

   const routing = useRoute(stateChange);
   return <NavigationContainer>{routing}</NavigationContainer>;
};

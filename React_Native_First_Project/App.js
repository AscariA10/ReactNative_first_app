import { NavigationContainer } from "@react-navigation/native";

import React, { useEffect, useState } from "react";

import { Provider, useSelector } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useRoute } from "./router";
import { store } from "./screens/redux/store";

import { auth } from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Main } from "./components/Main";

export default function App() {
   const [fontsLoaded] = useFonts({
      "Roboto-Medium": require("./assets/Fonts/Roboto/Roboto-Medium.ttf"),
   });

   useEffect(() => {
      async function prepare() {
         await SplashScreen.preventAutoHideAsync();
      }
      prepare();
   }, []);

   if (!fontsLoaded) {
      return null;
   } else {
      SplashScreen.hideAsync();
   }

   return (
      <Provider store={store}>
         <Main />
      </Provider>
   );

   // return <NavigationContainer>{routing}</NavigationContainer>;
   // return (
   //    <PersistGate persistor={persistor}>
   //       <Provider store={store}>
   //          <NavigationContainer>{routing}</NavigationContainer>
   //       </Provider>
   //    </PersistGate>
   // );
}

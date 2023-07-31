import { NavigationContainer } from "@react-navigation/native";

import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useRoute } from "./router";
import { store } from "./screens/redux/store";

import { auth } from "./firebase/config";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
   const [user, setUser] = useState(null);
   const [fontsLoaded] = useFonts({
      "Roboto-Medium": require("./assets/Fonts/Roboto/Roboto-Medium.ttf"),
   });

   // const auth = getAuth();

   const authStateChanged = async (onChange = () => {}) => {
      onAuthStateChanged(user => {
         onChange(user);
         setUser(user);
         console.log(user.uid);
      });
   };

   const routing = useRoute(user);

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
         <NavigationContainer>{routing}</NavigationContainer>
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

import { NavigationContainer } from "@react-navigation/native";

import React, { useEffect } from "react";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useRoute } from "./router";
import { store, persistor } from "./screens/redux/store";

export default function App() {
   const [fontsLoaded] = useFonts({
      "Roboto-Medium": require("./assets/Fonts/Roboto/Roboto-Medium.ttf"),
   });

   const routing = useRoute(0);

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

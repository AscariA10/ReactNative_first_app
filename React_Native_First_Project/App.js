import React, { useState, useCallback, useEffect } from "react";

// import { Text } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import * as Font from "expo-font";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";

const AuthStack = createStackNavigator();

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
      <NavigationContainer>
         <AuthStack.Navigator>
            <AuthStack.Screen
               options={{
                  headerShown: false,
               }}
               name="RegisterScreen"
               component={RegisterScreen}
            />
            <AuthStack.Screen
               options={{
                  headerShown: false,
               }}
               name="LoginScreen"
               component={LoginScreen}
            />
         </AuthStack.Navigator>
      </NavigationContainer>
   );
}

// -------ADDING FONTS WITOUT SPLASH SCREEN ---------
// const [fontLoaded, setFontLoaded] = useState(false);

// useEffect(() => {
//   async function loadFont() {
//     await Font.loadAsync({
//       "Roboto-Medium": (require('./assets/Fonts/Roboto/Roboto-Medium.ttf')),
//     });

//     setFontLoaded(true);
//   }
//   loadFont();
// }, []);

// if (!fontLoaded) {
//   return <Text>Loading...</Text>;
// }

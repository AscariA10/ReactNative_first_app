import React, { useState, useCallback, useEffect } from "react";

// import { Text } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import * as Font from "expo-font";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";

import PostsScreen from "./screens/main/PostsScreen";
import CommentsScreen from "./screens/main/CommentsScreen";
import CreateScreen from "./screens/main/CreateScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = isAuth => {
   if (!isAuth) {
      return (
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
      );
   }
   return (
      <MainTab.Navigator>
         <MainTab.Screen name="Posts" component={PostsScreen} />
         <MainTab.Screen name="Comments" component={CommentsScreen} />
         <MainTab.Screen name="Create" component={CreateScreen} />
      </MainTab.Navigator>
   );
};

export default function App() {
   const [fontsLoaded] = useFonts({
      "Roboto-Medium": require("./assets/Fonts/Roboto/Roboto-Medium.ttf"),
   });

   const routing = useRoute(1);

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

   return <NavigationContainer>{routing}</NavigationContainer>;
}

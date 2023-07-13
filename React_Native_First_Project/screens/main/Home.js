import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import React from "react";
import { StyleSheet } from "react-native";

import PostsScreen from "./PostsScreen";
import CommentsScreen from "./CommentsScreen";
import CreateScreen from "./CreateScreen";

const MainTab = createBottomTabNavigator();

export default function Home({ navigation }) {
   return (
      <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
         <MainTab.Screen
            options={{
               tabBarIcon: ({ focused, size, color }) => (
                  <Feather name="grid" size={size} color={color} />
               ),
            }}
            name="Posts"
            component={PostsScreen}
         />
         <MainTab.Screen
            options={{
               activeTintColor: "#ffffff",
               tabBarIconStyle: { ...styles.addContainer },
               tabBarIcon: ({ focused, size, color }) => (
                  <Feather name="plus" size={size} color={"#fff"} />
               ),
            }}
            name="Comments"
            component={CommentsScreen}
         />
         <MainTab.Screen
            options={{
               tabBarIcon: ({ focused, size, color }) => (
                  <Feather name="user" size={size} color={color} />
               ),
            }}
            name="Create"
            component={CreateScreen}
         />
      </MainTab.Navigator>
   );
}

const styles = StyleSheet.create({
   addContainer: {
      textAlign: "center",
      marginTop: 9,
      minHeight: 40,
      width: 70,
      borderRadius: 20,
      backgroundColor: "#ff6c00",
   },
   addButton: {
      minHeight: 40,
      width: 70,
      textAlign: "center",
      padding: 6,
      borderRadius: 20,
      backgroundColor: "#ff6c00",
   },
});

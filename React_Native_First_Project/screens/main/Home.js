import { createBottomTabNavigator, HeaderBackButton } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import React from "react";
import { StyleSheet } from "react-native";

import PostsScreen from "./PostsScreen";
import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";

const MainTab = createBottomTabNavigator();

export default function Home({ navigation }) {
   return (
      <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
         <MainTab.Screen
            options={{
               tabBarIcon: ({ focused, size, color }) => (
                  <Feather name="grid" size={size} color={color} />
               ),
               headerRight: ({ focused, size, color }) => (
                  <Feather
                     onPress={() => navigation.navigate("LoginScreen")}
                     style={styles.logOut}
                     name="log-out"
                     size={24}
                     color="black"
                  />
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
               headerLeft: props => (
                  <Feather
                     onPress={() => navigation.navigate("Posts")}
                     style={styles.stepBack}
                     name="arrow-left"
                     size={24}
                     color="black"
                  />
               ),
            }}
            name="Create Post"
            component={CreatePostsScreen}
         />
         <MainTab.Screen
            options={{
               tabBarIcon: ({ focused, size, color }) => (
                  <Feather name="user" size={size} color={color} />
               ),
               headerLeft: props => (
                  <Feather
                     onPress={() => navigation.navigate("Posts")}
                     style={styles.stepBack}
                     name="arrow-left"
                     size={24}
                     color="black"
                  />
               ),
            }}
            name="Comments"
            component={CommentsScreen}
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
   logOut: {
      width: 24,
      height: 24,
      marginRight: 10,
      marginBottom: 10,
      color: "#BDBDBD",
   },
   stepBack: {
      width: 24,
      height: 24,
      marginBottom: 10,
      marginLeft: 16,
   },
});

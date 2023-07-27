// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { StyleSheet, View, Text } from "react-native";

import PostsDefault from "../posts/PostsDefault";
import Map from "../posts/Map";
import Comments from "../posts/Comments";

const PostsNavigator = createStackNavigator();

export default function PostsScreen({ navigation }) {
   return (
      <PostsNavigator.Navigator>
         <PostsNavigator.Screen
            options={{
               headerShown: false,
            }}
            name="PostsDefault"
            component={PostsDefault}
         ></PostsNavigator.Screen>
         <PostsNavigator.Screen
            options={{
               headerShown: false,
            }}
            name="Map"
            component={Map}
         ></PostsNavigator.Screen>
         <PostsNavigator.Screen
            options={{
               headerShown: false,
            }}
            name="Comments"
            component={Comments}
         ></PostsNavigator.Screen>
      </PostsNavigator.Navigator>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
   },
   headerTitle: {},
});

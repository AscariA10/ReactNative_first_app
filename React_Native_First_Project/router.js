// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from "@expo/vector-icons";

import { StyleSheet } from "react-native";

import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";

import Home from "./screens/main/Home";
// import PostsScreen from "./screens/main/PostsScreen";
// import CommentsScreen from "./screens/main/CommentsScreen";
// import CreateScreen from "./screens/main/CreateScreen";

const AuthStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
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
            <AuthStack.Screen
               options={{
                  headerShown: false,
               }}
               name="Home"
               component={Home}
            />
         </AuthStack.Navigator>
      );
   }
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
};

// const styles = StyleSheet.create({
//    addContainer: {
//       textAlign: "center",
//       marginTop: 9,
//       minHeight: 40,
//       width: 70,
//       borderRadius: 20,
//       backgroundColor: "#ff6c00",
//    },
//    addButton: {
//       minHeight: 40,
//       width: 70,
//       textAlign: "center",
//       padding: 6,
//       borderRadius: 20,
//       backgroundColor: "#ff6c00",
//    },
// });

// !flex: 1,
// !      justifyContent: "center",
//  !     alignItems: "center",
// ?style={styles.addButton}

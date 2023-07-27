import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";

import { StyleSheet, View, Text, Button } from "react-native";
import * as Location from "expo-location";

export default function PostsDefault({ navigation, route }) {
   return (
      <View style={styles.container}>
         <Text>PostsScreen</Text>
         <Button title="map" onPress={() => navigation.navigate("Map")}></Button>
         <Button title="comments" onPress={() => navigation.navigate("Comments")}></Button>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   headerTitle: {},
});

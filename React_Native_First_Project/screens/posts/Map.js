import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";

export default function Map({ navigation }) {
   return (
      <View style={styles.container}>
         <Text>Map</Text>
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

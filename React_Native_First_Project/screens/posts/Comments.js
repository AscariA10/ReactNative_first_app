import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";

export default function Comments({ navigation }) {
   return (
      <View style={styles.container}>
         <Text>Comments</Text>
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

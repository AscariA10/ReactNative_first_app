import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CreatePostsScreen() {
   return (
      <View style={styles.container}>
         <View style={styles.cameraContainer}>
            <Camera style={styles.camera}>
               <TouchableOpacity onPress={() => {}} style={styles.cameraButton}>
                  <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
               </TouchableOpacity>
            </Camera>
            <Text style={styles.cameraTitle}>Upload Photo</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   cameraContainer: {
      width: 343,
      height: 267,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 32,
   },
   camera: {
      height: 240,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F6F6F6",
      borderWidth: 1,
      borderColor: "#E8E8E8",
   },
   cameraButton: {
      borderRadius: 50,
      height: 60,
      width: 60,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
   },
   cameraTitle: {
      marginTop: 8,
      fontSize: 16,
      color: "#BDBDBD",
   },
});

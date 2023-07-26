import React, { useState, useEffect } from "react";

import {
   StyleSheet,
   View,
   Text,
   TextInput,
   TouchableOpacity,
   KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";

import * as Location from "expo-location";

import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const initialState = {
   name: "",
   place: "",
};

export default function CreatePostsScreen({ navigation }) {
   const [camera, setCamera] = useState(null);
   const [hasCameraPermission, setHasCameraPermission] = useState();
   const [photo, setPhoto] = useState("");
   const [state, setState] = useState(initialState);
   const [name, setName] = useState(false);
   const [place, setPlace] = useState(false);
   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

   useEffect(() => {
      (async () => {
         const cameraPermission = await Camera.requestCameraPermissionsAsync();
         setHasCameraPermission(cameraPermission.status === "granted");
      })();
   }, []);

   useEffect(() => {
      const getPermissions = async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            console.log("Please grant location permissions");
            return;
         }
      };
      getPermissions();
   }, []);

   async function takePhoto() {
      const photo = await camera.takePictureAsync();
      const location = await Location.getCurrentPositionAsync();
      setPhoto(photo.uri);
      console.log(location);
   }

   function sendPhoto() {
      navigation.navigate("Posts", { ...state, photo });
   }

   function hideKeyboard() {
      setIsShowKeyboard(false);
   }

   function handleNameInputFocus() {
      setIsShowKeyboard(true);
      setName(true);
   }

   function handleNameInputBlur() {
      setName(false);
      hideKeyboard();
   }

   function handlePlaceInputFocus() {
      setIsShowKeyboard(true);
      setPlace(true);
   }

   function handlePlaceInputBlur() {
      setPlace(false);
      hideKeyboard();
   }

   return (
      <View style={styles.container}>
         <View style={styles.cameraContainer}>
            <Camera style={styles.camera} ref={setCamera}>
               <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
                  <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
               </TouchableOpacity>
            </Camera>
            <Text style={styles.cameraTitle}>Upload Photo</Text>
         </View>
         <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ ...styles.innerContainer, marginTop: isShowKeyboard ? -10 : 0 }}
         >
            <TextInput
               placeholder={"Назва..."}
               inputMode="text"
               onChangeText={value => {
                  setState(prevState => ({ ...prevState, name: value }));
               }}
               onFocus={handleNameInputFocus}
               onBlur={handleNameInputBlur}
               value={state.name}
               style={styles.nameInput}
            />
            <TextInput
               placeholder={"Місцевість..."}
               inputMode="text"
               onChangeText={value => {
                  setState(prevState => ({ ...prevState, place: value }));
               }}
               onFocus={handleNameInputFocus}
               onBlur={handleNameInputBlur}
               value={state.name}
               style={styles.placeInput}
            />
            <TouchableOpacity activeOpacity={0.9} onPress={sendPhoto} style={styles.sendButton}>
               <Text style={""}>Опублікувати</Text>
            </TouchableOpacity>
         </KeyboardAvoidingView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
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
   innerContainer: { flex: 1 },
   nameInput: {
      marginHorizontal: 16,
      marginTop: 32,
      height: 50,
      padding: 15,
      borderRadius: 8,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderColor: "#E8E8E8",
      fontFamily: "Roboto-Medium",
   },
   placeInput: {
      marginHorizontal: 16,
      marginTop: 16,
      height: 50,
      padding: 15,
      borderRadius: 8,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderColor: "#E8E8E8",
      fontFamily: "Roboto-Medium",
   },
   sendButton: {
      marginTop: 32,
      marginHorizontal: 16,
      borderRadius: 100,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",
   },
});

import React, { useState, useCallback } from "react";

import CommonStyles from "../styles/auth-common-styles";

import {
   StyleSheet,
   Text,
   View,
   ImageBackground,
   TextInput,
   TouchableOpacity,
   TouchableWithoutFeedback,
   KeyboardAvoidingView,
   Platform,
   Keyboard,
} from "react-native";

const initialState = {
   email: "",
   password: "",
};

export default function LoginScreen({ navigation }) {
   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
   const [email, setEmail] = useState(false);
   const [password, setPassword] = useState(false);
   const [state, setState] = useState(initialState);

   function hideKeyboard() {
      setIsShowKeyboard(false);
      Keyboard.dismiss();
   }

   function handleEmailInputFocus() {
      setIsShowKeyboard(true);
      setEmail(true);
   }

   function handleEmailInputBlur() {
      setEmail(false);
      hideKeyboard();
   }

   function handlePasswordInputFocus() {
      setIsShowKeyboard(true);
      setPassword(true);
   }

   function handlePasswordInputBlur() {
      setPassword(false);
      hideKeyboard();
   }

   function onSubmit() {
      console.log(state);
      setState(initialState);
      hideKeyboard();
   }

   return (
      <TouchableWithoutFeedback onPress={hideKeyboard}>
         <View style={CommonStyles.container}>
            <ImageBackground
               style={CommonStyles.backgroundImage}
               source={require("../Images/Backgrounds/Register_Background.jpg")}
            >
               <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                  style={{ ...CommonStyles.innerContainer, marginTop: isShowKeyboard ? 250 : 323 }}
               >
                  <View style={{ ...CommonStyles.form }}>
                     <Text style={CommonStyles.header}>Увійти</Text>
                     <TextInput
                        placeholder={"Адреса електронної пошти"}
                        value={state.email}
                        onChangeText={value => {
                           setState(prevState => ({ ...prevState, email: value }));
                        }}
                        onFocus={handleEmailInputFocus}
                        onBlur={handleEmailInputBlur}
                        style={{
                           ...styles.input,
                           borderColor: email ? "#FF6C00" : "#E8E8E8",
                        }}
                     />
                     <TextInput
                        placeholder={"Пароль"}
                        value={state.password}
                        onChangeText={value => {
                           setState(prevState => ({ ...prevState, password: value }));
                        }}
                        secureTextEntry={true}
                        onFocus={handlePasswordInputFocus}
                        onBlur={handlePasswordInputBlur}
                        style={{ ...styles.input, borderColor: password ? "#FF6C00" : "#E8E8E8" }}
                     />
                     <TouchableOpacity activeOpacity={0.9} onPress={onSubmit} style={styles.button}>
                        <Text style={styles.buttonTitle}>Увійти</Text>
                     </TouchableOpacity>
                     <View style={styles.navigationBlock}>
                        <Text style={styles.navigationString}>
                           Немає акаунту?{" "}
                           <Text
                              onPress={() => navigation.navigate("RegisterScreen")}
                              style={styles.navigationLink}
                           >
                              Зареєструватися
                           </Text>
                        </Text>
                     </View>
                  </View>
               </KeyboardAvoidingView>
            </ImageBackground>
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   input: {
      marginHorizontal: 16,
      marginBottom: 16,
      height: 50,
      padding: 15,
      borderRadius: 8,
      backgroundColor: "#F6F6F6",
      borderWidth: 1,
      borderColor: "#E8E8E8",
      fontFamily: "Roboto-Medium",
   },
   button: {
      backgroundColor: "#FF6C00",
      marginHorizontal: 16,
      marginTop: 43,
      borderRadius: 100,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
   },
   buttonTitle: {
      color: "#FFFFFF",
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      lineHeight: 18.75,
   },
   navigationBlock: {
      alignItems: "center",
      marginTop: 16,
   },
   navigationString: {
      color: "#1B4371",
   },
   navigationLink: {
      color: "#1B4371",
   },
});

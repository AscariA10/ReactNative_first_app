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
   login: "",
   email: "",
   password: "",
};

export default function RegisterScreen({ navigation }) {
   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
   const [login, setLogin] = useState(false);
   const [email, setEmail] = useState(false);
   const [password, setPassword] = useState(false);
   const [state, setState] = useState(initialState);

   function hideKeyboard() {
      setIsShowKeyboard(false);
   }

   function handleLoginInputFocus() {
      setIsShowKeyboard(true);
      setLogin(true);
   }

   function handleLoginInputBlur() {
      setLogin(false);
      hideKeyboard();
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={CommonStyles.container}>
            <ImageBackground
               style={CommonStyles.backgroundImage}
               source={require("../Images/Backgrounds/Register_Background.jpg")}
            >
               <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                  style={{ ...CommonStyles.innerContainer, marginTop: isShowKeyboard ? 125 : 263 }}
               >
                  <View style={{ ...CommonStyles.form }}>
                     <View style={styles.userProfilePhoto}></View>
                     <Text style={CommonStyles.header}>Реєстрація</Text>
                     <TextInput
                        placeholder={"Логін"}
                        value={state.login}
                        onChangeText={value => {
                           setState(prevState => ({ ...prevState, login: value }));
                        }}
                        onFocus={handleLoginInputFocus}
                        onBlur={handleLoginInputBlur}
                        style={{
                           ...CommonStyles.input,
                           borderColor: login ? "#FF6C00" : "#E8E8E8",
                        }}
                     />
                     <TextInput
                        placeholder={"Адреса електронної пошти"}
                        value={state.email}
                        onChangeText={value => {
                           setState(prevState => ({ ...prevState, email: value }));
                        }}
                        onFocus={handleEmailInputFocus}
                        onBlur={handleEmailInputBlur}
                        style={{
                           ...CommonStyles.input,
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
                        style={{
                           ...CommonStyles.input,
                           borderColor: password ? "#FF6C00" : "#E8E8E8",
                        }}
                     />
                     <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={onSubmit}
                        style={CommonStyles.button}
                     >
                        <Text style={CommonStyles.buttonTitle}>Зареєструватися</Text>
                     </TouchableOpacity>
                     <View style={CommonStyles.navigationBlock}>
                        <Text style={CommonStyles.navigationString}>
                           Вже є акаунт?{" "}
                           <Text
                              onPress={() => navigation.navigate("LoginScreen")}
                              style={CommonStyles.navigationLink}
                           >
                              Увійти
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
   userProfilePhoto: {
      marginHorizontal: 127,
      marginTop: -60,
      width: 120,
      height: 120,
      borderRadius: 16,
      backgroundColor: "#F6F6F6",
   },
});

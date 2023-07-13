import React, { useState, useCallback } from "react";

import CommonStyles from "../../styles/auth-common-styles.js";

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
      navigation.navigate("Home");
   }

   return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={CommonStyles.container}>
            <ImageBackground
               style={CommonStyles.backgroundImage}
               source={require("../../Images/Backgrounds/Register_Background.jpg")}
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
                        <Text style={CommonStyles.buttonTitle}>Увійти</Text>
                     </TouchableOpacity>
                     <View style={CommonStyles.navigationBlock}>
                        <Text style={CommonStyles.navigationString}>
                           Немає акаунту?{" "}
                           <Text
                              onPress={() => navigation.navigate("RegisterScreen")}
                              style={CommonStyles.navigationLink}
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

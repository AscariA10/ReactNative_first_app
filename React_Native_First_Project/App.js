import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
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
} from 'react-native';

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

export default function App() {
  const initialState = {
    login: '',
    email: '',
    password: '',
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [state, setState] = useState(initialState);

  console.log(state);

  function hideKeyboard() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
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

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./Images/Backgrounds/Register_Background.jpg')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={{ ...styles.innerContainer, marginTop: isShowKeyboard ? 147 : 263 }}
          >
            <View style={{ ...styles.form }}>
              <View style={styles.userProfilePhoto}></View>
              <Text style={styles.header}>Реєстрація</Text>
              <TextInput
                placeholder={'Логін'}
                value={state.login}
                onChangeText={value => {
                  setState(prevState => ({ ...prevState, login: value }));
                }}
                onFocus={handleLoginInputFocus}
                onBlur={handleLoginInputBlur}
                style={{
                  ...styles.input,
                  borderColor: login ? '#FF6C00' : '#E8E8E8',
                }}
              />
              <TextInput
                placeholder={'Адреса електронної пошти'}
                value={state.email}
                onChangeText={value => {
                  setState(prevState => ({ ...prevState, email: value }));
                }}
                onFocus={handleEmailInputFocus}
                onBlur={handleEmailInputBlur}
                style={{
                  ...styles.input,
                  borderColor: email ? '#FF6C00' : '#E8E8E8',
                }}
              />
              <TextInput
                placeholder={'Пароль'}
                value={state.password}
                onChangeText={value => {
                  setState(prevState => ({ ...prevState, password: value }));
                }}
                secureTextEntry={true}
                onFocus={handlePasswordInputFocus}
                onBlur={handlePasswordInputBlur}
                style={{ ...styles.input, borderColor: password ? '#FF6C00' : '#E8E8E8' }}
              />
              <TouchableOpacity activeOpacity={0.9} onPress={hideKeyboard} style={styles.button}>
                <Text style={styles.buttonTitle}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  innerContainer: { flex: 1 },
  form: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userProfilePhoto: {
    marginHorizontal: 127,
    marginTop: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  header: {
    marginTop: 32,
    marginHorizontal: 16,
    marginBottom: 33,
    textAlign: 'center',
    fontSize: 30,
    color: '#212121',
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 16,
    height: 50,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  button: {
    backgroundColor: '#FF6C00',
    marginHorizontal: 16,
    marginTop: 43,
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 18.75,
  },
});

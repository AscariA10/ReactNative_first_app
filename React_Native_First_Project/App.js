import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./Images/Backgrounds/Register_Background.jpg')}
      >
        <View style={styles.form}>
          <View style={styles.userProfilePhoto}></View>
          <Text style={styles.header}>Реєстрація</Text>
          <TextInput placeholder={'Логін'} style={styles.input} />
          <TextInput placeholder={'Адреса електронної пошти'} style={styles.input} />
          <TextInput placeholder={'Пароль'} style={styles.input} />
          <TouchableOpacity activeOpacity={0.9} style={styles.button}>
            <Text style={styles.buttonTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
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
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    marginTop: 263,
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

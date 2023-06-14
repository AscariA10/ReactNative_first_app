import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>РЕЄСТРАЦІЯ</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 263,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    fontSize: 30,
  },
});

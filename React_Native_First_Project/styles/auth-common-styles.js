import { StyleSheet } from "react-native";

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
   backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: 'center',
   },
   innerContainer: { flex: 1 },
   form: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
   },
   header: {
      marginTop: 32,
      marginHorizontal: 16,
      marginBottom: 33,
      textAlign: "center",
      fontSize: 30,
      fontFamily: "Roboto-Medium",
      color: "#212121",
   },
});

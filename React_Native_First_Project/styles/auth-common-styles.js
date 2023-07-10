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

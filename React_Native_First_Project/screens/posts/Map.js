import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View, Text, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map({ navigation, postLocation }) {
   console.log("pl", postLocation);
   const [location, setLocation] = useState(null);

   useEffect(async () => {
      setLocation({ postLocation });
   });

   // const coords = {
   //    latitude: postLocation.coords.latitude,
   //    longitude: postLocation.coords.longitude,
   // };
   // setLocation(coords);

   // useEffect(() => {
   //    (async () => {
   //       let { status } = await Location.requestPermissionsAsync();
   //       if (status !== "granted") {
   //          console.log("Permission to access location was denied");
   //       }

   //       // let location = await Location.getCurrentPositionAsync({});
   //       const coords = {
   //          latitude: route.params?.location.coords.latitude,
   //          longitude: route.params?.location.coords.longitude,
   //       };
   //       setLocation(coords);
   //    })();
   // }, []);

   return (
      <View style={styles.container}>
         <Text>Map</Text>
         <MapView
            style={styles.mapStyle}
            region={{
               ...location,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
            }}
            mapType="standard"
            minZoomLevel={15}
            onMapReady={() => console.log("Map is ready")}
            onRegionChange={() => console.log("Region change")}
         >
            <Marker title="I am here" coordinate={{ location }} description="Hello" />
         </MapView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
   mapStyle: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
   },
});

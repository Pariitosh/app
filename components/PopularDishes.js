import { View, StyleSheet, ImageBackground, Text } from "react-native";

export default function PopularDishes() {
  return (
    <ImageBackground
      source={require("./foood.jpg")} // Replace with the actual path to your image
      style={styles.Circle}
    >
      <Text style={styles.text}>Biriyani</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  text: { color: "grey",
    fontSize:20 },
  Circle: {
    marginRight:10,
    overflow: "hidden",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
  },
});

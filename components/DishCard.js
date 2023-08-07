import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableHighlight,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Ingridients from "./Ingridients";

export default function DishCard({ dish }) {
  
  const press=()=>{
    navigation.navigate("detail")
  }
  return (
    <View style={styles.box}>
      <View>
        <View style={styles.left}>
          <Text style={styles.text}>{dish.name}</Text>
          <FontAwesome name="dot-circle-o" size={24} color="black" />
          <Text>{dish.rating}</Text>
        </View>
        <View style={styles.left}>
          <MaterialCommunityIcons name="fridge" size={24} color="black" />
          <MaterialCommunityIcons name="fridge" size={24} color="black" />
          <TouchableHighlight >
            <Text onPress={press}>Ingridients</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.left}>
          <Text style={styles.text2}>{dish.description}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <ImageBackground
          style={styles.right}
          source={{ uri: dish.image }}
        ></ImageBackground>
        <View style={styles.but}>
          <Button  style={styles.borderRadius=50}title="add" color={"orange"}></Button>
        </View>
      </View>
    </View>
   
  );
}
const styles = StyleSheet.create({
  text2: {
    fontSize: 10,
  },
  but: { bottom: 20 },
  main: {
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  left: { flexDirection: "row", gap: 10, paddingBottom: 10 },
  right: {
    paddingBottom: 10,
    bottom: 10,
    height: 100,
    width: 100,
    backgroundColor: "yellow",
    borderRadius: 20,
    overflow: "",
  },
  box: {
    justifyContent: "space-between",
    height: 100,
    width: 350,
    backgroundColor: "white",
    flexDirection: "row",
  },
});

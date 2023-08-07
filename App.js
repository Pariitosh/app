import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useState,useEffect } from "react";
import Details from "./components/Details";
import Cuisine from "./components/Cuisine";
import { AntDesign } from "@expo/vector-icons";
import PopularDishes from "./components/PopularDishes";
import DishCard from "./components/DishCard";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function App() {

  const [selected,setselecte]= useState(true)
  const [dishes, setDishes] = useState([]);
  
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      const dishesData = await response.json();
      setDishes(dishesData.dishes);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  }
  fetchData();
},[]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Top}>
        <Text style={styles.selectDishes}> Select Dishes</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Details></Details>
        <View style={styles.blackbg}></View>
        <View style={styles.whitebg}></View>
      </View>
      <View style={styles.cuisine}>
        <Cuisine></Cuisine>
        <Cuisine></Cuisine>
        <Cuisine></Cuisine>
        <Cuisine></Cuisine>
      </View>
      <View style={styles.popular}>
        <Text style={styles.populartext}> Popular Dishes</Text>
      </View>
      
      <View style={styles.type}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <PopularDishes></PopularDishes>
        <PopularDishes></PopularDishes>
        <PopularDishes></PopularDishes>
        <PopularDishes></PopularDishes>
        <PopularDishes></PopularDishes>
        <PopularDishes></PopularDishes>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.recommend}>
          <View style={styles.col}>
            <Text style={styles.rec}>Recommended</Text>
            <AntDesign name="caretdown" size={24} color="grey" />
          </View>
          <View style={styles.menu}>
            <Text style={styles.menutext}>Menu</Text>
          </View>
        </View>

        <View style={styles.dishes}>
          {dishes.map((dish) => (
            <DishCard image={dish.image} key={dish.id} dish={dish} />
          ))}
        </View>
        <View style={styles.dishes}>
          {dishes.map((dish) => (
            <DishCard image={dish.image} key={dish.id} dish={dish} />
          ))}
        </View>
        <View style={styles.dishes}>
          {dishes.map((dish) => (
            <DishCard image={dish.image} key={dish.id} dish={dish} />
          ))}
        </View>

      </ScrollView>
      {selected && <View style={styles.selected}>
            <Text style={styles.text2}>{2} Food items selected</Text>
      </View>}
      
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text2:{
    color:"white",
    alignSelf:"center",
    fontSize:18,
  },
  selected:{
    justifyContent:"center",
    position:"absolute",
    opacity:0.8,
    bottom:40,
    alignSelf:"center",
    height:60,
    width:250,
    borderRadius:15,
    backgroundColor:"black"
  },
  dishes: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
  },
  menutext: {
    color: "white",
  },
  menu: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    backgroundColor: "black",
    width: 60,
    borderRadius: 10,
  },
  rec: { fontSize: 25, paddingRight: 15, marginLeft: 10, fontWeight: "bold" },
  recommend: {
    justifyContent: "space-between",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  type: {
    height: 100,
    flexDirection:"row",
    gap:10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  populartext: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
  },
  popular: {
    height: 40,
    backgroundColor: "white",
  },
  cuisine: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
  },
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "white",
  },
  selectDishes: {
    fontSize: 20,
    left: 20,
  },
  Top: {
    backgroundColor: "white",
    height: 40,
    justifyContent: "center",
  },
  blackbg: {
    height: 50,
    backgroundColor: "black",
  },
  whitebg: {
    height: 50,
    backgroundColor: "white",
  },
  detailsContainer: {
    position: "relative",
    justifyContent: "center",
  },
});

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import App from "./App";
import Ingridients from "./components/Ingridients"
         
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();                                               
export function nav(){
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
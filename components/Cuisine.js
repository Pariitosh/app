import { View, Text, StyleSheet } from "react-native"
export default function Cuisine() {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Italian
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:15,
        color:"orange"
    },
    box: {
        height: 30,
        width:80,
        backgroundColor: "white",
        borderRadius:20,
        borderWidth:3,
        borderColor:"orange",
        justifyContent:"center",
        alignItems:"center"
    }
})
import { View,StyleSheet,Text} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
export default function Details(){

    return (
        <View style={styles.details}>
        <View style={styles.box}>
            <Text style={styles.date}> <AntDesign name="calendar" size={24} color="black" />date</Text>
            <Text style={styles.time}>Time</Text>
        </View>
        
        </View>
    );
}
const styles=StyleSheet.create({
    details:{
        position:"absolute",
        alignSelf:"center",
        zIndex:1,
        height:50,
        width:200,
        borderRadius:10,
        backgroundColor:"white",
    },
    date:{
        color:"black",
        fontSize:20,
        alignSelf:"flex-end",
        marginLeft:10,
    },
    time:{
        marginRight:10,
        marginTop:5,
        color:"black",
        fontSize:20,
        alignSelf:"flex-start"
    },
    box:{
        
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})
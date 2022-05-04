
import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native";

export default StyleSheet.create({
     square:{
        width: 60,
        height: 60,
        backgroundColor: '#ccc',
        marginBottom:10,
        borderRadius: 5, 
        justifyContent: 'center',
        alignItems: 'center'
     },
     table:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 40
     },
     space:{
        margin: 5
     },
     box:{
      flex:1 
      
     },
     title:{
        fontSize:25,
        fontWeight:'bold',
        justifyContent: "center",
        marginTop:30,
        alignContent: "center",
     },
     playerX:{
        color:"blue",
        fontSize:40
     },
     playerO:{
      color:"red",
      fontSize:40
   },
   margin:{
      marginRight:10
   }
}) 
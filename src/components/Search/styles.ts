import { StyleSheet } from "react-native";

const stylesSearchInput = StyleSheet.create({
    container:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    area:{
        flex:3,
        flexDirection:"row"
    
    },
    input:{
        borderWidth: 2, borderColor: "grey",
        borderRadius:10,
        width:"100%",
        textAlign:"center"
    }
})
export default stylesSearchInput
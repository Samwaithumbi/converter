import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header:{
    height:90,
    backgroundColor:"blue",
    marginTop:25,
    elevation: 5,
  },
  title:{
    color:"white",
    fontSize:20,
    textAlign:"center",
    paddingTop:20
  },
  result:{
    borderColor:"red",
    width:100,
    height:50
  },
  picker:{
    height:50,
    width:150,
    backgroundColor:"purple",
   color:"white"
   
  },
  type:{
  flex:1,
  flexDirection:"row",
  justifyContent:"center",
  paddingTop:30,
  paddingBottom:60
  },
  fromType: {
    marginRight: 10,
  },
  toType: {
    marginLeft: 10,
  },
  to:{
    fontSize:20,
    color:"red",
    textAlign: "center", 
    alignSelf: "center", 
    marginHorizontal: 5,
  },
  input:{
    height: 50, 
    width: '100%',
    borderColor: '#6200ea', 
    borderWidth: 1, 
    borderRadius: 5, 
    paddingHorizontal: 10, 
    backgroundColor: '#ffffff', 
    fontSize: 16, 
    color: '#333',
    elevation: 2, 
    marginBottom:20
    
  },
  error:{
    color: 'red', 
    fontSize: 16,
    marginTop: 10, 
    textAlign: 'center', 
    fontWeight: 'bold', 
  },
  result:{
    borderTopColor:"red",
    borderBottomColor: '#6200ea', // Bottom border color
  },
  answer:{
    fontSize:34,
    marginTop: 20, // Space above the result view
    padding: 20, // Padding inside the result view
    borderWidth: 1, // Border width
    borderColor: '#6200ea', // Border color
    borderRadius: 8, // Rounded corners
    backgroundColor: '#ffffff', // Background color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    elevation: 5, // Elevation for Android shadow
  }
  })

  export default styles;
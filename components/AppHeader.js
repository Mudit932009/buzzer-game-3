import React,{Component} from "react"
import{View,Text} from "react-native"

export default class AppHeader extends Component{
  render(){
    return(
     < View style={{
       backgroundColor:"yellow",padding:30,alignSelf:"center",flex:80,marginTop:2
     }}>
     
     <Text style={{
    fontSize:45
     }}>
     Buzzer App made by mudit
     </Text>
     </ View>
    )
  }
}
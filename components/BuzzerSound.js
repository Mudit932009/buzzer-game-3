import React, {Component,} from "react"
import{TouchableOpacity,Text,View,StyleSheet} from "react-native"
import db from "../config"
import{Audio} from "expo-av"
export default class BuzzerSound extends Component{
  PlaySound=async()=>{
    await Audio.Sound.createAsync({
      uri:"http://soundbible.com/grab.php?id=1206&type=mp3"
    },
    {shouldPlay:true}

    )
  
  
  }
  updatedatabase=(color)=>{
    var time=new Date().getTime()
    var address=db.ref("Teams/"+color)
    address.update({
      isbuttonpressed:true,
        timestamp:time
    })
  }
render(){
  return(
    <View>
    <TouchableOpacity style={
      [
      Bstyle.buzzerstyle,{backgroundColor:this.props.navigation.getParam("cc")}]
     }
      onPress={()=>{
        this.PlaySound();
        this.updatedatabase(this.props.navigation.getParam("cc"))
      }

      }
     >
     

     <Text style={Bstyle.textstyle}>

    Press Me
    </ Text>
     </TouchableOpacity>
   </ View>
  )
}
}


const Bstyle=StyleSheet.create({
  buzzerstyle:{
  marginLeft:100,
    marginTop:120,
     borderWidth:1,
     borderColor:"red",
     alignItems:"center",justifyContent:"center",width:200,height:200,backgroundColor:"red",borderRadius:100  

  },
  textstyle:{
    fontWeight:"bold",color:"white",fontSize:20
  }
})


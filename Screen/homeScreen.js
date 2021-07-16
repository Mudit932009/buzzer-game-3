import React, { Component } from 'react';
import { View, TouchableOpacity, Text,StyleSheet } from 'react-native';
import AppHeader from "../components/AppHeader"
export default class homeScreen extends Component {
  render() {
    return (
      <View>
      <AppHeader>
      </AppHeader>
        <TouchableOpacity style={[Mstyle.buttonstyle,{backgroundColor:"blue"}]}
          onPress={() => {
            {
              this.props.navigation.navigate('Bs',{cc:"red"})
            }
          }}>
          <Text style={Mstyle.textStyle}>Team1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Mstyle.buttonstyle,{backgroundColor:"silver"}]}
          onPress={() => {
            {
              this.props.navigation.navigate('Bs',{cc:"yellow"})
            }
          }}>
          <Text style={Mstyle.textStyle}>Team2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Mstyle.buttonstyle,{backgroundColor:"navy"}]}
          onPress={() => {
            {
              this.props.navigation.navigate('Bs',{cc:"skyblue"})
            }
          }}>
          <Text style={Mstyle.textStyle}>Team3</Text>
        </TouchableOpacity >
        <TouchableOpacity style= {Mstyle.buttonstyle} onPress={()=>{
          {this.props.navigation.navigate("Bs",{cc:"brown"})}
        }
        }> 
        <Text style={Mstyle.textStyle}>
        Team4
        </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const Mstyle=StyleSheet.create({
buttonstyle:{
  justifyContent:"center",
  alignSelf:"center",
  borderWidth:2,
  borderRadius:15,
  marginTop:50,
  width:200,
  height:50,
  backgroundColor:"red"
},
textStyle:{
  textAlign :"center",
  color:"white"
}
})

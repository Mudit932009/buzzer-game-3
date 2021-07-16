import React,{Component} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import BuzzerSound from "./components/BuzzerSound"  

import HomeScreen from "./Screen/homeScreen"
import {createAppContainer,createSwitchNavigator}from "react-navigation"
export default class App extends Component {
  render(){

 
  return (
    <Appcontainer>
    </Appcontainer>
  );}
}
const ScreenContainer=createSwitchNavigator({
  HS:{screen:HomeScreen},
  Bs:{screen:BuzzerSound}
})
const Appcontainer=createAppContainer(ScreenContainer)

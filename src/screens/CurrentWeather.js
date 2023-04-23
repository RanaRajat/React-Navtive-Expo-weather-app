import React from "react";
import {View, Text,SafeAreaView,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'
import RowTextComponent from "../components/RowTextComponent";
const CurrentWeather=()=>{
  const {wrapper,container,temp,feels,highLowWrapper,highLow,bodyWrapper,description,message} = styles;
  return<>
  <SafeAreaView style={wrapper}>
    <View style={container}>
    <Feather name="sun" size={100} ></Feather>
    <Text style={temp}>6</Text>
    <Text style={feels}>Feels Like 5</Text>
    <RowTextComponent msg1={"High :8"} msg2={"Low:6"} msg1Styles={highLow} msg2Styles={highLow} conatinerStyles={highLowWrapper}/>
    </View>
    <RowTextComponent msg1={"It's Sunny"} msg2={"It's perfect tshirt weather"} msg1Styles={description}  msg2Styles={message} containerStyles={bodyWrapper}/>
    </SafeAreaView>
  </>
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  wrapper:{
    backgroundColor:'pink',
    flex:1
  },
  temp:{
    color:'black',
    fontSize:48
  },
  feels:{
    fontSize: 30,
    color:'black'
  }, 
  highLow:{
    color:'black',
    fontSize:20
  },
  highLowWrapper:{
   flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft: 25,
    marginBottom:40
  },
  description:{
    fontSize:48,
  },
  message:{
    fontSize:30
  }
})
export default CurrentWeather;
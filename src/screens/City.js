import React from "react";
import {Text,SafeAreaView,StyleSheet,ImageBackground,StatusBar,View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = ()=>{
    const {container,city, cityText,country,populationWrapper,riseText,riseWrapper,image,rowLayout,populationText} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={image}>
                <Text style={[city,cityText]}>London</Text>
                <Text style={[country,cityText]}>UK</Text>
                <View style={[populationWrapper,rowLayout]}>
                <IconText iconName={"user"} iconColor={"red"} bodyText={"8000"} bodyTextStyles={populationText}/>
                </View>
                <View style={[riseWrapper,rowLayout]}>
                <IconText iconName={"sunrise"} iconColor={"white"} bodyText={"10:46:58am"} bodyTextStyles={riseText}/>
                <IconText iconName={"sunset"} iconColor={"white"} bodyText={"18:10:58pm"} bodyTextStyles={riseText}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
    flex:1
},
image:{
    flex:1,
    marginTop:StatusBar.currentHeight||0,
},
city:{
    fontSize:40,
},
country:{
    fontSize:30,
},
cityText:{
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold",
    color:"white"
},
populationWrapper:{
    justifyContent:'center',
    marginTop:30
},
populationText:{
    fontSize:25,
    marginLeft:7.5,
    color:'red',
    fontWeight:'bold'
},
riseWrapper:{
  justifyContent:"space-around",
  marginTop:30
},
riseText:{
fontSize:20,
color:"white",
fontWeight:"bold"
},
rowLayout:{
    flexDirection:'row',
    alignItems:'center'
}
})

export default City;
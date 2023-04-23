import React from 'react'
import { SafeAreaView, StyleSheet,Text,FlatList,View,StatusBar,ImageBackground} from 'react-native'
import Item from '../components/ListItem'

  const Data =[{
    "dt": 1661875200,
    "main": {
      "temp": 296.34,
      "feels_like": 296.02,
      "temp_min": 296.34,
      "temp_max": 298.24,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 933,
      "humidity": 50,
      "temp_kf": -1.9
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 97
    },
    "wind": {
      "speed": 1.06,
      "deg": 66,
      "gust": 2.16
    },
    "visibility": 10000,
    "pop": 0.32,
    "rain": {
      "1h": 0.13
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2022-08-30 16:00:00"
  },
  {
    "dt": 1661878800,
    "main": {
      "temp_min": 296.2,
      "temp_max": 296.31
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 95
    },
    "wind": {
      "speed": 1.58,
      "deg": 103,
      "gust": 3.52
    },
    "visibility": 10000,
    "pop": 0.4,
    "rain": {
      "1h": 0.24
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2022-08-30 17:00:00"
  }]
const UpcommingWeather = ()=>{  
      const renderItem = ({item})=>(
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
      )
   return(
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../../assets/cloud.jpg')} 
        style={styles.image}
        >
        <Text>Upcomming Weather</Text>
        <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.dt_txt}
        ItemSeparatorComponent={()=><View style={{backgroundColor:'pink',height:1}}></View>}
        >
      
        </FlatList>
        </ImageBackground>
    </SafeAreaView>
   )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'royal-blue',
        marginTop:StatusBar.currentHeight||0,
    },
    image:{
     flex:1
    }
})
export default UpcommingWeather
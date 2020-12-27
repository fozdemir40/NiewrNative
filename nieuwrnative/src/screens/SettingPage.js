import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto'
import { 
  AlfaSlabOne_400Regular 
} from '@expo-google-fonts/alfa-slab-one'




class SettingPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      region: "onzin"
    };
    this.loadRegion();
    this.fontsLoaded = []
  }

  checkLoaded(){
    
  }

  fontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    AlfaSlabOne_400Regular 
  });

  async loadRegion(){
    const token = await AsyncStorage.getItem('@region');
    this.setState({ region: token });
}
render() {
  if (!fontsLoaded) {
    return <Text>Loading..</Text>
  } else {
  const {navigation} = this.props
  return (
      <View style={styles.container}>
      <Text style={{
        fontFamily: "AlfaSlabOne_400Regular",
        color: "rgba(197,142,42,1)",
        fontSize: 50,
        marginTop: 172,
        marginLeft: 19
      }}>Preferences</Text>
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button3}></TouchableOpacity>
        </View>
        <Text style={{
          top: 0,
          left: 0,
          position: "absolute",
          color: "rgba(197,142,42,1)",
          fontSize: 25,
          width: 375,
          height: 72,
          fontFamily: "Roboto_700Bold",
        }}>Regio - Provincie - {"\n"}Landelijk</Text>
      </View>
      <Text style={{
        color: "rgba(197,142,42,1)",
        fontSize: 25,
        marginTop: -106,
        marginLeft: 19,
        fontFamily: "Roboto_700Bold",
      }}>Afstand:</Text>
      <Text style={{
        color: "rgba(197,142,42,1)",
        fontSize: 25,
        marginTop: 72,
        marginLeft: 20,
        fontFamily: "Roboto_700Bold",
      }}>Dark mode:</Text>
      <Switch
        value={false}
        thumbColor="rgba(156,112,3,1)"
        trackColor={{ true: "rgba(194,95,23,1)", false: "rgba(172,153,95,1)" }}
        disabled={false}
        style={styles.switch}
      ></Switch>
      <Text style={{
        color: "rgba(197,142,42,1)",
        fontSize: 25,
        marginTop: 5,
        marginLeft: 20,
        fontFamily: "Roboto_700Bold",
      }}>Kleur:</Text>
      <Svg viewBox="0 0 240 240" style={styles.ellipse}>
        <Ellipse
          strokeWidth={24}
          fill="rgba(234,205,131,1)"
          cx={120}
          cy={120}
          rx={108}
          ry={108}
          stroke="rgba(0,0,0,1)"
        ></Ellipse>
      </Svg>
      <View style={styles.regio2Stack}>
        <Text style={{
          top: 0,
          left: 0,
          position: "absolute",
          color: "rgba(197,142,42,1)",
          fontSize: 25,
          fontFamily: "Roboto_700Bold",
        }}>Regio:</Text>
        <View style={styles.rotterdamStack}>
          <Text style={{
            top: 34,
            left: 0,
            position: "absolute",
            color: "rgba(197,142,42,1)",
            fontSize: 25,
            fontFamily: "AlfaSlabOne_400Regular",
          }}>test: {this.state.region}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("OwnRegion")}
            style={styles.button4}
          >
            <Text style={{
              color: "rgba(255,255,255,1)",
              fontSize: 20,
              alignSelf: "center",
              fontFamily: "Roboto_700Bold",
            }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewsHome")}
        style={styles.button5}
      >
        <Text style={{
          color: "rgba(255,255,255,1)",
          fontSize: 20,
          marginTop: 7,
          marginLeft: 28,
          fontFamily: "Roboto_700Bold",
        }}>Back</Text>
      </TouchableOpacity>
    </View>


  );}
}  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,205,131,1)"
  },
  preferences: {
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 50,
    marginTop: 172,
    marginLeft: 19
  },
  group: {
    top: 0,
    left: -1,
    width: 77,
    height: 34,
    position: "absolute"
  },
  button: {
    width: 81,
    height: 34,
    backgroundColor: "rgba(234,205,131,1)"
  },
  button2: {
    width: 136,
    height: 34,
    backgroundColor: "rgba(234,205,131,1)",
    marginLeft: 19
  },
  buttonRow: {
    height: 34,
    flexDirection: "row",
    marginLeft: -3,
    marginRight: -156
  },
  button3: {
    width: 132,
    height: 34,
    backgroundColor: "rgba(234,205,131,1)",
    marginLeft: -3
  },
  regio: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    width: 375,
    height: 72
  },
  groupStack: {
    width: 375,
    height: 72,
    marginTop: 60,
    marginLeft: 20
  },
  afstand: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginTop: -106,
    marginLeft: 19
  },
  darkMode: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginTop: 72,
    marginLeft: 20
  },
  switch: {
    marginTop: 13,
    marginLeft: 19
  },
  kleur: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 20
  },
  ellipse: {
    width: 240,
    height: 240,
    marginLeft: 20
  },
  regio2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25
  },
  rotterdam: {
    top: 34,
    left: 0,
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 25
  },
  button4: {
    top: 0,
    left: 95,
    width: 100,
    height: 36,
    position: "absolute",
    backgroundColor: "rgba(202,151,24,1)",
    borderRadius: 24,
    justifyContent: "center"
  },
  edit: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center"
  },
  rotterdamStack: {
    top: 0,
    left: 0,
    width: 195,
    height: 68,
    position: "absolute"
  },
  regio2Stack: {
    width: 195,
    height: 68,
    marginTop: 16,
    marginLeft: 25
  },
  button5: {
    width: 100,
    height: 36,
    backgroundColor: "rgba(202,151,24,1)",
    borderRadius: 24,
    marginTop: -738,
    marginLeft: 30
  },
  back1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 7,
    marginLeft: 28
  }
});

export default SettingPage;

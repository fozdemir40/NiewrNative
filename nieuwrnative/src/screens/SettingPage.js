import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function SettingPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.preferences}>Preferences</Text>
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button3}></TouchableOpacity>
        </View>
        <Text style={styles.regio}>Regio - Provincie - {"\n"}Landelijk</Text>
      </View>
      <Text style={styles.afstand}>Afstand:</Text>
      <Text style={styles.darkMode}>Dark mode:</Text>
      <Switch
        value={false}
        thumbColor="rgba(156,112,3,1)"
        trackColor={{ true: "rgba(194,95,23,1)", false: "rgba(172,153,95,1)" }}
        disabled={false}
        style={styles.switch}
      ></Switch>
      <Text style={styles.kleur}>Kleur:</Text>
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
      <Text style={styles.regio2}>Regio:</Text>
      <Text style={styles.rotterdam}>Rotterdam</Text>
    </View>
  );
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
    marginTop: 55,
    marginLeft: 26
  },
  group: {
    top: 0,
    left: 0,
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
    marginLeft: 26
  },
  afstand: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginTop: -106,
    marginLeft: 26
  },
  darkMode: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginTop: 72,
    marginLeft: 26
  },
  switch: {
    marginTop: 13,
    marginLeft: 26
  },
  kleur: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginTop: 45,
    marginLeft: 26
  },
  ellipse: {
    width: 240,
    height: 240,
    marginLeft: 26
  },
  regio2: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginTop: 16,
    marginLeft: 31
  },
  rotterdam: {
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 25,
    marginLeft: 31
  }
});

export default SettingPage;

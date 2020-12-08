import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function RegionSelect(props) {
  return (
    <View style={styles.container}>
      <View style={styles.groupColumn}>
        <View style={styles.group}>
          <Text style={styles.selectRegion}>Select {"\n"}Region</Text>
          <Text style={styles.changeableInPref}>Changable in preferences</Text>
        </View>
        <View style={styles.group2}>
          <View style={styles.land_circleStack}>
            <Svg viewBox="0 0 475 475" style={styles.land_circle}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(218,178,77,1)"
                cx={237}
                cy={237}
                rx={237}
                ry={237}
              ></Ellipse>
            </Svg>
            <Text style={styles.land}>Land</Text>
            <Svg viewBox="0 0 334 334" style={styles.provincie_circle}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(224,191,109,1)"
                cx={167}
                cy={167}
                rx={167}
                ry={167}
              ></Ellipse>
            </Svg>
            <Text style={styles.provincie}>Provincie</Text>
            <Svg viewBox="0 0 182 182" style={styles.regio_circle}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(227,203,139,1)"
                cx={91}
                cy={91}
                rx={91}
                ry={91}
              ></Ellipse>
            </Svg>
            <Text style={styles.regio}>Regio</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupColumnFiller}></View>
      <View style={styles.rect1}>
        <View style={styles.startHere1Filler}></View>
        <Text style={styles.startHere1}>Start here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,205,131,1)"
  },
  group: {
    width: 310,
    height: 34,
    marginLeft: 48
  },
  selectRegion: {
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 60,
    width: 322,
    height: 153,
    marginTop: -177
  },
  changeableInPref: {
    fontFamily: "roboto-700",
    color: "rgba(210,164,51,1)",
    fontSize: 15,
    width: 310,
    height: 34,
    marginTop: 24
  },
  group2: {
    width: 475,
    height: 475
  },
  land_circle: {
    top: 0,
    width: 475,
    height: 475,
    position: "absolute",
    left: 0
  },
  land: {
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(175,133,25,1)",
    fontSize: 30,
    top: 23,
    left: 198
  },
  provincie_circle: {
    top: 70,
    width: 334,
    height: 334,
    position: "absolute",
    left: 70
  },
  provincie: {
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(175,133,25,1)",
    fontSize: 30,
    top: 99,
    left: 161
  },
  regio_circle: {
    top: 142,
    width: 182,
    height: 182,
    position: "absolute",
    left: 146
  },
  regio: {
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(175,133,25,1)",
    fontSize: 30,
    top: 212,
    left: 192
  },
  land_circleStack: {
    width: 475,
    height: 475
  },
  groupColumn: {
    width: 475,
    marginTop: 246,
    marginLeft: -30
  },
  groupColumnFiller: {
    flex: 1
  },
  rect1: {
    backgroundColor: "rgba(202,151,24,1)",
    height: 58,
    flexDirection: "row"
  },
  startHere1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  startHere1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 139,
    alignSelf: "center"
  }
});

export default RegionSelect;

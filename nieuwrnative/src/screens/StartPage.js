import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function StartPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 289.88 288.69" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(244,230,192,1)"
                strokeWidth={31}
                fill="rgba(249,240,217,1)"
                cx={145}
                cy={144}
                rx={129}
                ry={129}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 145 144.54" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(252,248,236,1)"
                strokeWidth={45}
                fill="rgba(254,252,246,1)"
                cx={73}
                cy={72}
                rx={50}
                ry={50}
              ></Ellipse>
            </Svg>
            <Text style={styles.niewr}>Niewr.</Text>
            <Text style={styles.itsAboutYou}>It&#39;s about you</Text>
          </View>
          <View style={styles.ellipse2StackFiller}></View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("RegionSelect")}
            style={styles.button}
          >
            <View style={styles.startHereFiller}></View>
            <Text style={styles.startHere}>Start here</Text>
          </TouchableOpacity>
        </View>
        <Svg viewBox="0 0 580.9 579.47" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(236,210,143,1)"
            strokeWidth={81}
            fill="rgba(240,219,166,1)"
            cx={290}
            cy={290}
            rx={250}
            ry={249}
          ></Ellipse>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 65,
    borderWidth: 0,
    borderColor: "#000000"
  },
  rect: {
    top: 0,
    left: 133,
    position: "absolute",
    backgroundColor: "rgba(234,205,131,1)",
    right: 34,
    bottom: 0
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 290,
    height: 289,
    position: "absolute"
  },
  ellipse3: {
    top: 72,
    left: 72,
    width: 145,
    height: 145,
    position: "absolute"
  },
  niewr: {
    top: 96,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(202,151,24,1)",
    fontSize: 70,
    width: 368,
    height: 88
  },
  itsAboutYou: {
    top: 184,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(202,151,24,1)",
    fontSize: 20,
    width: 320,
    height: 27
  },
  ellipse2Stack: {
    width: 390,
    height: 289,
    marginTop: 304,
    marginLeft: 13
  },
  ellipse2StackFiller: {
    flex: 1
  },
  button: {
    backgroundColor: "rgba(202,151,24,1)",
    height: 58,
    flexDirection: "row"
  },
  startHereFiller: {
    flex: 1,
    flexDirection: "row"
  },
  startHere: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 139,
    alignSelf: "center"
  },
  ellipse: {
    top: 158,
    left: 0,
    width: 581,
    height: 579,
    position: "absolute"
  },
  rectStack: {
    flex: 1,
    marginLeft: -133,
    marginRight: -34
  }
});

export default StartPage;

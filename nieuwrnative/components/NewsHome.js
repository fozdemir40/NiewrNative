import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";     

function NewsHome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.nieuwr}>Nieuwr.</Text>
          <View style={styles.scrollArea2Row}>
            <View style={styles.scrollArea2}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea2_contentContainerStyle}
              >
                <View style={styles.button1Row}>
                  <TouchableOpacity style={styles.button1}>
                    <View style={styles.ellipse16Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse16}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse17}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button2}>
                    <View style={styles.ellipse18Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse18}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse19}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button3}>
                    <View style={styles.ellipse20Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse20}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse21}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button4}>
                    <View style={styles.ellipse22Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse22}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse23}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button5}>
                    <View style={styles.ellipse24Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse24}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse25}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button6}>
                    <View style={styles.ellipse26Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse26}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse27}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button7}>
                    <View style={styles.ellipse28Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse28}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse29}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button8}>
                    <View style={styles.ellipse30Stack}>
                      <Svg viewBox="0 0 75 75" style={styles.ellipse30}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(152,105,45,1)"
                          cx={38}
                          cy={38}
                          rx={38}
                          ry={38}
                        ></Ellipse>
                      </Svg>
                      <Svg viewBox="0 0 70 70" style={styles.ellipse31}>
                        <Ellipse
                          stroke="rgba(230, 230, 230,1)"
                          strokeWidth={0}
                          fill="rgba(170,124,8,1)"
                          cx={35}
                          cy={35}
                          rx={35}
                          ry={35}
                        ></Ellipse>
                      </Svg>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            <TouchableOpacity style={styles.button9}>
              <View style={styles.ellipse32Stack}>
                <Svg viewBox="0 0 75 75" style={styles.ellipse32}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(152,105,45,1)"
                    cx={38}
                    cy={38}
                    rx={38}
                    ry={38}
                  ></Ellipse>
                </Svg>
                <Svg viewBox="0 0 70 70" style={styles.ellipse33}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(170,124,8,1)"
                    cx={35}
                    cy={35}
                    rx={35}
                    ry={35}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="plus" style={styles.icon4}></EntypoIcon>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Svg viewBox="0 0 303.39 235.09" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(234,205,131,1)"
            cx={152}
            cy={118}
            rx={152}
            ry={118}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 375 57.79" style={styles.ellipse14}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(225,186,85,1)"
            cx={188}
            cy={29}
            rx={188}
            ry={29}
          ></Ellipse>
        </Svg>
        <View style={styles.rect2}>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.rect3}>
                <View style={styles.rect4}></View>
                <View style={styles.rect5}></View>
                <View style={styles.rect6}></View>
                <View style={styles.rect7}></View>
                <View style={styles.rect8}></View>
                <View style={styles.rect9}></View>
                <View style={styles.rect10}></View>
                <View style={styles.rect11}></View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.rect12Row}>
            <View style={styles.rect12}>
              <FontAwesomeIcon
                name="map-o"
                style={styles.icon}
              ></FontAwesomeIcon>
            </View>
            <View style={styles.rect13}>
              <FontAwesomeIcon
                name="calendar"
                style={styles.icon2}
              ></FontAwesomeIcon>
            </View>
            <View style={styles.rect14}>
              <FeatherIcon name="settings" style={styles.icon3}></FeatherIcon>
            </View>
          </View>
        </View>
        <Svg viewBox="0 0 382.94 133.96" style={styles.ellipse15}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(206,160,44,1)"
            cx={191}
            cy={67}
            rx={191}
            ry={67}
          ></Ellipse>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rect: {
    width: 375,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(202,151,24,1)",
    left: 8,
    top: 106
  },
  nieuwr: {
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 60,
    marginTop: 29,
    marginLeft: 87
  },
  scrollArea2: {
    width: 269,
    height: 84,
    backgroundColor: "rgba(202,151,24,1)"
  },
  scrollArea2_contentContainerStyle: {
    width: 695,
    height: 84,
    flexDirection: "row"
  },
  button1: {
    width: 75,
    height: 75
  },
  ellipse16: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse17: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse16Stack: {
    width: 75,
    height: 75
  },
  button2: {
    width: 75,
    height: 75,
    marginLeft: 15
  },
  ellipse18: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse19: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse18Stack: {
    width: 75,
    height: 75
  },
  button3: {
    width: 75,
    height: 75,
    marginLeft: 15
  },
  ellipse20: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse21: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse20Stack: {
    width: 75,
    height: 75
  },
  button4: {
    width: 75,
    height: 75,
    marginLeft: 15
  },
  ellipse22: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse23: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse22Stack: {
    width: 75,
    height: 75
  },
  button5: {
    width: 75,
    height: 75,
    marginLeft: 11
  },
  ellipse24: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse25: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse24Stack: {
    width: 75,
    height: 75
  },
  button6: {
    width: 75,
    height: 75,
    marginLeft: 12
  },
  ellipse26: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse27: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse26Stack: {
    width: 75,
    height: 75
  },
  button7: {
    width: 75,
    height: 75,
    marginLeft: 9
  },
  ellipse28: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse29: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse28Stack: {
    width: 75,
    height: 75
  },
  button8: {
    width: 75,
    height: 75,
    marginLeft: 11
  },
  ellipse30: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse31: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  ellipse30Stack: {
    width: 75,
    height: 75
  },
  button1Row: {
    height: 75,
    flexDirection: "row",
    flex: 1,
    marginRight: -426,
    marginLeft: 7,
    marginTop: 5
  },
  button9: {
    width: 75,
    height: 75,
    marginLeft: 7,
    marginTop: 4
  },
  ellipse32: {
    top: 0,
    left: 0,
    width: 75,
    height: 75,
    position: "absolute"
  },
  ellipse33: {
    left: 3,
    width: 70,
    height: 70,
    position: "absolute",
    top: 3
  },
  icon4: {
    top: 16,
    left: 18,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  ellipse32Stack: {
    width: 75,
    height: 75
  },
  scrollArea2Row: {
    height: 84,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 7,
    marginRight: 17
  },
  ellipse: {
    top: 0,
    width: 303,
    height: 235,
    position: "absolute",
    left: 44
  },
  ellipse14: {
    top: 353,
    left: 12,
    width: 375,
    height: 58,
    position: "absolute"
  },
  rect2: {
    top: 382,
    left: 8,
    width: 391,
    height: 544,
    position: "absolute",
    backgroundColor: "rgba(225,186,85,1)"
  },
  scrollArea: {
    width: 343,
    height: 417,
    backgroundColor: "#E6E6E6",
    marginLeft: 15
  },
  scrollArea_contentContainerStyle: {
    height: 1850,
    width: 343
  },
  rect3: {
    width: 346,
    height: 1850,
    backgroundColor: "rgba(225,186,85,1)"
  },
  rect4: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 18,
    marginLeft: 23
  },
  rect5: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 21,
    marginLeft: 24
  },
  rect6: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 21,
    marginLeft: 24
  },
  rect7: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 24,
    marginLeft: 24
  },
  rect8: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 26,
    marginLeft: 24
  },
  rect9: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 24,
    marginLeft: 24
  },
  rect10: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 24,
    marginLeft: 24
  },
  rect11: {
    width: 297,
    height: 202,
    backgroundColor: "#E6E6E6",
    marginTop: 24,
    marginLeft: 24
  },
  rect12: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(156,112,3,1)"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 40,
    width: 46,
    marginTop: 5,
    marginLeft: 2
  },
  rect13: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(156,112,3,1)",
    marginLeft: 27
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 40,
    width: 37,
    marginTop: 5,
    marginLeft: 7
  },
  rect14: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(156,112,3,1)",
    marginLeft: 26
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 5,
    marginLeft: 5
  },
  rect12Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 47,
    marginLeft: 85,
    marginRight: 103
  },
  ellipse15: {
    top: 829,
    left: 0,
    width: 383,
    height: 134,
    position: "absolute"
  },
  rectStack: {
    width: 399,
    height: 963,
    marginTop: -106,
    marginLeft: -8
  }
});

export default NewsHome;

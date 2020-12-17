import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse, Path, Circle, Rect } from "react-native-svg";
import ApiCall from "../components/ApiCall";

function NewsHome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect10RowColumn}>
        <View style={styles.rect10Row}>
          <View style={styles.rect10}></View>
          <View style={styles.groupStack}>
            <View style={styles.group}>
              <View style={styles.ellipse48Stack}>
                <Svg viewBox="0 0 303.39 209.14" style={styles.ellipse48}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(234,205,131,1)"
                    cx={152}
                    cy={105}
                    rx={152}
                    ry={105}
                  ></Ellipse>
                </Svg>
                <Text style={styles.nieuwr}>Nieuwr.</Text>
              </View>
            </View>
            <View style={styles.group10}></View>
            <View style={styles.group5}>
              <View style={styles.endWrapperFiller}></View>
              <View style={styles.scrollArea4Row}>
                <View style={styles.scrollArea4}>
                  <ScrollView
                    horizontal={true}
                    contentContainerStyle={
                      styles.scrollArea4_contentContainerStyle
                    }
                  >
                    <Svg viewBox="0 0 70 70" style={styles.ellipse49}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse52}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse51}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse50}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse53}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse54}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse55}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse56}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse57}>
                      <Ellipse
                        stroke="rgba(152,105,45,1)"
                        strokeWidth={2}
                        fill="rgba(170,124,8,1)"
                        cx={35}
                        cy={35}
                        rx={34}
                        ry={34}
                      ></Ellipse>
                    </Svg>
                  </ScrollView>
                </View>
                <TouchableOpacity style={styles.button19} onPress={() => props.navigation.navigate("TopicPage")}>
                  <View style={styles.ellipse46Stack}></View>
                    <Svg viewBox="0 0 70 70" style={styles.ellipse46}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(152,105,45,1)"
                        cx={35}
                        cy={35}
                        rx={35}
                        ry={35}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 65 65" style={styles.ellipse47}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(170,124,8,1)"
                        cx={33}
                        cy={33}
                        rx={33}
                        ry={33}
                      ></Ellipse>
                    </Svg>
                    <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    {...props}
                    style={styles.icon4}
                    >
                      <Path fill="none" d="M0 0h256v256H0z" />
                      <Path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                        d="M40 128h176M128 40v176"
                      />
                    </Svg>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
       <View style={styles.scrollArea3}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea3_contentContainerStyle}
              >

       <ApiCall data={props}/>

       </ScrollView>
          </View>
      </View>
      <View style={styles.rect10RowColumnFiller}></View>
      <View style={styles.group11}>
        <View style={styles.rect11Filler}></View>
        <View style={styles.rect11}>
          <View style={styles.button23Stack}>
            <TouchableOpacity style={styles.button23}>
            <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
            style={styles.icon5}
          >
            <Path fill="none" d="M0 0h256v256H0z" />
            <Circle
              cx={128}
              cy={128}
              r={88}
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <Path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
              d="M128 20v40M20 128h40M128 236v-40M236 128h-40"
            />
            <Circle
              cx={128}
              cy={128}
              r={32}
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
          </Svg>
            </TouchableOpacity>
            <View style={styles.group12}>
              <View style={styles.group13}>
                <View style={styles.button25Filler}></View>
                <TouchableOpacity style={styles.button25}>
                    <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    {...props}
                    style={styles.icon7}
                  >
                      <Path fill="none" d="M0 0h256v256H0z" />
                      <Rect
                        x={40}
                        y={40}
                        width={176}
                        height={176}
                        rx={8}
                        strokeWidth={16}
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <Path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                        d="M176 24v32M80 24v32M40 88h176M92 127.997h28l-16 20a16 16 0 11-11.307 27.32M144 139.997l16-12v52"
                      />
                    </Svg>
                </TouchableOpacity>
              </View>
              <View style={styles.group13Filler}></View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SettingPage")}
                style={styles.button24}
              >
                <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                {...props}
                style={styles.icon6}
              >
                  <Path fill="none" d="M0 0h256v256H0z" />
                  <Path
                    d="M184.991 37.068L143.03 79.029l5.657 28.285 28.285 5.657 41.961-41.962.005-.002a64.025 64.025 0 01-89.882 81.034l.002-.003-56.086 64.933a24 24 0 01-33.942-33.942l64.932-56.085h-.002a64.025 64.025 0 0181.034-89.88z"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={16}
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(202,151,24,1)",
    borderWidth: 0,
    borderColor: "#000000"
  },
  rect10: {
    width: 116,
    height: 315,
    backgroundColor: "#E6E6E6"
  },
  group: {
    top: 0,
    width: 303,
    height: 209,
    position: "absolute",
    left: 55
  },
  ellipse48: {
    top: 0,
    width: 303,
    height: 209,
    position: "absolute",
    left: 0
  },
  nieuwr: {
    top: 121,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(197,142,42,1)",
    fontSize: 60,
    bottom: 16,
    left: 49
  },
  ellipse48Stack: {
    width: 303,
    flex: 1
  },
  group10: {
    top: 207,
    left: 19,
    width: 268,
    height: 100,
    position: "absolute"
  },
  group5: {
    top: 220,
    left: 0,
    height: 75,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row"
  },
  scrollArea4: {
    width: 249,
    height: 75,
    backgroundColor: "rgba(202,151,24,1)",
    marginRight: 6
  },
  scrollArea4_contentContainerStyle: {
    width: 249,
    height: 75,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  ellipse49: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginRight: 3
  },
  ellipse52: {
    width: 70,
    height: 70,
    margin: 3,
    alignSelf: "center",
    marginRight: 3
  },
  ellipse51: {
    width: 70,
    height: 70,
    padding: 0,
    margin: 3,
    alignSelf: "center",
    marginRight: 3
  },
  ellipse50: {
    width: 70,
    height: 70,
    padding: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginRight: 3,
    marginLeft: 3,
    alignSelf: "center"
  },
  ellipse53: {
    width: 70,
    height: 70,
    padding: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginRight: 3,
    marginLeft: 3,
    alignSelf: "center"
  },
  ellipse54: {
    width: 70,
    height: 70,
    padding: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginRight: 3,
    marginLeft: 3,
    alignSelf: "center"
  },
  ellipse55: {
    width: 70,
    height: 70,
    padding: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginRight: 3,
    marginLeft: 3,
    alignSelf: "center"
  },
  ellipse56: {
    width: 70,
    height: 70,
    padding: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginRight: 3,
    marginLeft: 3,
    alignSelf: "center"
  },
  ellipse57: {
    width: 70,
    height: 70,
    padding: 0,
    paddingRight: 0,
    paddingLeft: 0,
    marginRight: 3,
    marginLeft: 3,
    alignSelf: "center"
  },
  button19: {
    width: 75,
    height: 75
  },
  ellipse46: {
    top: 0,
    left: 0,
    width: 70,
    height: 70,
    position: "absolute"
  },
  ellipse47: {
    left: 3,
    width: 65,
    height: 65,
    position: "absolute",
    top: 3
  },
  icon4: {
    position: "absolute",
    color: "rgba(0,0,0,1)",
    padding: 10
  },
  ellipse46Stack: {
    width: 70,
    height: 70,
    marginTop: 5,
    marginLeft: 5
  },
  scrollArea4Row: {
    height: 75,
    flexDirection: "row",
    marginRight: 45
  },
  groupStack: {
    height: 307,
    flex: 1,
    marginLeft: 539,
    marginTop: 151
  },
  rect10Row: {
    height: 458,
    flexDirection: "row"
  },
  scrollArea3: {
    height: 538,
    backgroundColor: "rgba(225,186,85,1)",
    marginLeft: 655
  },
  scrollArea3_contentContainerStyle: {
    height: 10*(400+15) + 50 //An article height is 400 pixels, so 10 * (400 + 15 marginTop ) = 4150 + 50(extra spacing) = 4200. 
  },
  button20: {
    width: 316,
    height: 178,
    backgroundColor: "#E6E6E6",
    marginTop: 42,
    alignSelf: "center"
  },
  rect12: {
    width: 289,
    height: 96,
    backgroundColor: "rgba(179,182,81,1)",
    marginTop: 25,
    marginLeft: 16
  },
  button21: {
    width: 316,
    height: 178,
    backgroundColor: "#E6E6E6",
    marginTop: 29,
    alignSelf: "center"
  },
  button22: {
    width: 316,
    height: 178,
    backgroundColor: "#E6E6E6",
    marginTop: 30,
    alignSelf: "center"
  },
  rect10RowColumn: {
    marginTop: -239,
    marginLeft: -655
  },
  rect10RowColumnFiller: {
    flex: 1
  },
  group11: {
    height: 113,
    backgroundColor: "rgba(234,205,131,0)",
    borderRadius: 64,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  rect11Filler: {
    flex: 1
  },
  rect11: {
    width: 414,
    height: 100,
    backgroundColor: "rgba(234,205,131,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 0,
    borderColor: "#000000",
    alignSelf: "center"
  },
  button23: {
    top: 0,
    width: 50,
    position: "absolute",
    backgroundColor: "rgba(156,112,3,1)",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    left: 182
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  group12: {
    top: 0,
    left: 0,
    width: 331,
    height: 55,
    position: "absolute",
    flexDirection: "row"
  },
  group13: {
    width: 134,
    height: 55,
    borderRadius: 15,
    flexDirection: "row"
  },
  button25Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button25: {
    backgroundColor: "rgba(156,112,3,1)",
    justifyContent: "center",
    alignItems: "center",
    width: 46,
    borderRadius: 15
  },
  icon7: {
    color: "rgba(0,0,0,0.1)",
    fontSize: 40
  },
  group13Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button24: {
    width: 50,
    backgroundColor: "rgba(156,112,3,1)",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 15
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  button23Stack: {
    width: 331,
    flex: 1,
    marginBottom: 29,
    marginTop: 16
  }
});

export default NewsHome;

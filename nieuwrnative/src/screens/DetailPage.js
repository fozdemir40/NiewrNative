import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse, Path, Circle, Rect } from "react-native-svg";
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


function DetailPage({navigation}) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    AlfaSlabOne_400Regular 
  });
  if (!fontsLoaded) {
    return <Text>Loading..</Text>
  } else {
  const itemId = navigation.getParam('itemId')
  const imageUrlArticle = navigation.getParam('imageUrl')
  const titleArticle = navigation.getParam('titleArticle')
  const contentArticle = navigation.getParam('contentArticle')

  const article = {
    id: JSON.stringify(itemId),
    imageUrl: imageUrlArticle,
    title: JSON.stringify(titleArticle),
    content: JSON.stringify(contentArticle)
  }

  return (
    <View style={styles.container}>
    <View style={styles.scrollAreaColumn}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.group8}>
            <View style={styles.group1}>
              <View style={styles.imageStackStack}>
                <View style={styles.imageStack}>
                  <Image
                    source={{uri: article.imageUrl}}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <View style={styles.group2}>
                    <Text style={{
                      
                      color: "#121212",
                      fontSize: 14,
                      marginTop: 21,
                      alignSelf: "center",
                      fontFamily: "Roboto_700Bold",}}>
                      {article.title}
                    </Text>
                  </View>
                </View>
                <Text style={{
                  top: 260,
                  left: 0,
                  position: "absolute",
                  color: "#121212",
                  textAlign: "left",
                  width: 256,
                  height: 270,
                  fontFamily: "Roboto_400Regular",}}>
                  {article.content}
                </Text>
                <Svg
                xmlns="http://www.w3.org/2000/svg"
                style={styles.icon1}
                viewBox="0 0 256 256"
              >
                <Path fill="none" d="M0 0h256v256H0z" />
                <Circle
                  cx={64}
                  cy={128}
                  r={32}
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={16}
                />
                <Circle
                  cx={176}
                  cy={200}
                  r={32}
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={16}
                />
                <Circle
                  cx={176}
                  cy={56}
                  r={32}
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
                  d="M149.084 73.303l-58.171 37.396M90.913 145.301l58.171 37.396"
                />
              </Svg>
              </View>
            </View>
            <View style={styles.group7}>
              <View style={styles.group3}>
                <View style={styles.rect2Stack}>
                  <View style={styles.rect2}>
                    <Text style={{
                      color: "#121212",
                      marginTop: 5,
                      marginLeft: 34,
                      fontFamily: "Roboto_700Bold",}}>
                      Rotterdam: 36 minuten geleden
                    </Text>
                    <Text style={{
                    color: "#121212",
                    marginLeft: 34,
                    fontFamily: "Roboto_400Regular_Italic",}}>
                      Bron: Regiogroei A
                    </Text>
                  </View>
                  <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  style={styles.icon2}
                >
                  <Path fill="none" d="M0 0h256v256H0z" />
                  <Circle
                    cx={128}
                    cy={104}
                    r={32}
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={16}
                  />
                  <Path
                    d="M208 104c0 72-80 128-80 128s-80-56-80-128a80 80 0 01160 0z"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={16}
                  />
                </Svg>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.regioRow}>
        <Text style={{
          color: "rgba(170,105,8,1)",
          fontSize: 50,
          fontFamily: "Roboto_700Bold",}}>Regio</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsHome')}
          style={styles.button4}
        >
          <Text style={{
          color: "rgba(255,255,255,1)",
          fontSize: 20,
          marginTop: 7,
          marginLeft: 28,
          fontFamily: "Roboto_700Bold",}}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.scrollAreaColumnFiller}></View>
    <View style={styles.group4}>
      <View style={styles.rect3Filler}></View>
      <View style={styles.rect3}>
      <View style={styles.button23Stack}>
      <TouchableOpacity style={styles.button23}>
      <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
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
          <View style={styles.group12}>
            <View style={styles.group13}>
              <View style={styles.button25Filler}></View>
              <TouchableOpacity style={styles.button25} onPress={() => navigation.navigate("RegionSelect")}>
                <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
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
            </View>
            <View style={styles.group13Filler}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("SettingPage")}
              style={styles.button24}
            >
              <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
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
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(202,151,24,1)"
  },
  button23Stack: {
    width: 331,
    flex: 1,
    marginBottom: 29,
    marginTop: 16
  },
  button25: {
    backgroundColor: "rgba(156,112,3,1)",
    justifyContent: "center",
    alignItems: "center",
    width: 46,
    borderRadius: 15
  },
  button24: {
    width: 50,
    backgroundColor: "rgba(156,112,3,1)",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 15
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  icon6: {
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
  group13Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(0,0,0,0.1)",
    fontSize: 40
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
  back1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 7,
    marginLeft: 28
  },
  regioRow: {
    height: 69,
    flexDirection: "row",
    marginTop: -667,
    marginLeft: 39,
    marginRight: 25
  },
  scrollArea: {
    height: 581,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 33,
    borderWidth: 0,
    borderColor: "#000000",
    marginTop: 86
  },
  scrollArea_contentContainerStyle: {
    height: 581
  },
  group8: {
    height: 148,
    marginTop: 46
  },
  group1: {
    width: 270,
    height: 147,
    marginTop: 1,
    alignSelf: "center"
  },
  image: {
    top: 0,
    left: 0,
    width: 262,
    height: 200,
    position: "absolute"
  },
  group2: {
    top: 174,
    left: 0,
    width: 256,
    height: 279,
    position: "absolute"
  },
  e2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 14,
    marginTop: 21,
    alignSelf: "center"
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 262,
    height: 453,
    position: "absolute"
  },
  loremIpsum: {
    top: 260,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "left",
    width: 256,
    height: 270
  },
  icon1: {
    top: 403,
    left: 256,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 50
  },
  imageStackStack: {
    width: 306,
    height: 490,
    marginLeft: 7
  },
  group7: {
    width: 395,
    height: 43,
    marginTop: 301
  },
  group3: {
    width: 239,
    height: 43,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: -46,
    marginLeft: 60
  },
  rect2: {
    top: 0,
    left: 0,
    width: 239,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rotterdam: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 5,
    marginLeft: 34
  },
  bronRegiogroeiA: {
    fontFamily: "roboto-italic",
    color: "#121212",
    marginLeft: 34
  },
  icon2: {
    height: 30,
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    padding: 5
  },
  rect2Stack: {
    width: 239,
    height: 44
  },
  regio: {
    fontFamily: "roboto-700",
    color: "rgba(170,105,8,1)",
    fontSize: 50
  },
  scrollAreaColumn: {
    marginTop: 90
  },
  scrollAreaColumnFiller: {
    flex: 1
  },
  group4: {
    height: 113,
    backgroundColor: "rgba(234,205,131,0)",
    borderRadius: 64
  },
  rect3Filler: {
    flex: 1
  },
  rect3: {
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
    flexDirection: "row",
    alignSelf: "center"
  },
  group6: {
    width: 134,
    height: 55,
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 16
  },
  button3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    backgroundColor: "rgba(156,112,3,1)",
    justifyContent: "center",
    alignItems: "center",
    width: 46,
    borderRadius: 15
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  button1: {
    width: 50,
    backgroundColor: "rgba(156,112,3,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 16,
    marginBottom: 29
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  group6Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  button2: {
    width: 50,
    backgroundColor: "rgba(156,112,3,1)",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 15,
    marginRight: 83,
    marginTop: 16
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  }
});

export default DetailPage;

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function DetailPage({navigation}) {
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
                    <Text style={styles.e2}>
                      {article.title}
                    </Text>
                  </View>
                </View>
                <Text style={styles.loremIpsum}>
                  {article.content}
                </Text>
                <FeatherIcon
                  name="share-2"
                  style={styles.icon1}
                ></FeatherIcon>
              </View>
            </View>
            <View style={styles.group7}>
              <View style={styles.group3}>
                <View style={styles.rect2Stack}>
                  <View style={styles.rect2}>
                    <Text style={styles.rotterdam}>
                      Rotterdam: 36 minuten geleden
                    </Text>
                    <Text style={styles.bronRegiogroeiA}>
                      Bron: Regiogroei A
                    </Text>
                  </View>
                  <EntypoIcon
                    name="location-pin"
                    style={styles.icon2}
                  ></EntypoIcon>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.regioRow}>
        <Text style={styles.regio}>Regio</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsHome')}
          style={styles.button4}
        >
          <Text style={styles.back1}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.scrollAreaColumnFiller}></View>
    <View style={styles.group4}>
      <View style={styles.rect3Filler}></View>
      <View style={styles.rect3}>
        <View style={styles.group6}>
          <View style={styles.button3Filler}></View>
          <TouchableOpacity style={styles.button3}>
            <FontAwesomeIcon
              name="map-o"
              style={styles.icon5}
            ></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.group6Filler}>
          <TouchableOpacity style={styles.button1}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon3}
            ></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button2}>
          <FeatherIcon name="settings" style={styles.icon4}></FeatherIcon>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(202,151,24,1)"
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
    top: 230,
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
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 7
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
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
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

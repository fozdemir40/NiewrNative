import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";

function TopicPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.preferences1Row}>
        <Text style={styles.preferences1}>Choose your topic trends.</Text>
        <Text style={styles.preferences2}>Choose your topic trends.</Text>
      </View>
      <Text style={styles.reccomendedTrends}>Reccomended trends:</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button2}></TouchableOpacity>
      </View>
      <CupertinoSearchBarBasic
        inputBox="#EFEFF4"
        inputBox="rgba(231,229,229,1)"
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <TouchableOpacity style={styles.button4}>
            <Text style={styles.sport}>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button5}>
            <Text style={styles.sport1}>Gaming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6}>
            <Text style={styles.music}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button7}>
            <Text style={styles.politiek}>Politiek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button8}>
            <Text style={styles.films}>Films</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button9}>
            <Text style={styles.buitenland}>Buitenland</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button10}>
            <Text style={styles.anime}>Anime</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button11}>
            <Text style={styles.educatie}>Educatie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button12}>
            <Text style={styles.sport8}>Science</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button13}>
            <Text style={styles.feestdagen}>Feestdagen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button14}>
            <Text style={styles.business}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button15}>
            <Text style={styles.hobbies}>Hobbies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button16}>
            <Text style={styles.tv}>TV</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Text style={styles.chosenTopics}>Chosen topics:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,205,131,1)"
  },
  preferences1: {
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 50,
    width: 286,
    height: 199
  },
  preferences2: {
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 50,
    width: 286,
    height: 199,
    marginLeft: 138
  },
  preferences1Row: {
    height: 199,
    flexDirection: "row",
    marginTop: 53,
    marginLeft: 30,
    marginRight: -326
  },
  reccomendedTrends: {
    fontFamily: "roboto-700",
    color: "rgba(210,164,51,1)",
    fontSize: 15,
    width: 177,
    height: 20,
    marginTop: 22,
    marginLeft: 30
  },
  button: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5
  },
  button2: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginLeft: 29
  },
  buttonRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 30,
    marginRight: 127
  },
  cupertinoSearchBarBasic: {
    height: 44,
    width: 276,
    backgroundColor: "rgba(234,205,131,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 5,
      width: 0
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginTop: 14,
    marginLeft: 69
  },
  scrollArea: {
    width: 356,
    height: 277,
    backgroundColor: "rgba(234,205,131,1)",
    marginTop: 24,
    marginLeft: 29
  },
  scrollArea_contentContainerStyle: {
    height: 277,
    width: 356,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "baseline"
  },
  button4: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  sport: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button5: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2,
    justifyContent: "center"
  },
  sport1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center"
  },
  button6: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  music: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button7: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  politiek: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button8: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  films: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button9: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  buitenland: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button10: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  anime: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button11: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  educatie: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button12: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  sport8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button13: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  feestdagen: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button14: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  business: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button15: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  hobbies: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button16: {
    width: 114,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.15,
    shadowRadius: 5,
    margin: 2
  },
  tv: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  chosenTopics: {
    fontFamily: "roboto-700",
    color: "rgba(210,164,51,1)",
    fontSize: 15,
    width: 120,
    height: 20,
    marginLeft: 30
  }
});

export default TopicPage;

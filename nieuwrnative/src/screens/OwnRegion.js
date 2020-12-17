import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function OwnRegion(props) {

  return (
    <View style={styles.container}>
      <View style={styles.selectYourLocationColumn}>
        
        
        <Text style={styles.selectYourLocation}>Select Your Location</Text>
        <View style={styles.scrollArea1}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <TouchableOpacity style={styles.button3}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Flevoland") &&  props.navigation.navigate("RegionSelect")}  style={styles.flevoland}>Flevoland</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Drenthe") &&  props.navigation.navigate("RegionSelect")} style={styles.zuidHolland}>Drenthe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button5}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Friesland") &&  props.navigation.navigate("RegionSelect")} style={styles.friesland}>Friesland</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button6}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Gelderland") &&  props.navigation.navigate("RegionSelect")} style={styles.gelderland3}>Gelderland</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button7}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Groningen") &&  props.navigation.navigate("RegionSelect")} style={styles.groningen}>Groningen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button8}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Noord-Holland") &&  props.navigation.navigate("RegionSelect")} style={styles.noordHolland}>Noord-Holland</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button9}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Overijssel") &&  props.navigation.navigate("RegionSelect")} style={styles.overijssel}>Overijssel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button10}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Utrecht") &&  props.navigation.navigate("RegionSelect")} style={styles.utrecht}>Utrecht</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button13}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Noord-Brabant") &&  props.navigation.navigate("RegionSelect")} style={styles.noordBrabant}>Noord-Brabant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button14}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Utrecht") &&  props.navigation.navigate("RegionSelect")} style={styles.utrecht2}>Utrecht</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button15}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Zuid-Holland") &&  props.navigation.navigate("RegionSelect")} style={styles.zuidHolland2}>Zuid-Holland</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button16}>
              <Text onPress={() => AsyncStorage.setItem('@region', "Limburg") &&  props.navigation.navigate("RegionSelect")} style={styles.limburg2}>Limburg</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
      onPress={() => props.navigation.navigate("SettingPage")}
      style={styles.button20}
    >
      <Text style={styles.back1}>Back</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,205,131,1)"
  },
  selectYourLocation: {
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 60,
    width: 322,
    height: 239,
    marginTop: 143,
    marginLeft: 22
  },
  scrollArea1: {
    width: 356,
    height: 357,
    backgroundColor: "rgba(234,205,131,1)",
    marginTop: 108,
    marginLeft: 37
  },
  scrollArea1_contentContainerStyle: {
    height: 357,
    width: 356,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "baseline"
  },
  button3: {
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
  flevoland: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
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
    margin: 2,
    justifyContent: "center"
  },
  zuidHolland: {
    fontFamily: "roboto-regular",
    color: "#121212",
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
    margin: 2
  },
  friesland: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
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
  gelderland3: {
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
  groningen: {
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
  noordHolland: {
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
  overijssel: {
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
  utrecht: {
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
  flevoland2: {
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
  gelderland4: {
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
  noordBrabant: {
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
  utrecht2: {
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
  zuidHolland2: {
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
  limburg2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button17: {
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
  noordBrabant2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button18: {
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
  limburg: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  button19: {
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
  gelderland5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    alignSelf: "center"
  },
  group1: {
    width: 310,
    height: 34,
    marginTop: -400,
    marginLeft: 37
  },
  selectRegion1: {
    top: 0,
    left: 9,
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(197,142,42,1)",
    fontSize: 60,
    width: 322,
    height: 153
  },
  changeableInPref1: {
    top: 119,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(210,164,51,1)",
    fontSize: 15,
    width: 310,
    height: 34
  },
  selectRegion1Stack: {
    width: 331,
    height: 153,
    marginTop: -177,
    marginLeft: -9
  },
  button20: {
    width: 100,
    height: 36,
    backgroundColor: "rgba(202,151,24,1)",
    borderRadius: 24,
    marginTop: -800,
    marginLeft: 22
  },
  back1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 7,
    marginLeft: 28
  }
});

export default OwnRegion;

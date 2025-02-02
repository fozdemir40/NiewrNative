import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
// import * as Font from "expo-font";
import DetailPage from "./src/screens/DetailPage";
import NewsHome from "./src/screens/NewsHome";
import SettingPage from "./src/screens/SettingPage";
import StartPage from "./src/screens/StartPage";
import TopicPage from "./src/screens/TopicPage";
import RegionSelect from "./src/screens/RegionSelect";
import OwnRegion from "./src/screens/OwnRegion";
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

const DrawerNavigation = createDrawerNavigator({
  StartPage: StartPage,
  NewsHome: NewsHome,
  RegionSelect: RegionSelect,
  DetailPage: DetailPage,
  SettingPage: SettingPage,
  TopicPage: TopicPage,
  OwnRegion: OwnRegion
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    StartPage: StartPage,
    NewsHome: NewsHome,
    RegionSelect: RegionSelect,
    DetailPage: DetailPage,
    SettingPage: SettingPage,
    TopicPage: TopicPage,
    OwnRegion: OwnRegion
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
 

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    AlfaSlabOne_400Regular 
  });

  if (!fontsLoaded) {
    return (
      <AppLoading/>
    );
  } else {
    return fontsLoaded ? <AppContainer /> : <AppLoading />;
  }
}


// async function loadResourcesAsync() {
//   await Promise.all([
//     Font.loadAsync({
//       "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
//       "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
//       "roboto-italic": require("./src/assets/fonts/roboto-italic.ttf"),
//       "alfa-slab-one-regular": require("./src/assets/fonts/alfa-slab-one-regular.ttf")
//     })
//   ]);
// }
// function handleLoadingError(error) {
//   console.warn(error);
// }

// function handleFinishLoading(setLoadingComplete) {
//   setLoadingComplete(true);
// }

export default App;

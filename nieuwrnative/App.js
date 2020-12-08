import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import DetailPage from "./src/screens/DetailPage";
import NewsHome from "./src/screens/NewsHome";
import SettingPage from "./src/screens/SettingPage";
import StartPage from "./src/screens/StartPage";
import TopicPage from "./src/screens/TopicPage";
import RegionSelect from "./src/screens/RegionSelect";

const DrawerNavigation = createDrawerNavigator({
  DetailPage: DetailPage,
  NewsHome: NewsHome,
  SettingPage: SettingPage,
  StartPage: StartPage,
  TopicPage: TopicPage,
  RegionSelect: RegionSelect
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    DetailPage: DetailPage,
    NewsHome: NewsHome,
    SettingPage: SettingPage,
    StartPage: StartPage,
    TopicPage: TopicPage,
    RegionSelect: RegionSelect
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-italic": require("./src/assets/fonts/roboto-italic.ttf"),
      "alfa-slab-one-regular": require("./src/assets/fonts/alfa-slab-one-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;

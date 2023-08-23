import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationContext } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FullAppNavigator } from "./MainNavigator";
import { MainDrawerNavigator } from "./DrawerMainNav";
import * as Linking from "expo-linking";
import { ActivityIndicator } from "react-native";
import { Platform } from "react-native";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

const AppNavigator = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  const prefix = Linking.createURL("/");

  // const navigationContext = useContext(NavigationContext);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Intro: "intro",
        Home: "home",
        Profile: "profile",
      },
    },
  };

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  console.log(initialState);

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
      linking={linking}
    >
      <FullAppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

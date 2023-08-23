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

  const prefix = Linking.createURL("myapp://");

  const config = {
    screens: {
      Main: {
        path: "main",
        screens: {
          Intro: "intro",
          Drawer: {
            path: "drawer",
            screens: {
              Home: "home",
              Profile: "profile",
            },
          },
        },
      },
    },
  };

  // const navigationContext = useContext(NavigationContext);

  const linking = {
    prefixes: [prefix], // Replace with your app's actual prefixes
    config,
  };

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        console.log(initialUrl);

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
      onStateChange={(state) => {
        console.log(state);
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
      }}
      linking={linking}
      initialState={initialState}
    >
      <FullAppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

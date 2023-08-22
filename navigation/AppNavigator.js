import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationContext } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FullAppNavigator } from "./MainNavigator";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

const AppNavigator = () => {
  const [initialState, setInitialState] = useState();

  const navigationContext = useContext(NavigationContext);
  const linking = {
    prefixes: [
      "nav://",
      "https://nav.com",
      "https://nav/intro",
      "https://nav/auth",
      "https://nav/home",
      "https://nav/profile",
    ],
    config: {
      screens: {
        Intro: "intro",
        Login: "auth",
        Profile: "profile",
        Home: "",
      },
    },
  };

  useEffect(() => {
    const restoreState = async () => {
      const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
      const state = savedStateString ? JSON.parse(savedStateString) : undefined;
      console.log(savedStateString);
      if (state !== undefined) {
        setInitialState(state);
      }
    };

    restoreState();
  }, []);

  console.log(initialState);

  // if (!isReady) {
  //   return <Loader />;
  // }

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading...</Text>}
      context={navigationContext}
      initialState={initialState}
      onStateChange={(state) => setInitialState(state)}
    >
      <FullAppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

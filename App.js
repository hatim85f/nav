import { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import NavigationContext from "./navigation/NavigationContext";

export default function App(props) {
  const navigationContext = {};

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContext.Provider value={navigationContext}>
          <AppNavigator />
        </NavigationContext.Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

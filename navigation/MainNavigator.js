import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/auth/IntroScreen";
import { MainDrawerNavigator } from "./DrawerMainNav";

const MainNavigator = createStackNavigator();

export const FullAppNavigator = () => {
  return (
    <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
      <MainNavigator.Screen
        name="Intro"
        component={IntroScreen}
        options={{ title: "Intro" }}
      />
      <MainNavigator.Screen
        name="Home"
        component={MainDrawerNavigator}
        options={{ title: "Home" }}
      />
    </MainNavigator.Navigator>
  );
};

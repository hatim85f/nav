import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/auth/IntroScreen";
import { MainDrawerNavigator } from "./DrawerMainNav";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

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
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <MainNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </MainNavigator.Navigator>
  );
};

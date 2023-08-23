import { createStackNavigator } from "@react-navigation/stack";
import { HomeTab } from "./NewTab";
import SettingsScreen from "../screens/settings/SettingsScreen";
import IntroScreen from "../screens/auth/IntroScreen";

const Stack = createStackNavigator();

export const NewNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
    </Stack.Navigator>
  );
};

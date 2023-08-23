import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";

const MainHome = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <MainHome.Navigator screenOptions={{ headerShown: false }}>
      <MainHome.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
    </MainHome.Navigator>
  );
};

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "../screens/profile/ProfileScreen";
import FeedScreen from "../screens/feed/FeedScreen";

const Tab = createMaterialBottomTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
};

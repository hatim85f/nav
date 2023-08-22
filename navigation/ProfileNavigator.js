import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/profile/ProfileScreen";

const ProfileNav = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileNav.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNav.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "Pofile" }}
      />
    </ProfileNav.Navigator>
  );
};

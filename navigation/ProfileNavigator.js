import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { StackRouter, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const ProfileNav = createStackNavigator();

const MyProfileRouter = (options) => {
  const router = StackRouter(options);

  return {
    ...router,
    getStateForAction(state, action, options) {
      const result = router.getStateForAction(state, action, options);

      if (
        result != null &&
        result.index > state.index &&
        state.routes[state.index].params?.isEditing
      ) {
        return state;
      }

      return result;
    },
  };
};

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

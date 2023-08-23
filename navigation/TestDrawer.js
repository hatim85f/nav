import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const TestDrawer = createDrawerNavigator();

export const MainTestDrawer = () => {
  return (
    <TestDrawer.Navigator
      drawerContent={(props) => {
        <ScrollView scrollEnabled scrollEventThrottle={16}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItemList {...props}>
              <Button
                title="Just Test"
                buttonStyle={{
                  width: "65%",
                  borderRadius: 25,
                  backgroundColor: "#ff0055",
                }}
              />
            </DrawerItemList>
          </SafeAreaView>
        </ScrollView>;
      }}
      screenOptions={{
        drawerInactiveBackgroundColor: "white",
        drawerActiveBackgroundColor: "blue",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "blue",
        drawerPosition: "left",
        drawerType: "slide",
        drawerStyle: {
          width: "15%",
          paddingTop: 15,
        },
        drawerAllowFontScaling: true,
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 18,
        },
        drawerIcon: { focused: true },
        drawerItemStyle: {
          borderRadius: 15,
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "black",
          height: 25,
          marginTop: 5,
        },
      }}
    >
      <TestDrawer.Screen name="Test1" component={HomeScreen} />
      <TestDrawer.Screen name="Test2" component={ProfileScreen} />
    </TestDrawer.Navigator>
  );
};

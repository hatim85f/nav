import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { HomeNavigator } from "./HomeNavigator";
import { ProfileNavigator } from "./ProfileNavigator";

const MainDrawer = createDrawerNavigator();

export const MainDrawerNavigator = () => {
  return (
    <MainDrawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItemList
              {...props}
              itemStyle={(focused) => ({
                ...styles.drawerItem,
                color: focused ? "white" : "black",
              })}
            />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerInactiveBackgroundColor: "white",
        drawerActiveTintColor: "rgba(116, 41, 255, 1)",
        drawerPosition: "left",
        drawerType: "slide",
        drawerStyle: {
          width: wp("15%"),
          paddingTop: hp("3%"),
        },
        drawerAllowFontScaling: true,
        headerShown: false,
        drawerLabelStyle: {
          fontSize: wp("1%"),
        },
        drawerIcon: { focused: true },
        drawerActiveBackgroundColor: "blue",
        drawerItemStyle: {
          borderRadius: 15,
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "black",
          height: hp("5.5%"),
          marginTop: hp("0.5%"),
        },
      }}
    >
      <MainDrawer.Screen
        name="Dashboard"
        component={HomeNavigator}
        options={{
          drawerInactiveTintColor: "black",
          drawerActiveTintColor: "white",
          drawerIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={40}
                color={focused ? "white" : "black"}
              />
            );
          },
        }}
      />
      <MainDrawer.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          drawerInactiveTintColor: "black",
          drawerActiveTintColor: "white",
          drawerIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={40}
                color={focused ? "white" : "black"}
              />
            );
          },
        }}
      />
    </MainDrawer.Navigator>
  );
};

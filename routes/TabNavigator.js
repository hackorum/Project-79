import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/bottomTabs/HomeScreen";
import ExchangeScreen from "../screens/bottomTabs/ExchangeScreen";

export const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Exchange: {
    screen: ExchangeScreen,
  },
});

import React from "react";
import LoginScreen from "./screens/auth/LoginScreen";
import { LogBox } from "react-native";
import _ from "lodash";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { TabNavigator } from "./routes/TabNavigator";

LogBox.ignoreLogs(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  TabNavigator: {
    screen: TabNavigator,
  },
});

export default createAppContainer(SwitchNavigator);

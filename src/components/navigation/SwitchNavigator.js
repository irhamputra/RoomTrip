import { createSwitchNavigator } from "react-navigation";
import { TabNavigator } from "./TabNavigator";
import { AuthNavigator } from "./AuthNavigator";

export const SwitchNavigator = createSwitchNavigator(
  {
    App: TabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Auth"
  }
);

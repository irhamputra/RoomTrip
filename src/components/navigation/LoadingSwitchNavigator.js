import { createSwitchNavigator } from "react-navigation";
import Loading from "../../../screens/LoadingScreen";
import { TabNavigator } from "./TabNavigator";
import { AuthNavigator } from "./AuthNavigator";

export const AppLoadingSwitch = createSwitchNavigator(
  {
    Loading: {
      screen: Loading
    },
    Auth: {
      screen: AuthNavigator
    },
    Home: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: "Loading"
  }
);

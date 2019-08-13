import { createStackNavigator } from "react-navigation";

import Home from '../screen/home'
import Login from '../screen/login'


const AppNavigator = createStackNavigator({
    Login: Login,
    Home: Home
  }, {
    initialRouteName: "Login",
    headerMode: 'none'
  });

export default AppNavigator
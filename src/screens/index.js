import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './LoginScreen'
import SplashScreen from './SplashScreen'

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  }, {
    header: null,
  },
)

// const AppStack = createStackNavigator({})

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthStack,
  }, {
    initialRouteName: 'Splash',
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer

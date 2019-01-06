import React from 'react'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './LoginScreen'
import SplashScreen from './SplashScreen'
import MainScreen from './MainScreen'
import { backgroundColor } from '../constants/theme'
import Search from '../components/searchInput'

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  }, {
    header: null,
  },
)

const AppStack = createStackNavigator(
  {
    Main: MainScreen,
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor,
      },
      headerTitle: <Search />
    },
  },
)

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthStack,
    App: AppStack,
  }, {
    initialRouteName: 'Splash',
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer

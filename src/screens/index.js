import React from 'react'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from './SplashScreen'
import MainScreen from './Main'
import { headerBackgroundColor } from '../constants/theme'
import Search from '../components/searchInput'

const AppStack = createStackNavigator(
  {
    Main: MainScreen,
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: headerBackgroundColor,
      },
      headerTitle: <Search />,
    },
  },
)

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
  }, {
    initialRouteName: 'Splash',
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer

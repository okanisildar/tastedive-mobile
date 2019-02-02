import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './src/reducers'
import Navigation from './src/screens'
import images from './src/constants/images'
import { headerBackgroundColor } from './src/constants/theme'
import cacheImages from './src/utils/cacheImage'

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))

class App extends React.Component {
  state = {
    isReady: false,
  }

  componentDidMount() {
    this.cacheAssets()
  }

  cacheAssets = async () => {
    const imageAssets = cacheImages(Object.values(images))
    await Promise.all([...imageAssets])
    this.setState({ isReady: true })
  }

  render() {
    const { isReady } = this.state
    if (!isReady) {
      return (
        <View style={{ flex: 1, backgroundColor: headerBackgroundColor }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App

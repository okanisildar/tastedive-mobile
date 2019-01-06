import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import Navigation from './src/screens'
import images from './src/constants/images'
import { backgroundColor } from './src/constants/theme'
import cacheImages from './src/utils/cacheImage'

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
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, backgroundColor }}>
        <Navigation />
      </View>
    )
  }
}

export default App

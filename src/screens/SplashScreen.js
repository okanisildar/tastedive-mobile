import React, { Component } from 'react'
import { View, Image } from 'react-native'
import images from '../constants/images'

class Splash extends Component {
  state = {}

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image source={images.logo} style={{ alignSelf: 'center' }} />
      </View>
    )
  }
}

export default Splash

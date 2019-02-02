import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import images from '../constants/images'
import { headerBackgroundColor } from '../constants/theme'

class Splash extends Component {
  state = {}

  componentDidMount() {
    // Temporary until I have real login
    this.checkAuth()
  }

  checkAuth = () => {
    const { navigation } = this.props
    setTimeout(() => {
      navigation.navigate('Main')
    }, 1000)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: headerBackgroundColor }}>
        <Image source={images.logo} style={{ alignSelf: 'center' }} />
      </View>
    )
  }
}

Splash.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Splash

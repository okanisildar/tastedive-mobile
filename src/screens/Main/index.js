import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

class Main extends Component {
  state = {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
    )
  }
}

export default Main

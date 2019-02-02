import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import callApi from '../../api'

class Main extends Component {
  state = {}

  componentDidMount() {
    callApi()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
    )
  }
}

export default Main

import React from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction').then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    )
  }
}

export default App

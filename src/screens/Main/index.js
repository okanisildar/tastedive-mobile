import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'
import * as actions from '../../actions'

class Main extends Component {
  componentDidMount = async () => {
    const { getAll } = this.props
    await getAll()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
    )
  }
}

Main.propTypes = {
  getAll: PropTypes.func.isRequired,
}

const mapStateToProps = ({ allKind }) => ({
  all: allKind,
})

export default connect(mapStateToProps, actions)(Main)

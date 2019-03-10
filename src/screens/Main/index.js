import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'
import * as actions from '../../actions'
import ListItem from '../../components/listItem'

class Main extends Component {
  componentDidMount = async () => {
    const { getAll } = this.props
    //await getAll()
  }

  renderItem = ({ item }) => (
    <ListItem item={item} />
  )

  render() {
    const { all } = this.props
    return (
      <View style={styles.container}>
        {all
          ? (
            <FlatList
              data={all}
              keyExtractor={item => item.yID}
              renderItem={this.renderItem}
            />
          )
          : <ActivityIndicator size="large" />
        }
      </View>
    )
  }
}

Main.propTypes = {
  getAll: PropTypes.func.isRequired,
  all: PropTypes.arrayOf(Object),
}

Main.defaultProps = {
  all: [],
}

const mapStateToProps = ({ allKind }) => ({
  all: allKind.all,
})

export default connect(mapStateToProps, actions)(Main)

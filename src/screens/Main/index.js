import React, { Component } from 'react'
import {
  View,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'
import * as actions from '../../actions'
import ListItem from '../../components/listItem'

class Main extends Component {
  state = {
    limit: 10,
  }

  componentDidMount = async () => {
    const { getAll } = this.props
    await getAll()
  }

  renderItem = ({ item }) => (
    <ListItem item={item} />
  )

  renderFooter = (loading) => {
    const { all } = this.props
    return (all.length > 0 && !loading && (
      <Button
        style={styles.buttonStyle}
        color="#000"
        title="Load More"
        onPress={this.getMoreData}
      />
    )
    )
  }

  getMoreData = () => {
    let { limit } = this.state
    const { getAll } = this.props
    this.setState({ limit: limit += 10 })
    getAll({ limit })
  }

  render() {
    const { all, loading } = this.props
    return (
      <View style={styles.container}>
        {all.length > 0
          ? (
            <FlatList
              data={all}
              keyExtractor={item => item.yID}
              renderItem={this.renderItem}
              ListFooterComponent={this.renderFooter(loading)}
            />
          )
          : <ActivityIndicator style={styles.activityIndicatorStyle} size="large" />
        }
      </View>
    )
  }
}

Main.propTypes = {
  getAll: PropTypes.func.isRequired,
  all: PropTypes.arrayOf(Object),
  loading: PropTypes.bool,
}

Main.defaultProps = {
  all: [],
  loading: false,
}

const mapStateToProps = ({ allKind }) => ({
  all: allKind.all,
  loading: allKind.loading,
})

export default connect(mapStateToProps, actions)(Main)

import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Item, Input, Icon } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import images from '../../constants/images'
import styles from './styles'
import { searchInputTextColor } from '../../constants/theme'
import * as actions from '../../actions'

class Search extends Component {
  state = {
    searchInputStyle: styles.searchInput,
    iconContainerStyle: styles.iconContainerStyle,
    params: {
      q: '',
    },
  }

  onFocus = () => {
    this.setState({
      searchInputStyle: styles.searchInputHover,
      iconContainerStyle: styles.hoverIconContainerStyle,
    })
  }

  onBlur = () => {
    this.setState({
      searchInputStyle: styles.searchInput,
    })
  }

  onPress = () => {
    const { params } = this.state
    const { q } = params
    const { getAll } = this.props
    getAll({ q })
  }

  onChangeHandler = (e) => {
    this.setState({
      params: {
        q: e,
      },
    })
  }

  render() {
    const { searchInputStyle, iconContainerStyle } = this.state
    const { searchInputContainer, iconStyle, logoStyle } = styles
    return (
      <Item style={searchInputContainer}>
        <Image source={images.logo} style={logoStyle} resizeMode="contain" />
        <Input
          onChangeText={e => this.onChangeHandler(e)}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          style={searchInputStyle}
          placeholder="Bands, movies, TV shows, authors or games…"
          placeholderTextColor={searchInputTextColor}
        />
        <View style={iconContainerStyle}>
          <Icon
            onPress={this.onPress}
            style={iconStyle}
            type="Ionicons"
            name="ios-search"
          />
        </View>
      </Item>
    )
  }
}

Search.propTypes = {
  getAll: PropTypes.func.isRequired,
}

export default connect(null, actions)(Search)

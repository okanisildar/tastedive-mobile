import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Item, Input, Icon } from 'native-base'
import images from '../../constants/images'
import styles from './styles'
import { searchInputTextColor } from '../../constants/theme'

class Search extends Component {
  state = {
    searchInputStyle: styles.searchInput,
    iconContainerStyle: styles.iconContainerStyle,
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

  render() {
    const { searchInputStyle, iconContainerStyle } = this.state
    const { searchInputContainer, iconStyle, logoStyle } = styles
    return (
      <Item style={searchInputContainer}>
        <Image source={images.logo} style={logoStyle} resizeMode="contain" />
        <Input
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          style={searchInputStyle}
          placeholder="Bands, movies, TV shows, authors or games…"
          placeholderTextColor={searchInputTextColor}
        />
        <View style={iconContainerStyle}>
          <Icon
            style={iconStyle}
            type="Ionicons"
            name="ios-search"
          />
        </View>
      </Item>
    )
  }
}

export default Search

import React, { Component } from 'react'
import { View } from 'react-native'
import { Item, Input, Icon } from 'native-base'
import styles from './styles'
import { searchInputTextColor } from '../../constants/theme'

class Search extends Component {
  state = {
    searchInputStyle: styles.searchInput,
  }

  onFocus = () => {
    this.setState({
      searchInputStyle: styles.searchInputHover,
    })
  }

  onBlur = () => {
    this.setState({
      searchInputStyle: styles.searchInput,
    })
  }

  render() {
    const { searchInputStyle } = this.state
    const { searchInputContainer, iconStyle, iconContainerStyle } = styles
    return (
      <Item style={searchInputContainer}>
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
            type='Ionicons'
            name='ios-search'
          />
        </View>
      </Item>
      
    )
  }
}

export default Search

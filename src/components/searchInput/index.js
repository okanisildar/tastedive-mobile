import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

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
    return (
      <TextInput
        onBlur={() => this.onBlur()}
        onFocus={() => this.onFocus()}
        style={searchInputStyle}
        placeholder="Test"
      />
    )
  }
}

export default Search

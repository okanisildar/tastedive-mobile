import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'
import styles from './styles'

const ListItem = () => {
  const {
    container,
    titleWrapper,
    titleText,
    subTextWrapper,
    subText,
    textContainer,
    likeButtonContainer,
    icon
  } = styles
  return (
    <View style={container}>
      <View style={textContainer}>
        <View style={titleWrapper}>
          <Text style={titleText}>asd</Text>
        </View>
        <View style={subTextWrapper}>
          <Text style={subText}>asd</Text>
        </View>
      </View>
      <View style={likeButtonContainer}>
        <Icon
          style={icon}
          type="AntDesign"
          name="heart"
        />
      </View>
    </View>
  )
}

export default ListItem

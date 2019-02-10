import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'native-base'
import styles from './styles'

const ListItem = ({ item }) => {
  const {
    container,
    titleWrapper,
    titleText,
    subTextWrapper,
    subText,
    textContainer,
    likeButtonContainer,
    icon,
  } = styles
  const { Name, Type } = item
  return (
    <View style={container}>
      <View style={textContainer}>
        <View style={titleWrapper}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={titleText}
          >
            {Name}
          </Text>
        </View>
        <View style={subTextWrapper}>
          <Text style={subText}>{Type}</Text>
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

ListItem.propTypes = {
  item: PropTypes.instanceOf(Object),
}

ListItem.defaultProps = {
  item: {},
}

export default ListItem

import { searchInputBackground, searchInputTextColor, hoverIconContainerColor } from '../../constants/theme'

const styles = {
  searchInputContainer: {
    height: 40,
    width: '100%',
    marginBottom: 2,
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
  },
  searchInput: {
    backgroundColor: searchInputBackground,
    justifyContent: 'center',
    height: 40,
    minHeight: 30,
    paddingLeft: 10,
    color: searchInputTextColor,
  },
  searchInputHover: {
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 40,
    minHeight: 30,
    paddingLeft: 10,
    color: searchInputTextColor,
  },
  iconContainerStyle: {
    backgroundColor: searchInputBackground,
    height: 40,
    minHeight: 30,
    marginTop: 3,
    alignItems: 'center',
    width: 40,
  },
  iconStyle: {
    color: 'white',
    marginTop: 8,
    marginLeft: 10,
  },
  hoverIconContainerStyle: {
    backgroundColor: hoverIconContainerColor,
    height: 40,
    minHeight: 30,
    marginTop: 3,
    alignItems: 'center',
    width: 40,
  },
  logoStyle: {
    marginRight: 10,
    marginLeft: 5,
    width: '20%',
  },
}

export default styles

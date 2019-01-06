import { searchInputBackground, searchInputTextColor } from '../../constants/theme'

const styles = {
  searchInputContainer: {
    height: 40,
    width: '90%',
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
  },
  iconStyle: {
    color: 'white',
    marginTop: 8,
  },
}

export default styles

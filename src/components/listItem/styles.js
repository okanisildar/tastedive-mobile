import { headerBackgroundColor, subTextColor, white } from '../../constants/theme'

const styles = {
  container: {
    width: '90%',
    height: 70,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 5,
  },
  likeButtonContainer: {
    flex: 1,
    backgroundColor: headerBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    marginTop: 10,
    width: '100%',
    marginLeft: 15,
  },
  titleText: {
    fontSize: 22,
  },
  subTextWrapper: {
    marginTop: 7,
    width: '100%',
    marginLeft: 15,
  },
  subText: {
    fontSize: 16,
    color: subTextColor,
    textTransform: 'uppercase',
  },
  icon: {
    marginTop: 5,
    color: white,
  },
}

export default styles

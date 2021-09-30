import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Styles {
  rootShared: ViewStyle
  innerShared: ViewStyle

  rootsmall: ViewStyle
  rootmedium: ViewStyle
  rootlarge: ViewStyle
  innersmall: ViewStyle
  innermedium: ViewStyle
  innerlarge: ViewStyle
  content: ViewStyle
  text: TextStyle
  icon: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  rootShared: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  innerShared: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  rootsmall: {
    width: 61,
    height: 62,
    borderRadius: 23,
  },
  rootmedium: {
    width: 95,
    height: 98,
    borderRadius: 35,
  },
  rootlarge: {
    width: 255,
    height: 262,
    borderRadius: 87,
  },
  innersmall: {
    width: 61,
    height: 62,
    borderRadius: 23,
  },
  innermedium: {
    width: 86,
    height: 89,
    borderRadius: 35,
  },
  innerlarge: {
    width: 236,
    height: 242,
    borderRadius: 79,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  content: {
    transform: [{ rotate: '-45deg' }],
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
  },
  icon: {
    marginHorizontal: 8,
  },
})

export default styles

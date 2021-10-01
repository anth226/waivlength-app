import { StyleSheet, TextStyle } from 'react-native'

interface Styles {
  title: TextStyle
  titleSmall: TextStyle
  body: TextStyle
  bodySmall: TextStyle
}

const styles = StyleSheet.create<Styles>({
  title: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 34,
    lineHeight: 38,
    letterSpacing: -0.1394,
  },
  titleSmall: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 24,
    lineHeight: 23,
    letterSpacing: -0.0984,
  },
  body: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.032,
  },
  bodySmall: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.028,
  },
})

export default styles

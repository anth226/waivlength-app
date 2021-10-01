import { spacing } from '@theme/spacing'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Styles {
  root: ViewStyle
  item1: ViewStyle
  item2: ViewStyle
  titleSmall: TextStyle
  bodySmall: TextStyle
  signupBtn: ViewStyle
  loginBtn: ViewStyle
  video: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing(22.5),
    paddingBottom: spacing(6.75),
    paddingHorizontal: spacing(2.5),
  },
  item1: {
    alignItems: 'center',
  },
  item2: {
    width: '100%',
    alignItems: 'center',
  },
  titleSmall: {
    marginBottom: spacing(3),
  },
  bodySmall: {
    marginBottom: spacing(2.5),
  },
  signupBtn: {
    marginBottom: spacing(2.25),
  },
  loginBtn: {},
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
})

export default styles

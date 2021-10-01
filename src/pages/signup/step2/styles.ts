import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'
import Colors from '@theme/colors'

interface Styles {
  safeArea: ViewStyle
  keyboardArea: ViewStyle
  title: TextStyle
  body: TextStyle
  bodyBlue: TextStyle
  nextBtn: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    marginHorizontal: spacing(2.5),
  },
  keyboardArea: {
    position: 'relative',
    flex: 1,
  },
  title: {
    marginBottom: spacing(3.75),
  },
  body: {
    marginBottom: spacing(3.75),
  },
  bodyBlue: {
    color: Colors.light.main.blue,
  },
  nextBtn: {
    position: 'absolute',
    right: 0,
  },
})

export default styles

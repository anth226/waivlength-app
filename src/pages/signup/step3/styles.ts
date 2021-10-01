import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'

interface Styles {
  safeArea: ViewStyle
  keyboardArea: ViewStyle
  title: TextStyle
  body: TextStyle
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    marginHorizontal: spacing(2.5),
  },
  keyboardArea: {
    // flex: 1,
  },
  title: {
    marginBottom: spacing(3.75),
  },
  body: {
    marginBottom: spacing(3.75),
  },
})

export default styles

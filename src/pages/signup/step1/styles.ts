import { spacing } from '@theme/spacing'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Styles {
  safeArea: ViewStyle
  keyboardArea: ViewStyle
  title: TextStyle
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
    marginBottom: 30,
  },
  nextBtn: {
    position: 'absolute',
    right: 0,
  },
})

export default styles

import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'
import Colors from '@theme/colors'

interface Styles {
  root: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(1),
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.036,
    color: Colors.white,
  },
})

export default styles

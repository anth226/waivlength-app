import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'

interface Styles {
  root: ViewStyle
  input: TextStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginRight: spacing(1.5),
    width: 48,
  },
})

export default styles

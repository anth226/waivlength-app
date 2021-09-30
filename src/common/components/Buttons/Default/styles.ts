import { StyleSheet, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'

interface Styles {
  root: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(1),
  },
})

export default styles

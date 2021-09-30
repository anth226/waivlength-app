import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'
import Colors from '@theme/colors'

interface Styles {
  root: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    borderRadius: spacing(2),
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(1),
    backgroundColor: 'blue',
  },
  text: {
    color: Colors.white,
  },
})

export default styles

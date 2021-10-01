import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'
import Colors from '@theme/colors'

interface Styles {
  root: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    height: 54,
    borderRadius: spacing(3.375),
    paddingHorizontal: spacing(1.65),
    backgroundColor: Colors.light.main.blue,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.036,
    color: Colors.white,
    textAlign: 'center',
  },
})

export default styles

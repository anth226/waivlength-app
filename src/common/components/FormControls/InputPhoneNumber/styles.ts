import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { spacing } from '@theme/spacing'
import Colors from '@theme/colors'

interface Styles {
  root: ViewStyle
  phone: ViewStyle
  input: TextStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: spacing(1),
    borderColor: Colors.dark.grays.c2,
    borderWidth: 1,
  },
  phone: {
    width: 75,
    // height: '100%',
  },
  input: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: 'yellow',
  },
})

export default styles

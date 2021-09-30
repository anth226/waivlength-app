import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { spacing } from '@theme/spacing'
import Colors from '@theme/colors'

interface Styles {
  root: ViewStyle
  input: TextStyle
  icon: ViewStyle
  prepend: ViewStyle
  append: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(1),
    backgroundColor: Colors.white,
    borderRadius: spacing(1),
    borderColor: Colors.dark.grays.c2,
    borderWidth: 1,
  },
  input: {
    height: '100%',
    flexGrow: 1,
  },
  icon: {},
  prepend: {
    marginRight: spacing(2),
  },
  append: {
    marginLeft: spacing(2),
  },
})

export default styles

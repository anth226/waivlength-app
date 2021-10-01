import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { spacing } from '@theme/spacing'
import Colors from '@theme/colors'

interface Styles {
  root: ViewStyle
  inner: ViewStyle
  item1: TextStyle
  item2: TextStyle
  marker: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: spacing(3),
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item1: {
    flex: 1,
    flexBasis: 1,
    flexGrow: 1,
    textAlign: 'center',
    zIndex: 1,
    backgroundColor: 'red',
  },
  item2: {
    flexBasis: 1,
    flexGrow: 1,
    textAlign: 'center',
    zIndex: 1,
    backgroundColor: 'yellow',
  },
  marker: {
    position: 'absolute',
    height: 46,
    width: '50%',
    top: 0,
    bottom: 0,
    marginVertical: 'auto',
    borderRadius: spacing(4),
    backgroundColor: 'blue',
    zIndex: -1,
  },
})

export default styles

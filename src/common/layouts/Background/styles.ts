import { StyleSheet, ViewStyle } from 'react-native'

interface Styles {
  root: ViewStyle
  image: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
})

export default styles

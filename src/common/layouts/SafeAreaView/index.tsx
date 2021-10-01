import React from 'react'
import {
  SafeAreaView as RNSafeAreaView,
  ViewProps,
  StyleSheet,
} from 'react-native'

import styles from './styles'

export type SafeAreaViewProps = ViewProps

const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  ...others
}) => {
  const combinedRootStyles = StyleSheet.compose(styles.root, style)

  return (
    <RNSafeAreaView {...others} style={combinedRootStyles}>
      {children}
    </RNSafeAreaView>
  )
}

export default SafeAreaView

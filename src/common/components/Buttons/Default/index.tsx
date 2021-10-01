import React from 'react'
import { TextStyle, View, Text, StyleSheet } from 'react-native'
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler'

import styles from './styles'

export interface ButtonDefaultProps extends BorderlessButtonProps {
  textStyle?: TextStyle
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  children,
  style: rootStyle,
  textStyle,
  ...others
}) => {
  const combinedRootStyles = StyleSheet.compose(styles.root, rootStyle)
  const combinedTextStyles = StyleSheet.compose(styles.text, textStyle)

  return (
    <BorderlessButton {...others} style={combinedRootStyles}>
      <View accessible accessibilityRole="button">
        <Text style={combinedTextStyles}>{children}</Text>
      </View>
    </BorderlessButton>
  )
}

export default ButtonDefault

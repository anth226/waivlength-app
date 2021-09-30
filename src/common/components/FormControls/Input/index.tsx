import React from 'react'
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native'

import styles from './styles'

export interface InputProps
  extends Omit<TextInputProps, 'underlineColorAndroid' | 'style'> {
  prependIcon?: React.ReactNode
  appendIcon?: React.ReactNode

  style?: ViewStyle
  inputStyle?: TextStyle
}

const Input: React.FC<InputProps> = ({
  prependIcon,
  appendIcon,
  style,
  inputStyle,
  ...others
}) => {
  const combinedRootStyles = StyleSheet.compose(styles.root, style)
  const combinedInputStyles = StyleSheet.compose(styles.input, inputStyle)

  return (
    <View style={combinedRootStyles}>
      {prependIcon && (
        <View style={[styles.icon, styles.prepend]}>{prependIcon}</View>
      )}
      <TextInput
        {...others}
        style={combinedInputStyles}
        underlineColorAndroid="transparent"
      />
      {appendIcon && (
        <View style={[styles.icon, styles.append]}>{appendIcon}</View>
      )}
    </View>
  )
}

export default Input

import React from 'react'
import { Text, View, StyleSheet, TextStyle } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import Typography, { TypographyProps } from '@components/Typography'

import styles from './styles'

export interface ButtonContainedProps extends RectButtonProperties {
  fullWidth?: boolean
  textStyle?: TextStyle
}

const ButtonContained: React.FC<ButtonContainedProps> = ({
  children,
  style: rootStyle,
  fullWidth = false,
  textStyle,
  ...others
}) => {
  const combinedRootStyles = StyleSheet.compose(
    [styles.root, { width: fullWidth ? '100%' : 'auto' }],
    rootStyle,
  )
  const combinedTextStyles = StyleSheet.compose(
    styles.text,
    textStyle,
  ) as TextStyle

  return (
    <RectButton {...others} style={combinedRootStyles}>
      <View accessible accessibilityRole="button">
        <Text style={combinedTextStyles}>{children}</Text>
      </View>
    </RectButton>
  )
}

export default ButtonContained

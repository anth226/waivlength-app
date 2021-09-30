import React from 'react'
import { Text, View, StyleSheet, TextStyle } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import Typography, { TypographyProps } from '@components/Typography'

import styles from './styles'

export interface ButtonContainedProps extends RectButtonProperties {
  textVariant?: TypographyProps['variant']
  textStyle?: TextStyle
}

const ButtonContained: React.FC<ButtonContainedProps> = ({
  children,
  style: rootStyle,
  textVariant,
  textStyle,
  ...others
}) => {
  const combinedRootStyles = StyleSheet.compose(styles.root, rootStyle)
  const combinedTextStyles = StyleSheet.compose(
    styles.text,
    textStyle,
  ) as TextStyle

  return (
    <RectButton {...others} style={combinedRootStyles}>
      <View accessible accessibilityRole="button">
        <Typography variant={textVariant} style={combinedTextStyles}>
          {children}
        </Typography>
      </View>
    </RectButton>
  )
}

export default ButtonContained

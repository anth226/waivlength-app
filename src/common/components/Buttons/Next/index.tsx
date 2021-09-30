import React from 'react'
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import Typography, { TypographyProps } from '@components/Typography'

import styles from './styles'

export interface ButtonNextProps extends RectButtonProps {
  size?: 'small' | 'medium' | 'large'
  innerStyle?: ViewStyle
  textVariant?: TypographyProps['variant']
  textStyle?: TextStyle
  appendIcon?: React.ReactNode
}

const ButtonNext: React.FC<ButtonNextProps> = ({
  size = 'medium',
  children,
  style: rootStyle,
  innerStyle,
  textVariant,
  textStyle,
  appendIcon,
  ...others
}) => {
  const combinedRootStyles = StyleSheet.compose(
    styles[`root${size}`],
    rootStyle,
  )
  const combinedInnerStyles = StyleSheet.compose(
    styles[`inner${size}`],
    innerStyle,
  )
  const combinedTextStyles = StyleSheet.compose(
    styles.text,
    textStyle,
  ) as TextStyle

  return (
    <RectButton {...others} style={[styles.rootShared, combinedRootStyles]}>
      <View
        accessible
        accessibilityRole="button"
        style={[styles.innerShared, combinedInnerStyles]}
      >
        <View style={styles.content}>
          <Typography variant={textVariant} style={combinedTextStyles}>
            {children}
          </Typography>
          {appendIcon && <View style={styles.icon}>{appendIcon}</View>}
        </View>
      </View>
    </RectButton>
  )
}

export default ButtonNext

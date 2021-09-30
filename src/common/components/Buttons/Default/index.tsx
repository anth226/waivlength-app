import React from 'react'
import { TextStyle, View, StyleSheet } from 'react-native'
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler'
import Typography, { TypographyProps } from '@components/Typography'

import styles from './styles'

export interface ButtonDefaultProps extends BorderlessButtonProps {
  textVariant?: TypographyProps['variant']
  textStyle?: TextStyle
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  children,
  style: rootStyle,
  textVariant,
  textStyle,
  ...others
}) => {
  const combinedRootStyles = StyleSheet.compose(styles.root, rootStyle)

  return (
    <BorderlessButton {...others} style={combinedRootStyles}>
      <View accessible accessibilityRole="button">
        <Typography variant={textVariant} style={textStyle}>
          {children}
        </Typography>
      </View>
    </BorderlessButton>
  )
}

export default ButtonDefault

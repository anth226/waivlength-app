import React from 'react'
import { Text, TextStyle, StyleSheet, TextProps } from 'react-native'
import { useAppSelector } from '@app/hooks'

import styles from './styles'
import Colors from '../../theme/colors'

export interface TypographyProps extends TextProps {
  variant?:
    | 'title'
    | 'h1'
    | 'h2'
    | 'h2Bold'
    | 'h3'
    | 'body'
    | 'bodySmall'
    | 'caption'
    | 'button'
    | 'buttonLarge'
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  style: propStyle,
  children,
}) => {
  const combinedStyles = StyleSheet.compose(styles[variant], propStyle)
  const { isDarkMode } = useAppSelector((state) => state.theme)

  const currentColor = React.useMemo(() => {
    if (variant === 'caption') {
      return '#656565'
    }
    if (isDarkMode) {
      return Colors.dark.grays.c1
    }
    return Colors.light.grays.c1
  }, [variant, isDarkMode])

  return (
    <Text
      style={[
        {
          color: currentColor,
        },
        combinedStyles,
      ]}
    >
      {children}
    </Text>
  )
}

export default Typography

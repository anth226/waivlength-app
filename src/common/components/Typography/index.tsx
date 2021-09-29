import React from 'react'
import { Text, TextProps, StyleSheet } from 'react-native'
import { useAppSelector } from '@app/hooks'

import styles from './styles'
import Colors from '../../utils/colors'

export interface TypographyProps {
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
  style?: TextProps['style']
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  style: propStyle,
  children,
}) => {
  const combinedStyles = StyleSheet.compose(propStyle, styles[variant])
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
        combinedStyles,
        {
          color: currentColor,
        },
      ]}
    >
      {children}
    </Text>
  )
}

export default Typography

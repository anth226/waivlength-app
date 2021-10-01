import React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
import { useAppSelector } from '@app/hooks'

import styles from './styles'
import Colors from '../../theme/colors'

export interface TypographyProps extends TextProps {
  variant?: 'title' | 'titleSmall' | 'body' | 'bodySmall'
  color?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black'
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'primary',
  style: propStyle,
  children,
}) => {
  const combinedStyles = StyleSheet.compose(styles[variant], propStyle)
  const { isDarkMode } = useAppSelector((state) => state.theme)

  const currentColor = React.useMemo(() => {
    if (color === 'white') {
      return Colors.white
    }

    if (color === 'black') {
      return Colors.black
    }

    if (isDarkMode) {
      return Colors.dark.text[color]
    }
    return Colors.light.text[color]
  }, [color, isDarkMode])

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

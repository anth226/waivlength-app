import React from 'react'
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native'
import Colors from '@theme/colors'

import styles from './styles'

export interface InputProps
  extends Omit<TextInputProps, 'underlineColorAndroid' | 'style'> {
  prependIcon?: React.ReactNode
  appendIcon?: React.ReactNode

  style?: ViewStyle
  inputStyle?: TextStyle
}

const Input = React.forwardRef<TextInput, InputProps>(
  (
    { prependIcon, appendIcon, style, inputStyle, onFocus, onBlur, ...others },
    ref,
  ) => {
    const [active, setActive] = React.useState<boolean>(false)

    const combinedRootStyles = StyleSheet.compose(
      [
        styles.root,
        { borderColor: active ? Colors.light.main.blue : '#D5D6E2' },
      ],
      style,
    )
    const combinedInputStyles = StyleSheet.compose(styles.input, [inputStyle])

    const handleOnFocus = React.useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(true)
        if (typeof onFocus === 'function') onFocus(event)
      },
      [onFocus],
    )

    const handleOnBlur = React.useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(false)
        if (typeof onBlur === 'function') onBlur(event)
      },
      [onBlur],
    )

    return (
      <View style={combinedRootStyles}>
        {prependIcon && (
          <View style={[styles.icon, styles.prepend]}>{prependIcon}</View>
        )}
        <TextInput
          ref={ref}
          {...others}
          style={combinedInputStyles}
          underlineColorAndroid="transparent"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        {appendIcon && (
          <View style={[styles.icon, styles.append]}>{appendIcon}</View>
        )}
      </View>
    )
  },
)

export default Input

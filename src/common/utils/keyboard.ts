/* eslint-disable import/prefer-default-export */

import React from 'react'
import { Animated, Easing, Keyboard, KeyboardEvent } from 'react-native'

export const useKeyboard = () => {
  const keyboardHeight = React.useMemo(() => new Animated.Value(20), [])

  const onKeyboardDidHide = React.useCallback(() => {
    Animated.timing(keyboardHeight, {
      toValue: 20,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start()
  }, [keyboardHeight])

  const onKeyboardDidShow = React.useCallback(
    (event: KeyboardEvent) => {
      Animated.timing(keyboardHeight, {
        toValue: event.endCoordinates.height,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start()
    },
    [keyboardHeight],
  )

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide)
    }
  }, [onKeyboardDidHide, onKeyboardDidShow])

  return keyboardHeight
}

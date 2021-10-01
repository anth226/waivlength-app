import React from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native'
import Input from '../Input'

import styles from './styles'

export interface InputVerificationProps {
  value: string[]
  onChange?: (value: string, index: number) => void
}

const InputVerification: React.FC<InputVerificationProps> = ({
  value,
  onChange,
}) => {
  const ref1 = React.useRef() as React.MutableRefObject<TextInput>
  const ref2 = React.useRef() as React.MutableRefObject<TextInput>
  const ref3 = React.useRef() as React.MutableRefObject<TextInput>
  const ref4 = React.useRef() as React.MutableRefObject<TextInput>
  const ref5 = React.useRef() as React.MutableRefObject<TextInput>
  const ref6 = React.useRef() as React.MutableRefObject<TextInput>

  const focusRef = (index: number) => {
    switch (index) {
      case 0:
        ref1.current.focus()
        break
      case 1:
        ref2.current.focus()
        break
      case 2:
        ref3.current.focus()
        break
      case 3:
        ref4.current.focus()
        break
      case 4:
        ref5.current.focus()
        break
      case 5:
        ref6.current.focus()
        break

      default:
        break
    }
  }

  React.useEffect(() => {
    focusRef(value.length)
    console.log('effect', value.length)
  }, [value])

  const handleOnChange = React.useCallback(
    (text: string, index: number) => {
      const length = value.length - 1
      if (typeof onChange === 'function') onChange(text, index)
    },
    [onChange, value.length],
  )

  const handleOnFocus = React.useCallback(
    (index: number) => {
      const length = value.length - 1
      if (index > length) {
        focusRef(length + 1)
      }
      console.log('focus', index, length)
    },
    [value],
  )

  return (
    <View style={styles.root}>
      <Input
        ref={ref1}
        maxLength={1}
        value={value[0]}
        style={styles.input}
        onFocus={() => handleOnFocus(0)}
        onChangeText={(text) => handleOnChange(text, 0)}
      />
      <Input
        ref={ref2}
        maxLength={1}
        value={value[1]}
        style={styles.input}
        onFocus={() => handleOnFocus(1)}
        onChangeText={(text) => handleOnChange(text, 1)}
      />
      <Input
        ref={ref3}
        maxLength={1}
        value={value[2]}
        style={styles.input}
        onFocus={() => handleOnFocus(2)}
        onChangeText={(text) => handleOnChange(text, 2)}
      />
      <Input
        ref={ref4}
        maxLength={1}
        value={value[3]}
        style={styles.input}
        onFocus={() => handleOnFocus(3)}
        onChangeText={(text) => handleOnChange(text, 3)}
      />
      <Input
        ref={ref5}
        maxLength={1}
        value={value[4]}
        style={styles.input}
        onFocus={() => handleOnFocus(4)}
        onChangeText={(text) => handleOnChange(text, 4)}
      />
      <Input
        ref={ref6}
        maxLength={1}
        value={value[5]}
        style={styles.input}
        onFocus={() => handleOnFocus(5)}
        onChangeText={(text) => handleOnChange(text, 5)}
      />
    </View>
  )
}

export default React.memo(InputVerification)

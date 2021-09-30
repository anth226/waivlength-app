import React from 'react'
import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  StyleSheet,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import countryCodes from '@assets/json/countryCodes.json'
import phoneCodes from '@assets/json/phoneCodes.json'

import styles from './styles'

export interface InputPhoneNumberProps
  extends Omit<TextInputProps, 'underlineColorAndroid' | 'style'> {
  style?: ViewStyle

  phoneCode?: string
  setPhoneCode?: (value: unknown, index: number) => void
}

const InputPhoneNumber: React.FC<InputPhoneNumberProps> = ({
  style,
  phoneCode,
  setPhoneCode,
  ...others
}) => {
  const [countyCodesList] = React.useState(
    JSON.parse(JSON.stringify(countryCodes)),
  )
  const combinedRootStyles = StyleSheet.compose(styles.root, style)

  return (
    <View style={combinedRootStyles}>
      <View style={styles.phone}>
        <Picker
          mode="dialog"
          selectedValue={phoneCode}
          onValueChange={setPhoneCode}
        >
          {Array.from(JSON.parse(JSON.stringify(phoneCodes))).map((pCode) => (
            <Picker.Item label={pCode as string} value={pCode as string} />
          ))}
        </Picker>
      </View>
      <TextInput {...others} style={styles.input} />
    </View>
  )
}

export default InputPhoneNumber

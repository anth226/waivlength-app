import React from 'react'
import { View, Switch } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'
import Typography from '@components/Typography'

import styles from './styles'

// export interface ToggleProps {}

const Toggle: React.FC = () => {
  return (
    <SwitchSelector
      options={[
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Phone Number',
          value: 'phoneNumber',
        },
      ]}
      initial={0}
      onPress={(value) => console.log(`Call onPress with value: ${value}`)}
      height={40}
      buttonColor="blue"
      animationDuration={300}
      style={styles.root}
    />
  )
}

export default Toggle

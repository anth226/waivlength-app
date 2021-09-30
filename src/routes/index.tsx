import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppSelector } from '@app/hooks'

import Toggle from '@components/FormControls/Toggle'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Routes: React.FC = () => {
  const { token } = useAppSelector((state) => state.authUser)

  return (
    <View style={styles.root}>
      {token ? <Text>User is authenticated!</Text> : <Toggle />}
    </View>
  )
}

export default Routes

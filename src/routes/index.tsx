import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useAppSelector } from '../app/hooks'
import constants from '../common/utils/constants'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
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
      {token ? (
        <Text>User is authenticated!</Text>
      ) : (
        <Text>User is not authenticated!</Text>
      )}
    </View>
  )
}

export default Routes

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'

import { useAppSelector } from '@app/hooks'
import { UnauthenticatedStack } from '@utils/routeTypes'
import { transparentHeader } from '@utils/headerConfig'

// screens
import LoginPage from '@pages/login'
import Step1 from '@pages/signup/step1'
import Step2 from '@pages/signup/step2'
import Step3 from '@pages/signup/step3'

const UnauthenticatedRootStack =
  createNativeStackNavigator<UnauthenticatedStack>()

const Routes: React.FC = () => {
  const { token } = useAppSelector((state) => state.authUser)

  return (
    <NavigationContainer>
      {token ? (
        <Text>User is authenticated!</Text>
      ) : (
        <UnauthenticatedRootStack.Navigator
          initialRouteName="Login"
          screenOptions={transparentHeader}
        >
          <UnauthenticatedRootStack.Screen name="Login" component={LoginPage} />
          <UnauthenticatedRootStack.Screen name="Signup1" component={Step1} />
          <UnauthenticatedRootStack.Screen name="Signup2" component={Step2} />
          <UnauthenticatedRootStack.Screen name="Signup3" component={Step3} />
        </UnauthenticatedRootStack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default Routes

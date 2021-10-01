import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Background from '@layouts/Background'
import SafeAreaView from '@layouts/SafeAreaView'

import Typography from '@components/Typography'
import Input from '@components/FormControls/Input'

import { Signup3NavigatorProps } from '@utils/routeTypes'

import styles from './styles'

/* <Ionicons name="eye-outline" size={24} color="black" /> */

export interface SignupStep3Props {
  navigation: Signup3NavigatorProps['navigation']
}

const SignupStep3: React.FC<SignupStep3Props> = ({ navigation }) => {
  const [view, setView] = React.useState<boolean>(true)

  return (
    <Background bg="bg1">
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView style={styles.keyboardArea}>
          <Typography variant="title" style={styles.title}>
            You’ll need a password
          </Typography>
          <Typography style={styles.body}>
            Make sure it`s 8 character or more.
          </Typography>
          <Input
            secureTextEntry={view}
            placeholder="Enter Password"
            appendIcon={
              !view ? (
                <Ionicons
                  name="eye-outline"
                  size={24}
                  color="black"
                  onPress={() => setView(true)}
                />
              ) : (
                <Ionicons
                  name="eye-off-outline"
                  size={24}
                  color="black"
                  onPress={() => setView(false)}
                />
              )
            }
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Background>
  )
}

export default SignupStep3

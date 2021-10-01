import React from 'react'
import {
  Animated,
  KeyboardAvoidingView,
  View,
  Platform,
  Keyboard,
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

import Background from '@layouts/Background'
import SafeAreaView from '@layouts/SafeAreaView'
import Typography from '@components/Typography'
import Toggle from '@components/FormControls/Toggle'
import Input from '@components/FormControls/Input'
import { ButtonNext } from '@components/Buttons'

import { spacing } from '@theme/spacing'

import { Signup1NavigatorProps } from '@utils/routeTypes'
import { useKeyboard } from '@utils/keyboard'

import styles from './styles'

export interface SignupStep1Props {
  navigation: Signup1NavigatorProps['navigation']
}

const SignupStep1: React.FC<SignupStep1Props> = ({ navigation }) => {
  const keyboardHeight = useKeyboard()

  const handleNavigate = () => {
    navigation.push('Signup2')
  }

  return (
    <Background bg="bg1">
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardArea}
        >
          <Typography variant="title" style={styles.title}>
            Create your account
          </Typography>
          <View style={{ marginBottom: 30 }}>
            <Toggle />
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Input
              placeholder="Enter your email"
              style={{ borderRadius: spacing(3) }}
            />
          </TouchableWithoutFeedback>

          <Animated.View style={[styles.nextBtn, { bottom: keyboardHeight }]}>
            <ButtonNext
              size="large"
              appendIcon={
                <Ionicons name="arrow-forward" size={24} color="white" />
              }
              onPress={handleNavigate}
            >
              Next
            </ButtonNext>
          </Animated.View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Background>
  )
}

export default SignupStep1

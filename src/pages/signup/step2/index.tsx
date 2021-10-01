import React from 'react'
import { KeyboardAvoidingView, Platform, Animated } from 'react-native'

import Background from '@layouts/Background'
import SafeAreaView from '@layouts/SafeAreaView'
import { Ionicons } from '@expo/vector-icons'

import Typography from '@components/Typography'
import InputVerification from '@components/FormControls/InputVerification'
import { ButtonNext } from '@components/Buttons'

import { Signup3NavigatorProps } from '@utils/routeTypes'
import { useKeyboard } from '@utils/keyboard'

import { useAppSelector, useAppDispatch } from '@app/hooks'
import { onVerificationChange } from '../../../features/Signup/SignupSlice'

import styles from './styles'

export interface SignupStep2Props {
  navigation: Signup3NavigatorProps['navigation']
}

const SignupStep2: React.FC<SignupStep2Props> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { signup } = useAppSelector((state) => state)
  const { verification } = useAppSelector((state) => state.signup)

  const keyboardHeight = useKeyboard()

  const handleVerificationChange = React.useCallback(
    (value: string, index: number) => {
      dispatch(onVerificationChange({ value, index }))
    },
    [dispatch],
  )

  const handleNavigation = () => {
    navigation.push('Signup3')
  }

  return (
    <Background bg="bg1">
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardArea}
        >
          <Typography variant="title" style={styles.title}>
            Verify your phone
          </Typography>
          <Typography style={styles.body}>
            We sent you a code to{' '}
            <Typography style={styles.bodyBlue}>+353 123456789</Typography>{' '}
            Enter it below to verify:
          </Typography>
          <InputVerification
            value={verification}
            onChange={handleVerificationChange}
          />
          <Animated.View style={[styles.nextBtn, { bottom: keyboardHeight }]}>
            <ButtonNext
              size="large"
              appendIcon={
                <Ionicons name="arrow-forward" size={24} color="white" />
              }
              onPress={handleNavigation}
            >
              Next
            </ButtonNext>
          </Animated.View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Background>
  )
}

export default SignupStep2

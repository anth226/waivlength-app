import React from 'react'
import { Image, View } from 'react-native'
import Video from 'react-native-video'

import Typography from '@components/Typography'
import { ButtonContained, Button } from '@components/Buttons'
import { LoginNavigatorProps } from '@utils/routeTypes'

import styles from './styles'

export interface LoginPageProps {
  navigation: LoginNavigatorProps['navigation']
}

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.item1}>
        <Typography
          variant="titleSmall"
          color="white"
          style={styles.titleSmall}
        >
          Welcome to
        </Typography>
        <Image source={require('@assets/images/logo-white.png')} />
      </View>
      <View style={styles.item2}>
        <Typography variant="bodySmall" color="white" style={styles.bodySmall}>
          By continuing you agree to our
          {'\n'}
          Terms of use and Privacy Policy
        </Typography>
        <ButtonContained
          fullWidth
          onPress={() => navigation.push('Signup1')}
          style={styles.signupBtn}
        >
          Create account
        </ButtonContained>
        <Button>Login</Button>
      </View>
      <Video
        repeat
        resizeMode="cover"
        source={require('@assets/videos/6955185.mp4')}
        style={styles.video}
      />
    </View>
  )
}

export default LoginPage

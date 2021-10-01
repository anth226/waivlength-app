import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type UnauthenticatedStack = {
  Login: undefined
  Signup1: undefined
  Signup2: undefined
  Signup3: undefined
}

export type LoginNavigatorProps = NativeStackScreenProps<
  UnauthenticatedStack,
  'Login'
>
export type Signup1NavigatorProps = NativeStackScreenProps<
  UnauthenticatedStack,
  'Signup1'
>
export type Signup2NavigatorProps = NativeStackScreenProps<
  UnauthenticatedStack,
  'Signup2'
>
export type Signup3NavigatorProps = NativeStackScreenProps<
  UnauthenticatedStack,
  'Signup3'
>

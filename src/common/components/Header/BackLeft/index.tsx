import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

const HeaderBackLeft: React.FC<HeaderBackButtonProps> = ({ canGoBack }) => {
  const navigation = useNavigation()

  const handleBack = React.useCallback(() => navigation.goBack(), [navigation])

  return canGoBack ? (
    <BorderlessButton onPress={handleBack}>
      <AntDesign name="leftcircle" size={24} color="black" />
    </BorderlessButton>
  ) : null
}

export default HeaderBackLeft

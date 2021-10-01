import React from 'react'
import { ImageBackground, View, ViewStyle, StyleSheet } from 'react-native'

import styles from './styles'

const images = {
  bg1: require('@assets/images/bg-1.png'),
}

export interface BackgroundProps {
  bg?: 'bg1'
  style?: ViewStyle
}

const Background: React.FC<BackgroundProps> = ({ bg, style, children }) => {
  const combinedRootStyles = StyleSheet.compose(styles.root, style)

  return (
    <View style={styles.root}>
      {bg && (
        <ImageBackground
          source={images[bg]}
          resizeMode="cover"
          style={styles.image}
        >
          {children}
        </ImageBackground>
      )}
    </View>
  )
}

export default Background

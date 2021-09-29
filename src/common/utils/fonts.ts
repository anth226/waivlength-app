import * as Font from 'expo-font'

const loadFonts = async (): Promise<void> => {
  await Font.loadAsync({
    Poppins: {
      uri: require('../assets/fonts/Poppins-Regular.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'Poppins-Bold': {
      uri: require('../assets/fonts/Poppins-Bold.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
  })
}

export default loadFonts

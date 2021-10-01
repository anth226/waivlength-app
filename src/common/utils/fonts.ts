import * as Font from 'expo-font'

const loadFonts = async (): Promise<void> => {
  await Font.loadAsync({
    HelveticaNeue: {
      uri: require('../assets/fonts/HelveticaNeue-Regular.otf'),
      display: Font.FontDisplay.FALLBACK,
    },
    'HelveticaNeue-Bold': {
      uri: require('../assets/fonts/HelveticaNeue-Bold.otf'),
      display: Font.FontDisplay.FALLBACK,
    },
  })
}

export default loadFonts

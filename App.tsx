import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@app/store'
import loadFonts from '@utils/fonts'
import Routes from 'routes'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const handleLoadFonts = async () => {
    await loadFonts()
    setIsLoading(false)
  }
  React.useEffect(() => {
    handleLoadFonts()
  }, [])

  if (isLoading) {
    return <View />
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App

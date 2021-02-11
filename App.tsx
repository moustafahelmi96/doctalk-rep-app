import React, { FC } from 'react'
import { LangProvider } from './src/context/LangContext'
import MainNavigator from './src/navigators/MainNavigator'

const App: FC = () => {
  return (
    <LangProvider>
      <MainNavigator />
    </LangProvider>
  )
}

export default App

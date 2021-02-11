import React, { createContext, useState, useEffect } from 'react'
import { I18nManager } from 'react-native'
import RNRestart from 'react-native-restart'
import AsyncStorage from '@react-native-community/async-storage'
import Dictionary from '../constants/dictionary'
import * as types from './types'


const LangContext = createContext<types.LangContextType>({
  lang: 'en',
  dictionary: Dictionary['en'],
  RTL: false,
  switchLang: () => { },
})

export const LangProvider = ({ children }: types.IProps) => {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  const getLang = async () => {
    AsyncStorage.getItem('lang').then(res => {
      if (res !== null && res === 'en' || res === 'ar') {
        setLang(res)
      }
      if (res === 'ar') {
        I18nManager.allowRTL(true)
        I18nManager.forceRTL(true)
      } else {
        I18nManager.allowRTL(false)
        I18nManager.forceRTL(false)
      }
    })
  }

  useEffect(() => {
    getLang()
  }, [])

  const switchLang = (ln: 'en' | 'ar') => {
    let timerId: NodeJS.Timeout
    setLang(ln)
    AsyncStorage.setItem('lang', ln).then(() => {
      if (ln === 'ar') {
        I18nManager.allowRTL(true)
        I18nManager.forceRTL(true)
        timerId = setTimeout(RNRestart.Restart, 20)
      } else {
        I18nManager.allowRTL(false)
        I18nManager.forceRTL(false)
        timerId = setTimeout(RNRestart.Restart, 20)
      }
    })
    return () => clearTimeout(timerId)
  }

  return (
    <LangContext.Provider
      value={{
        dictionary: Dictionary[lang],
        RTL: I18nManager.isRTL,
        switchLang,
      }
      }
    >
      {children}
    </LangContext.Provider>
  )
}

export default LangContext

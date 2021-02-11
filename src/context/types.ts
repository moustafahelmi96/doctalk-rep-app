import { ReactNode } from 'react'

export type LangContextType = {
  lang?: string
  dictionary: IDictionary
  RTL: boolean
  switchLang: any
}

export interface IDictionary {
  [key: string]: { [key: string]: string | IDictionary } | string
}

export interface IProps {
  children: ReactNode
}

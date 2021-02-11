import React, { useContext, FC } from 'react'
import styled from 'styled-components/native'
import LangContext from '../context/LangContext'

const TestScreen: FC = () => {
  const { welcome } = useContext(LangContext).dictionary
  return (
    <Button>
      <ButtonText>{welcome.testing}</ButtonText>
    </Button>
  )
}

export default TestScreen

const Button = styled.View`
  background-color: red;
  align-self: center;
  height: 500px;
  width: 500px;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  font-size: 12px;
  color: black;
`

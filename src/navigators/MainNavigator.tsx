import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TestScreen from '../screens/TestScreen'

const MainNavigator: FC = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='testing' component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

import React from 'react'
import { StatusBar, Platform } from 'react-native'
import Home from './src/screens/Home'
import Description from './src/screens/Description'
import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
  Home: {
    screen: Home
  },
  Description: {
    screen: Description
  },
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})
// para rodar esta aplicacion al hacer nmp start debe salir un qr el cual debemos de captar mediante la aplicacion de celular expo, y ahi vemos rodar la api

export default App
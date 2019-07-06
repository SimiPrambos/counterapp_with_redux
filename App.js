import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AppNavigation from './app/navigation/AppNavigation'
// import './app/tryRedux'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'

import Home from '../screens/home'

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      title: 'Home'
    }
  }
})

class Root extends Component {
  render(){
    return <RootNavigator />
  }
}

export default Root
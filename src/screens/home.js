import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    )
  }
}

const StyledView = styled.View`
  background-color: papayawhip;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.Text`
  color: palevioletred;
`

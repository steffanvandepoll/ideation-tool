import React, { Component } from 'react';
import { MousePointer, MessageSquare, Circle } from 'react-feather';
import * as CanvasState from '../CanvasState'

import styled from 'styled-components'

const StyledBar = styled.ul`
  background-color: white;
  list-style:none;
  color: #0070ad;
  padding: 10px;
  margin: 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px;
  li{
    padding: 10px 5px;
    cursor: pointer;
    &:hover{
      svg{
        fill: #0070ad;
      }
    }

    ul {
      position: absolute;
      left: calc(100% + 15px);
      top: 50%;
      transform: translateY(-50%);

      &:after{
        right: 100%;
      	top: 50%;
      	border: solid transparent;
      	content: " ";
      	height: 0;
      	width: 0;
      	position: absolute;
      	pointer-events: none;
        border-right-color: #FFFFFF;
        border-width: 10px;
        margin-top: -10px;
      }
    }
  }
`

class ActionBar extends Component {

  toggleAddingStickyState(){
    this.props.setCanvasState(this.props.canvasState === CanvasState.ADDING_STICKY ? CanvasState.DEFAULT : CanvasState.ADDING_STICKY)
  }

  render() {
    return (
      <StyledBar className={this.props.className}>
        <li><MousePointer /></li>
        <li onClick={this.toggleAddingStickyState.bind(this)}><MessageSquare fill={this.props.canvasState === CanvasState.ADDING_STICKY ? "#0070ad" : "#FFFFFF"} /></li>
        <li><Circle /></li>
      </StyledBar>
    );
  }
}


export default ActionBar;

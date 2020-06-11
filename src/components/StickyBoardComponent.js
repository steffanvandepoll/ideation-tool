import React, { Component, Fragment} from 'react';
import styled from 'styled-components'
import HeaderBar from './ui/HeaderBarComponent'
import ActionBar from './ui/ActionBarComponent'
import Canvas from './CanvasComponent'
import * as CanvasState from './CanvasState'

const StyledHeaderBar = styled(HeaderBar)`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const StyledActionBar = styled(ActionBar)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;


class StickyBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      canvasState: CanvasState.DEFAULT
    }
  }

  setCanvasState(state){
    this.setState({
      canvasState: state
    });
  }

  render() {
    return (
        <Fragment>
          <Canvas setCanvasState={this.setCanvasState.bind(this)} canvasState={this.state.canvasState} />
          <StyledHeaderBar />
          <StyledActionBar setCanvasState={this.setCanvasState.bind(this)} canvasState={this.state.canvasState} />
        </Fragment>
    );
  }
}

export default StickyBoard;

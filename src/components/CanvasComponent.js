import React, { Component} from 'react';
import * as CanvasState from './CanvasState'
import { connect } from 'react-redux';
import Sticky from './StickyComponent'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'

import styled from 'styled-components'

//actions
import { addSticky, updateStickyPosition } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    stickies: state.stickies
  }
}

const mapDispatchToProps = dispatch => ({
  addStickyAction: (x, y) => { dispatch(addSticky(x, y))},
  updateStickyPosition: (id, x, y) => { dispatch(updateStickyPosition(id, x, y))}
});


const StyledCanvas = styled.div`
  background-color: #ebebeb;
  min-height: 100vh;
  color: black;
  position: relative;
  cursor: ${props => props.state === CanvasState.ADDING_STICKY ? "cell" : "default"}
`

const StickyContainer = ({onClick, state, stickies, updateStickyPosition}) => {
  const [, drop] = useDrop({
    accept: "Div",
    drop: (sticky, monitor) => updateStickyPosition(sticky, monitor),
  })

  return (
    <StyledCanvas onClick={onClick} state={state} ref={drop}>
        {stickies.map((sticky) => {
          return <Sticky sticky={sticky} key={sticky.id}/>;
        })}
    </StyledCanvas>
  );
}

class Canvas extends Component {

  onCanvasClick(e){
    switch(this.props.canvasState){
      case CanvasState.ADDING_STICKY:
        this.addSticky(e)
        break;
      default:
        console.log("current state is " + this.props.canvasState + " nothing to do yet")
    }
  }

  updateStickyPosition(item, monitor){
    this.props.updateStickyPosition(item.sticky.id, item.sticky.x + monitor.getDifferenceFromInitialOffset().x, item.sticky.y + monitor.getDifferenceFromInitialOffset().y);
  }

  addSticky(e){

    //adding x and y in percentage to make the position relative due to screensizes
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    this.props.addStickyAction(x, y);
    this.props.setCanvasState(CanvasState.DEFAULT)

  }

  render() {
    return (
      <DndProvider backend={Backend}>
        <StickyContainer onClick={this.onCanvasClick.bind(this)} state={this.props.canvasState} stickies={this.props.stickies} updateStickyPosition={this.updateStickyPosition.bind(this)}/>
      </DndProvider>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);

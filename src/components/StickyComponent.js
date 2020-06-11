import React, { useRef } from 'react';

import styled from 'styled-components'

import { useDrag, useDrop } from "react-dnd";

const Note = styled.div`
  display: flex;
  position: absolute;
  top: calc(${props => props.y - 15}px);
  left: calc(${props => props.x - 125}px);
  min-width: 250px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px;
`

const Head = styled.div`
  background-color: #f6ea98;
  width: 100%;
  height: 25px;
  padding: 0 15px;
  cursor: move;
`

const Content = styled.div`
  background: rgb(236,223,134);
  background: radial-gradient(circle, rgba(236,223,134,1) 0%, rgba(239,219,103,1) 100%);
  width: 100%;
  min-height: 100px;
  padding: 15px;
`

const Sticky = ({sticky}) => {

  const [{ isDragging }, drag] = useDrag({
    item: { type: "Div", sticky: sticky },
  })

  return (
    <Note x={sticky.x} y={sticky.y} ref={drag} style={{opacity: isDragging ? 0.5 : 1}}>
      <Head />
      <Content>
        This is a sticky
      </Content>
    </Note>
  );
}

export default Sticky;

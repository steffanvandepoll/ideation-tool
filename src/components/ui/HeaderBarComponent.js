import React from 'react';

import styled from 'styled-components'

const StyledBar = styled.ul`
  background-color: white;
  display: inline-flex;;
  list-style:none;
  color: #0070ad;
  font-weight: bold;
  padding: 10px;
  margin: 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px;

  li{
    margin-right: 10px;
    padding-right: 10px;
    border-right: solid 1px #0070ad;
    &:last-child{
      border-right: none;
      padding-right: 0;
    }
  }
`

const HeaderBar = ({ className }) => {
  //TODO create a list of actions resulting in a header - options to save / export, go back home. Possible settings for the current board such as a boardname maybe options to add tabs basically actions which are overcoupling for this canvas
  return (
    <StyledBar className={className}>
      <li>Home</li>
      <li>Boardname</li>
      <li>Export</li>
    </StyledBar>
  );
}

export default HeaderBar;

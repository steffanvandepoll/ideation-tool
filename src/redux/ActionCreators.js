import * as ActionTypes from './ActionTypes';

export const addSticky = (x, y) => {
  let sticky = {
    x: x,
    y: y
  };
  return ({
      type: ActionTypes.ADD_STICKY,
      payload: sticky
  })
};

export const updateStickyPosition = (id, x, y) => {
  let sticky = {
    x: x,
    y: y,
    id: id
  };
  return ({
      type: ActionTypes.UPDATE_STICKY_POSITION,
      payload: sticky
  })
}

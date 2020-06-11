import * as ActionTypes from './ActionTypes';

const initialState = {

};

export const Stickies = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_STICKY:
            let sticky = action.payload;
            sticky.id = state.length;
            return [...state, action.payload];
        case ActionTypes.UPDATE_STICKY_POSITION:
            let newState = state.map(function (sticky) {
              if(sticky.id === action.payload.id){
                sticky.x = action.payload.x;
                sticky.y = action.payload.y;
              }
              return sticky
            })
            return newState;
        default:
            return state;
    }
};

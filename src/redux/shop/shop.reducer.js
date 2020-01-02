import SHOPE_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOPE_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

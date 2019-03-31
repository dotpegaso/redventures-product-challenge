const globalState = {
  totalValue: 10
};

function rootReducer(state = globalState, action) {

  if (action.type === 'UPDATE_VALUE') {
    return Object.assign({}, state, {
      totalValue: state.totalValue + action.payload
    });
  }
  return state;
}

export default rootReducer;
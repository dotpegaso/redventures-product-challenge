const globalState = {
  jsonData: false,
  car: {
    model: 'R',
    engine: { type: '', kwh: '', price: 0 },
    color: { label: '', price: 0 },
    wheel: { label: '', price: 0 },
    total: { engine: 0, color: 0, wheel: 0}
  }
};

const rootReducer = (state = globalState, action) => {
  
  if(action.type === 'API_REQUEST'){
    return {...state, jsonData: action.json}
  }

  if (action.type === 'UPDATE_ENGINE') {
    return {
      ...state,
      car: {
        ...state.car,
        total: {
          ...state.car.total,
          engine: action.payload.total
        },
        engine: action.payload.engine
      }
    }
  }

  if (action.type === 'UPDATE_COLOR') {
    return {
      ...state,
      car: {
        ...state.car,
        total: action.payload.total,
        color: action.payload.engine
      }
    }
  }


  return state;
}

export default rootReducer;
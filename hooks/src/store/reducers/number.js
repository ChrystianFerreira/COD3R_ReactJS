

export function numberReducer(state, action) {
  switch(action.type) {
    case 'numberAdd2':
      return { ...state, number: state.number + 2 };
    case 'multiply':
      return { ...state, number: state.number * (action.payload = 7)};
    case 'divide':
      return { ...state, number: state.number / (action.payload = 25)};
    case 'add':
      return { ...state, number: state.number + isNaN(parseInt(action.payload)) ? 0 : parseInt(action.payload)};
    case 'toInt':
      return { ...state, number: parseInt(state.number) };
    default:
      return state;
  }
}
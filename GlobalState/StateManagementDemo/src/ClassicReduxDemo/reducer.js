export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const increaseAction = () => ({ type: INCREASE });
export const decreaseAction = () => ({ type: DECREASE });

const initialState = { count: 0 };

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

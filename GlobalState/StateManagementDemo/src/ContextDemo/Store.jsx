import React, { createContext, useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const CountContext = createContext();

export function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

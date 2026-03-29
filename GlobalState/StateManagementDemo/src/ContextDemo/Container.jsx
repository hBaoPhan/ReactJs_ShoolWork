import React, { useContext } from 'react';
import { CountContext, CountProvider } from './Store';
import ChildComponent from '../ChildComponent';

function AppContent() {
  const { state, dispatch } = useContext(CountContext);
  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '20px', textAlign: 'center', width: 'fit-content' }}>
      <h3>Context + useReducer</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <ChildComponent type="A" count={state.count} library="Context" />
        <ChildComponent type="B" count={state.count} library="Context" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
          onClick={() => dispatch({ type: 'INCREASE' })}
        >
          Increase
        </button>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}
          onClick={() => dispatch({ type: 'DECREASE' })}
        >
          Decrease
        </button>

      </div>
    </div>
  );
}

export default function Container() {
  return (
    <CountProvider>
      <AppContent />
    </CountProvider>
  );
}

import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { increase, decrease } from './counterSlice';
import ChildComponent from '../ChildComponent';

function AppContent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '20px', textAlign: 'center', width: 'fit-content' }}>
      <h3>Redux Toolkit</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <ChildComponent type="A" count={count} library="RTK" />
        <ChildComponent type="B" count={count} library="RTK" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
          onClick={() => dispatch(increase())}
        >
          Increase
        </button>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}
          onClick={() => dispatch(decrease())}
        >
          Decrease
        </button>

      </div>
    </div>
  );
}

export default function Container() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

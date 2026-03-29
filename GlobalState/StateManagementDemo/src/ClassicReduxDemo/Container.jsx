import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { increaseAction, decreaseAction } from './reducer';
import ChildComponent from '../ChildComponent';

function AppContent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '20px', textAlign: 'center', width: 'fit-content' }}>
      <h3>Classic Redux</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <ChildComponent type="A" count={count} library="Redux" />
        <ChildComponent type="B" count={count} library="Redux" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
          onClick={() => dispatch(increaseAction())}
        >
          Increase
        </button>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}
          onClick={() => dispatch(decreaseAction())}
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

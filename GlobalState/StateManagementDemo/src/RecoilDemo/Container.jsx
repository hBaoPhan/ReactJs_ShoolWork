import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { countState } from './store';
import ChildComponent from '../ChildComponent';

function AppContent() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '20px', textAlign: 'center', width: 'fit-content' }}>
      <h3>Recoil</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <ChildComponent type="A" count={count} library="Recoil" />
        <ChildComponent type="B" count={count} library="Recoil" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increase
        </button>
        <button 
          style={{ padding: '10px 40px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrease
        </button>

      </div>
    </div>
  );
}

export default function Container() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

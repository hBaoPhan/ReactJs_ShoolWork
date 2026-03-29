import React from 'react';

export default function ChildComponent({ type, count, library }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e2f0d9', border: '1px solid green', margin: '10px', textAlign: 'center', minWidth: '100px' }}>
      <h2 style={{ color: 'black' }}>{count}</h2>
      <p>{type}</p>
    </div>
  );
}

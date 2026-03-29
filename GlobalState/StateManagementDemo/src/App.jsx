import React from 'react';
import ContextContainer from './ContextDemo/Container';
import ClassicReduxContainer from './ClassicReduxDemo/Container';
import ReduxToolkitContainer from './ReduxToolkitDemo/Container';
import RecoilContainer from './RecoilDemo/Container';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Global State </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        <ContextContainer />
        <ClassicReduxContainer />
        <ReduxToolkitContainer />
        <RecoilContainer />
      </div>
    </div>
  );
}

export default App;

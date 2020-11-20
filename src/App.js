import React from 'react';
import './App.css';
import ContextPanel from './components/ContextPanel';
import WorkingWindow from './components/WorkingWindow';

function App() {
  return (
    <div className="App">
      <ContextPanel />
      <WorkingWindow />
    </div>
  );
}

export default App;

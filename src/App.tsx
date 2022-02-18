import React from 'react';
import { PomodoroTimer } from './components/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTime={10}
        shortRestTime={2}
        longRestTime={5}
        cycles={4}
      />
    </div>
  );
}

export default App;

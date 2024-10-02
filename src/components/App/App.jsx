import { useState } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import './App.css';

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
      <Options />
      <Feedbac
    </>
  );
}

export default App;

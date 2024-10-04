import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import './App.css';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedValues = localStorage.getItem('feedbackValues');
    if (savedValues) {
      setValues(JSON.parse(savedValues));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (
        <Feedback values={values} totalFeedback={totalFeedback} />
      )}
    </>
  );
}

export default App;

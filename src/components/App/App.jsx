import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import "./App.css";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const loadFeedbackValues = () => {
  const savedValues = localStorage.getItem("feedbackValues");
  return savedValues
    ? JSON.parse(savedValues)
    : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [values, setValues] = useState(loadFeedbackValues);

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const goodPercent =
    totalFeedback > 0 ? Math.round((values.good / totalFeedback) * 100) : 0;
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
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          goodPercent={goodPercent}
        />
      )}
    </>
  );
}

export default App;

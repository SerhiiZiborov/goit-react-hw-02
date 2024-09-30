import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const updateFeedback = (feedbackType) => {
  //   setFeedback((prevFeedback) => ({
  //     ...prevFeedback,
  //     [feedbackType]: prevFeedback[feedbackType] + 1,
  //   }));
  // };

  return (
    <>
      <Description />
      <Options />
      <div>
        <p>good: {values.good}</p>
        <p>neutral: {values.neutral}</p>
        <p>bad: {values.bad}</p>
      </div>
    </>
  );
}

export default App;

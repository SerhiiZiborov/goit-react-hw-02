const Feedback = ({ values, totalFeedback, goodPercent }) => {
  return (
    <ul>
      <li>Good: {values.good}</li>
      <li>Neutral: {values.neutral}</li>
      <li>Bad: {values.bad}</li>
      {totalFeedback > 0 && (
        <>
          <li>total: {totalFeedback}</li>
          <li>Positive: {goodPercent}%</li>
        </>
      )}
    </ul>
  );
};

export default Feedback;

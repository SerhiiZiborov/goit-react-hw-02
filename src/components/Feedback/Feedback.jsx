const Feedback = ({ values, totalFeedback }) => {
  const goodPercent =
    totalFeedback > 0 ? Math.round((values.good / totalFeedback) * 100) : 0;
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

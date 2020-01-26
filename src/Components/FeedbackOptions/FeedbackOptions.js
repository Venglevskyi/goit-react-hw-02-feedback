import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <button type="button" onClick={() => onLeaveFeedback(options[0])}>
      Good
    </button>
    <button type="button" onClick={() => onLeaveFeedback(options[1])}>
      Neutral
    </button>
    <button type="button" onClick={() => onLeaveFeedback(options[2])}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;

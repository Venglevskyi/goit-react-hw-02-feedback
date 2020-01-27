import React from "react";
import PropTypes from "prop-types";

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

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;

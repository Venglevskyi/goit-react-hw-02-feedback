import React from "react";
import PropTypes from "prop-types";

import Statistic from "./Statistic";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section>
    <h2>Statistics</h2>
    {total() > 0 ? (
      <>
        <Statistic label="Good" value={good} />
        <Statistic label="Neutral" value={neutral} />
        <Statistic label="Bad" value={bad} />
        <Statistic label="Total" value={total()} />
        <Statistic label="Positive feedback" value={positivePercentage()} />
      </>
    ) : (
      <Notification message="No feedback given" />
    )}
  </section>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired
};

export default Statistics;

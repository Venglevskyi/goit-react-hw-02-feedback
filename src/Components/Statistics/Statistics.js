import React from "react";
import PropTypes from "prop-types";

import Statistic from "./Statistic";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section>
    <h2>Statistics</h2>
    {total > 0 ? (
      <>
        <Statistic label="Good" value={String(good)} />
        <Statistic label="Neutral" value={String(neutral)} />
        <Statistic label="Bad" value={String(bad)} />
        <Statistic label="Total" value={String(total)} />
        <Statistic label="Positive feedback" value={positivePercentage} />
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
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired
};

export default Statistics;

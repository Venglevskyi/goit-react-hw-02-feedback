import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <table>
    <tbody>
      <tr>
        <td>Good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{total}</td>
      </tr>
      <tr>
        <td>Positive feedback</td>
        <td>{positivePercentage}%</td>
      </tr>
    </tbody>
  </table>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;

import React from "react";
import PropTypes from "prop-types";

const Statistic = ({ label, value }) => (
  <tbody>
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  </tbody>
);

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Statistic;

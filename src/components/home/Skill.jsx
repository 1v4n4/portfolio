import React from 'react';
import '../../CSS/home.css';
import PropTypes from 'prop-types';

const Skill = ({ tag, list }) => (
  <p className="skillp text-center">
    <span className="font-weight-bold">{tag}</span>
    {list}
  </p>
);

export default Skill;

Skill.propTypes = {
  tag: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};

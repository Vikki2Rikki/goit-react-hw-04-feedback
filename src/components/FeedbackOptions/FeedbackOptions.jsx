import { WrapperBtn, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperBtn>
      {options.map(option => (
        <Btn type="button" onClick={onLeaveFeedback} key={option}>
          {option}
        </Btn>
      ))}
    </WrapperBtn>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  option: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

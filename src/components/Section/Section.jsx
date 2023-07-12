import PropTypes from 'prop-types';
import { Title } from './Section.styled';

import React from 'react';

const Section = ({ title = '', children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = { title: PropTypes.string.isRequired };

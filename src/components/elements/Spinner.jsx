import React from 'react';
import { StyledSpinner } from '../styles/StyledSpinner';

const Spinner = () => (
  <StyledSpinner>
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </StyledSpinner>
);

export default Spinner;

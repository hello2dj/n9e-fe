import React from 'react';
import GraphStyles from './GraphStyles';
import StandardOptions from '../../Fields/StandardOptions';
import ValueMappings from '../../Fields/ValueMappings';

export default function Timeseries() {
  return (
    <>
      <GraphStyles />
      <ValueMappings />
      <StandardOptions />
    </>
  );
}

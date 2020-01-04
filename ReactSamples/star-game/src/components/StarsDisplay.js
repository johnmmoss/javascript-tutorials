import React from 'react';
import utils from '../util.js'

const StarsDisplay = props => (
  <>
    {
      utils.range(1, props.count).map(x =>
        <div key={x} className="star" />
      )}
  </>
);

export default StarsDisplay;
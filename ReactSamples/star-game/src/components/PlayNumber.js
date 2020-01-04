import React from 'react';
import colors from '../colors';

const PlayNumber = props => (
    <button
      key={props.number}
      className='number'
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClickHandler(props.number, props.status)}
    >
      {props.number}
    </button>
  )

export default PlayNumber;
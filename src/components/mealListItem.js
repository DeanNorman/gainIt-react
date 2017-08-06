import React, { Component } from 'react';

const MealListItem = (props) => {
  console.log(props);

    const className = `list-group-item justify-content-between ${props.cals === props.goal ? 'completed': ''}`;

  return (
    <li className={className}>
      {`Day: ${props.day}`}
      <span className="badge badge-default badge-pill">{`${props.cals}/${props.goal}`}</span>
    </li>
  )
};

export default MealListItem;

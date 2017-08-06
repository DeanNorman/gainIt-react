import React, { Component } from 'react';

const MealListItem = (props) => {
  return (
    <li className="list-group-item justify-content-between">
      {`Day ${props.day}`}
      <span className="badge badge-default badge-pill">{props.cals}</span>
    </li>
  )
};

export default MealListItem;

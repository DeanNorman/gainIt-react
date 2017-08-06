import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import MealListItem from './mealListItem';


class MealList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        meals: [
         {
          day: 1,
          cals: 100,
          goal:2500,
        },
        {
          day:2,
          cals:200,
          goal:2500,
        },
        {
           day: 3,
           cals:2500,
           goal:2500,
        }
      ]
    };
};

  render() {
    const listItems = _.map(this.state.meals, meal => {
      return (
        <Link key={meal.day} to={`/item/${meal.day}`}>
          <MealListItem
            key={meal.day}
            day={meal.day}
            cals={meal.cals}
            goal={meal.goal}
          />
         </Link>
      );
    });

    return (
      <div>
        <h3>Meal List</h3>
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default MealList;

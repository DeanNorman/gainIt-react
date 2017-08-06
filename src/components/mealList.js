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
        },
        {
          day:2,
          cals:200,
        },
        {
           day: 3,
           cals:150,
        }
      ]
    };
};

  render() {
    const listItems = _.map(this.state.meals, meal => {
      return (
        <Link to={`/item/${meal.day}`}>
          <MealListItem
            key={meal.day}
            day={meal.day}
            cals={meal.cals}
          />
         </Link>
      );
    });

    return (
      <div>Meal List
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default MealList;

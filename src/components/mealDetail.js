import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MealDetail extends Component {
  render() {
    return(
      <div>
        <div>
        <h3>Meal Detail</h3>
      </div>
        <div classname="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back
          </Link>
        </div>
      </div>

    );
  }
}

export default MealDetail;

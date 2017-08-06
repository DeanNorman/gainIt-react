import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import MealList from './components/mealList';
import MealListItem from './components/mealListItem';
import MealDetail from './components/mealDetail';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/item/:id" component={MealDetail} />
        <Route exact path="/" component={MealList} />
      </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));

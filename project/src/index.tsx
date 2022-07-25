import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  RENT_OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentOffersCount = {Setting.RENT_OFFERS_COUNT}
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));

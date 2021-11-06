import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import './scss/app.scss';

import App from './App';

/* 
  + 1) Подобрать другие цвета (изменить дизайн)
  + 2) Адаптивность для мобильных устройств
  + 3) Поправить верстку пицц
  4) Оптимизировать рендеринг
  5) Создать серверную часть и залить проект на heroku
*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



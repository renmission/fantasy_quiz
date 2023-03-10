import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './style.css';
import App from './app';
import configStore from './redux/store';

const container = document.getElementById('root');

const root = createRoot(container);

const store = configStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

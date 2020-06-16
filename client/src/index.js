import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import 'semantic-ui-css/semantic.min.css';


ReactDom.render(
  <Provider store={createStore(reducers,   applyMiddleware(thunk))}>
    <App/>
  </Provider>
  , document.querySelector('#root')
);

import MaterializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';


const store = createStore(reducers,{}, applyMiddleware(reduxThunk))


reactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'))

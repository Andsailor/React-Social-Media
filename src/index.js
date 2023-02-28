import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import App from './App';

import store from './redux/redux-store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Show store
console.log(store.getState());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);




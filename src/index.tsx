import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store'
import TaskApp from '../src/store/components/Task'

const store = configureStore;

ReactDOM.render(
    <Provider store={store()}>
        <TaskApp />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
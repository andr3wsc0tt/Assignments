import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { taskReducer } from './reducers/reducers';

const rootReducer = combineReducers({
    taskReduce : taskReducer 
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore(){
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware()
        )
    );
    return store;
}
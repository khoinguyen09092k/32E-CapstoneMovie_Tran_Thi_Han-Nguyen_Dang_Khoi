import { combineReducers,applyMiddleware, createStore } from 'redux';

import thunk from  'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
const rootReducer = combineReducers({
   CarouselReducer
    //state ứng dụng
});

export const store = createStore(rootReducer,applyMiddleware(thunk));
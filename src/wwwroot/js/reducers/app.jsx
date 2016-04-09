import { combineReducers } from 'redux';
import telemarketerReducer from './telemarketerReducer';

const app = combineReducers({
    telemarketers: telemarketerReducer,
    territories: (state = {}) => state
});

export default app;
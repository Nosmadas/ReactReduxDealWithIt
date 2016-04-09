import { combineReducers } from 'redux';
import selectedTelemarketers from './selectedTelemarketers';

const app = combineReducers({
    selectedTelemarketers,
    telemarketers: (state = {}) => state,
    territories: (state = {}) => state,
});

export default app;
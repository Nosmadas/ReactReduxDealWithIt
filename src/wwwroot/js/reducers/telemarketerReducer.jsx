const telemarketerReducer = (state = [], action) => {

    if (action.type == 'TELEMARKETER_SELECTED') {
        return state.map(tm => tm.name === action.telemarketer.name ? Object.assign({}, tm, { selected: true }) : tm);
    }

    if (action.type == 'TELEMARKETER_DESELECTED') {
        return state.map(tm => tm.name === action.telemarketer.name ? Object.assign({}, tm, { selected: false }) : tm);
    }

    return state;
};

export default telemarketerReducer;
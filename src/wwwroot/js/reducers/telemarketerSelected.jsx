
// This is what combine reducers does!
// const app = (state = initialState, action) => {
//     return {
//         telemarketerSelected: telemarketerSelected(state.telemarketerSelected, action)
//     };
// }

const telemarketerSelected = (state = [], action) => {
    
    if (action.type == 'TELEMARKETER_SELECTED') {
       return state.map(tm => tm.name === action.telemarketer.name ? Object.assign({}, tm, { selected: true }) : tm);
    }
    
    return state;
};

export default telemarketerSelected;
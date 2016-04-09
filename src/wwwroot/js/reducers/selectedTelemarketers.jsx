
// This is what combine reducers does!
// const app = (state = initialState, action) => {
//     return {
//         telemarketerSelected: telemarketerSelected(state.telemarketerSelected, action)
//     };
// }

const selectedTelemarketers = (state = [], action) => {
    
    if (action.type == 'TELEMARKETER_SELECTED') {
        
        return Object.assign([], state, [...state, action.id]); 
    }
    
    return state;
};

export default selectedTelemarketers;
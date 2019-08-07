// Listings Reducer
const listingsReducerDefaultState = [];

export default (state = listingsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LISTING':
            return [
                ...state,
                action.listing
            ];
        
        default:
            return state;

    };
};
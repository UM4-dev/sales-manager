

export const appReducer = ( initialState = [], action) => {
    switch ( action.type ) {
        case '[PRODUCT] add product' :
            return [ action.payload, ...initialState ];
        case '[PRODUCT] delete product' :
            return initialState.filter( todo => todo.description !== action.payload.description );
        case '[PRODUCT] patch product' :
            return initialState.map( todo => todo.id === action.payload.id ? ({...todo, done : !action.payload.done }) : (todo));
        default:
            return initialState;
    }
}
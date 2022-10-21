//Reducers
const initialState = {
    current: '/',
    front: '/',
    back: '/',
}

export default function routerReducer( state = initialState, action){
    const { type } = action
    switch( type ) {
        case '@router/set_route':
            return state
        case '@router/front_route':
            return state
        case '@router/back_route':
            return state
        default:
            return state
    }
}
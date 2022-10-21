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
            return { 
                current: action.payload,
                front: action.payload,
                back: state.current,
            }
        case '@router/front_route':
            return { 
                current: state.front,
                front: state.front,
                back: state.current,
            }
        case '@router/back_route':
            return { 
                current: state.back,
                front: state.current,
                back: state.back,
            }
        default:
            return state
    }
}
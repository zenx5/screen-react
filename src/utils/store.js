import { createStore, combineReducers } from 'redux'
import { routeReducer } from '../reducers'

//Store
const reducers = combineReducers({
    routes: routeReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
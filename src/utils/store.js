import { createStore, combineReducers } from 'redux'
import { routeReducer, configurationReducer } from '../reducers'

//Store
const reducers = combineReducers({
    routes: routeReducer
    configuration: configurationReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
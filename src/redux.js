import { applyMiddleware, createStore } from "redux";
import combineReducer from "./store/reducers/combine_reducers";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";

const reduxConfig = () => {
    const store = createStore(combineReducer, applyMiddleware(thunk))
    return { store, persistStore: persistStore(store) }
}

export default reduxConfig
import {combineReducers, createStore} from "redux";
import { rootReducer} from "../Reducers/RootReducer";

export const  RootReducer = combineReducers({
    rootReducer: rootReducer
})
export type AppRootType = ReturnType<typeof RootReducer>

export const store = createStore(RootReducer)
// @ts-ignore
window.store = store
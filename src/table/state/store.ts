import {combineReducers, createStore} from "redux";
import {AgeReducer} from "../Reducers/AgeReducer";
import {GenderReducer} from "../Reducers/GenderReducer";

export const  RootReducer = combineReducers({
    AgeReducer: AgeReducer,
    GenderReducer: GenderReducer
})
export type AppRootType = ReturnType<typeof RootReducer>

export const store = createStore(RootReducer)
// @ts-ignore
window.store = store
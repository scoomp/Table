import { initialStateType } from "../state/state";

// Define your ActionType and ActionTypes
type SortUserActionType = {
    type: 'SORT-AGE-TYPE'
    age: number
}

type ActionType = SortUserActionType

// Define the initial state
const initialState: initialStateType = {
    // Define your initial state properties here
    users: [] // Assuming users is an array of user objects
    // ...other initial state properties
}

// Define your AgeReducer
export const AgeReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SORT-AGE-TYPE': {
            // Assume sorting logic remains the same
            const sortedUsers = [...state.users].sort((a, b) => a.age - b.age);
            return { ...state, users: sortedUsers };
        }
        default:
            return state;
    }
}

export const sortUserAC = (ageType: number): SortUserActionType => {
    return { type: "SORT-AGE-TYPE", age: ageType };
}
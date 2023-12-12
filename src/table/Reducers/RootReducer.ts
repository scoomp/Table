import {initialStateType} from "../state/state";

type SortGenderActionType = {
    type: 'SORT-GENDER-TYPE'
    gender: 'male' | 'female'
}
type SortUserActionType = {
    type: 'SORT-AGE-TYPE'
    age: number
}
type ActionType = SortGenderActionType | SortUserActionType

export const rootReducer = (state: initialStateType, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SORT-GENDER-TYPE': {
            const filteredUsers = state.users.filter(user => user.gender === action.gender); // Filter users based on gender
            return { ...state, users: filteredUsers }; // Return the state with filtered users
        }
        case 'SORT-AGE-TYPE': {
            // Assume sorting logic remains the same
            const sortedUsers = [...state.users].sort((a, b) => a.age - b.age);
            return { ...state, users: sortedUsers };
        }
        default:
            return state;
    }
};

export const sortGenderAC = (genderType: 'male' | 'female'): SortGenderActionType => {
    return {type: "SORT-GENDER-TYPE", gender: genderType}
}
export const sortUserAC = (ageType: number): SortUserActionType => {
    return { type: "SORT-AGE-TYPE", age: ageType };
}
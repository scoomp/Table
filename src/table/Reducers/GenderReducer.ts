import {initialStateType} from "../state/state";

type SortGenderActionType = {
    type: 'SORT-GENDER-TYPE'
    gender: 'male' | 'female'
}

type ActionType = SortGenderActionType

export const GenderReducer = (state: initialStateType, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SORT-GENDER-TYPE': {
            const filteredUsers = state.users.filter(user => user.gender === action.gender); // Filter users based on gender
            return { ...state, users: filteredUsers }; // Return the state with filtered users
        }
        default:
            return state;
    }
};

export const sortGenderAC = (genderType: 'male' | 'female'): SortGenderActionType => {
    return {type: "SORT-GENDER-TYPE", gender: genderType}
}
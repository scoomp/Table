 type initialStateType = {
    users: usersType[]
}
 type usersType = {
    id: number,
    age: number,
    gender: 'male' | 'female',
    email: string

}
export const initialState: initialStateType = {
    users: [
        {id: 1, age: 25, gender: 'male', email: 'user1@example.com'},
        {id: 2, age: 90, gender: 'female', email: 'user2@example.com'},
        {id: 3, age: 67, gender: 'male', email: 'user3@example.com'},
        {id: 4, age: 65, gender: 'female', email: 'user4@example.com'},
        {id: 5, age: 135, gender: 'female', email: 'user5@example.com'},
        {id: 6, age: 84, gender: 'male', email: 'user6@example.com'},
        {id: 7, age: 8, gender: 'female', email: 'user7@example.com'},
        {id: 8, age: 5, gender: 'male', email: 'user8@example.com'},
        {id: 9, age: 3, gender: 'female', email: 'user9@example.com'},
        {id: 10, age: 23, gender: 'female', email: 'user10@example.com'},
        {id: 11, age: 11, gender: 'male', email: 'user11@example.com'},
        {id: 12, age: 89, gender: 'female', email: 'user12@example.com'},
        {id: 13, age: 2, gender: 'female', email: 'user13@example.com'},
        {id: 14, age: 7, gender: 'male', email: 'user14@example.com'},
        {id: 15, age: 45, gender: 'male', email: 'user15@example.com'},
        {id: 16, age: 18, gender: 'male', email: 'user16@example.com'},
        {id: 17, age: 89, gender: 'female', email: 'user17@example.com'},
        {id: 18, age: 24, gender: 'male', email: 'user18@example.com'},
        {id: 19, age: 56, gender: 'male', email: 'user19@example.com'},
        {id: 20, age: 27, gender: 'female', email: 'user20@example.com'},
    ],
};


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
            const filteredUsers = state.users.filter(user => user.gender === action.gender);// Filter users based on gender
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
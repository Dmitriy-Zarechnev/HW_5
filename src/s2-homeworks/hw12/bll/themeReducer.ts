export type ThemeReducerActionType = { type: 'SET_THEME_ID', id: number }

type InitStateType = {
    themeId: number
}
const initState: InitStateType = {
    themeId: 1
}

export const themeReducer = (state = initState, action: ThemeReducerActionType): InitStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}


export const changeThemeId = (id: number): ThemeReducerActionType => ({type: 'SET_THEME_ID', id})

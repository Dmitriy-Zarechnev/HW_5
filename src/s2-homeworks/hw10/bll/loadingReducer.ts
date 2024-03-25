export type LoadingInitStateType = {
    isLoading: boolean
}

type LoadingReducerActionType = ReturnType<typeof loadingAC>

const initState: LoadingInitStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingReducerActionType): LoadingInitStateType => {
    switch (action.type) {
        case 'CHANGE-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {type: 'CHANGE-LOADING', isLoading} as const
}

import {AppStoreType} from './store'

export const loadingSelector = (state: AppStoreType) => {
    return state.loading.isLoading
}
import {AppStoreType} from '../../hw10/bll/store'

export const themeSelector = (state: AppStoreType) => {
    return state.theme.themeId
}
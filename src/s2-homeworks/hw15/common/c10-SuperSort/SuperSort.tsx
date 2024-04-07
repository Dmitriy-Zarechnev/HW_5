import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import FilterListIcon from '@mui/icons-material/FilterList'

// добавить в проект иконки и импортировать
const downIcon = ArrowDropDownIcon
const upIcon = ArrowDropUpIcon
const noneIcon = FilterListIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort !== down && sort !== up) {
        return down
    } else if (sort === down) {
        return up
    } else {
        return ''
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort,
        value,
        onChange,
        id = 'hw15'
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const Icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*    alt={'arrow-picture'}*/}
            {/*/>*/}
            <Icon id={id + '-icon-' + sort}/>

        </span>
    )
}

export default SuperSort

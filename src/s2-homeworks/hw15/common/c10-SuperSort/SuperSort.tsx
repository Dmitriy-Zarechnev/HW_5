import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import s from '../../HW15.module.css'

// добавить в проект иконки и импортировать
const downIcon = ArrowDropDownIcon
const upIcon = ArrowDropUpIcon
const noneIcon = FilterAltIcon

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
        <span className={s.spanSort}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
        <Icon color={'secondary'} fontSize={'medium'} id={id + '-icon-' + sort}/>
        </span>
    )
}

export default SuperSort

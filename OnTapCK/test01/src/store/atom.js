import { atom } from "recoil";

export const userState = atom({
    key: 'user',
    default: null
})

export const bookState = atom({
    key: 'book',
    default: []
})

export const filterState = atom({
    key: 'filter',
    default: 'all'
})
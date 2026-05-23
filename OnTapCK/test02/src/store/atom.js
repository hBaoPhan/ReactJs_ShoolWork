import { atom } from "recoil";

export const userState = atom({
    key: 'user',
    default: null
})

export const cartState = atom({
    key: 'cart',
    default: []
})

export const productsState = atom({
    key: 'products',
    default: []
})

export const filterState=atom({
    key:'filter',
    default: 'all'
})

export const searchTerm=atom({
    key:'search',
    default:''
})
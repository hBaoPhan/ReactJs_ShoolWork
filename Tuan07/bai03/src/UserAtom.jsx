import { atom } from 'recoil'

let UserAtom = atom({
    key: 'user',
    default: { username: "", isLogin: false }
})

export default UserAtom;
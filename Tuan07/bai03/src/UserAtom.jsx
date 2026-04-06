import {atom} from 'recoil'

let user=atom({
    key:'user',
    default:{username:"HoaiBao",isLogin: false}
})

export default UserAtom
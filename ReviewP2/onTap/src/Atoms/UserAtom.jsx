import { atom } from "recoil";

export let UserAtom = atom({
    key: 'user',
    default: { username: "", email: "" }
})
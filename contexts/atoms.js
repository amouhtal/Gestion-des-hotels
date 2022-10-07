import { atom, useAtom } from 'jotai'


export const toggleNav = atom(false);
export const leftBarBackColot = atom('linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),url("https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")')
// export const toggleNavb = atom(
//     (get) => get(toggleNav),
//     (get, set, _arg) => set(toggleNav, !get(toggleNav))
// )

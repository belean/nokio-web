import { atom } from 'recoil'

export const signedInAtom = atom(
  {
    default: false,
    key: 'signedIn'
  }
)


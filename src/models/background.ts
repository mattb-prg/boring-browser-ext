import { flow, types } from "mobx-state-tree";

export const id = 'bg-id'
export const backgroundModel = types.model({
    loggedIn: types.boolean,
}).actions((self) => {
    return {
        signIn: flow(function* () {
            self.loggedIn = true
        }),
        signOut: flow(function* () {
            self.loggedIn = false
        }),
    }
})

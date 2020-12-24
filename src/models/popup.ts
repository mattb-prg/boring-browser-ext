import { types } from "mobx-state-tree";

export const popupModel = types.model({
    test: types.string,
}).actions((self) => {
    return {
        changeTest() {
            self.test = 'something else'
        },
    }
})

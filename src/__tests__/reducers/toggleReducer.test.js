import toggleReducer from "../../reducers/toggleReducer"

const defaultState = false

describe("Reducer", () => {
    test("should return default state when state is not undefined", () => {
        expect(toggleReducer(undefined, { type: "DUMMY" })).toEqual(
            defaultState
        )
    })
    test("should return expected state for toggle action", () => {
        const prevState = false
        const action = {
            type: "TOGGLE",
        }
        const expectedState = !prevState
        expect(toggleReducer(prevState, action)).toEqual(expectedState)
    })
})

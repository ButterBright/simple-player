import authReducer from "../../reducers/authReducer"

const defaultState = {}

describe("Reducer", () => {
    test("should return default state when state is not undefined", () => {
        expect(authReducer(undefined, { type: "DUMMY" })).toEqual(defaultState)
    })
    test("should return expected state for auth action", () => {
        const prevState = {}
        const action = {
            type: "AUTH",
            payload: { res: "" },
        }
        const expectedState = { res: action.payload.res }
        expect(authReducer(prevState, action)).toEqual(expectedState)
    })
})

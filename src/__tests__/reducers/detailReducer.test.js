import detailReducer from "../../reducers/detailReducer"

const defaultState = {}

describe("Reducer", () => {
    test("should return default state when state is not undefined", () => {
        expect(detailReducer(undefined, { type: "DUMMY" })).toEqual(
            defaultState
        )
    })
    test("should return expected state for fetch detail action", () => {
        const prevState = {}
        const action = {
            type: "FETCH_DETAIL",
            payload: {
                url: "",
                info: "",
                isAvailable: "",
            },
        }
        const expectedState = { url: action.payload.url, info: action.payload.info, isAvailable: action.payload.isAvailable }
        expect(detailReducer(prevState, action)).toEqual(expectedState)
    })
})

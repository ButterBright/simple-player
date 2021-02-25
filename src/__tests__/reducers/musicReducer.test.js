import musicReducer from "../../reducers/musicReducer"

const defaultState = { newSongs: [] }

describe("Reducer", () => {
    test("should return default state when state is not undefined", () => {
        expect(musicReducer(undefined, { type: "DUMMY" })).toEqual(defaultState)
    })
    test("should return expected state for load music action", () => {
        const prevState = { newSongs: [] }
        const action = {
            type: "FETCH_SONGS",
            payload: { newSongs: "" },
        }
        const expectedState = {
            ...prevState,
            newSongs: action.payload.newSongs,
        }
        expect(musicReducer(prevState, action)).toEqual(expectedState)
    })
    test("should return expected state for search music action", () => {
        const prevState = { newSongs: [] }
        const action = {
            type: "SEARCH",
            payload: { search: "" },
        }
        const expectedState = { ...prevState, search: action.payload.search }
        expect(musicReducer(prevState, action)).toEqual(expectedState)
    })
    test("should return expected state for voice search music action", () => {
        const prevState = { newSongs: [] }
        const action = {
            type: "VOICE_SEARCH",
            payload: { voiceSearch: "" },
        }
        const expectedState = {
            ...prevState,
            search: action.payload.voiceSearch,
        }
        expect(musicReducer(prevState, action)).toEqual(expectedState)
    })
    test("should return expected state for clear action", () => {
        const prevState = { newSongs: [1, 2, 3], search: [1, 2, 3, 4, 5] }
        const action = {
            type: "CLEAR",
        }
        const expectedState = {
            ...prevState,
            search: [],
        }
        expect(musicReducer(prevState, action)).toEqual(expectedState)
    })
})

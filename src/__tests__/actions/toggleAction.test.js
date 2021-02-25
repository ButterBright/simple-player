import { toggle } from "../../actions/toggleAction"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const DEFAULT_STATE = {}
const store = mockStore(DEFAULT_STATE)

describe("Action Creators", () => {
    test("toggle action creator return expected action", () => {
        const expectedResponse = {
            type: "TOGGLE",
        }

        store.dispatch(toggle())
        expect(store.getActions()[0]).toEqual(expectedResponse)
    })
})

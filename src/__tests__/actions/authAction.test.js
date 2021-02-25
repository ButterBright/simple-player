import { auth } from "../../actions/authAction"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const DEFAULT_STATE = {}
const store = mockStore(DEFAULT_STATE)
const mock = new MockAdapter(axios)

describe("Action Creators", (phone, password) => {
    test("auth action creator return expected action", () => {
        const mockedResponse = {
            storedValues: { code: 200 },
        }

        mock.onGet("/auth").reply(200, mockedResponse)

        const expectedResponse = {
            type: "AUTH",
            payload: mockedResponse.storedValues,
        }

        store
            .dispatch(auth(phone, password))
            .then(response => {
                expect(response).toEqual(expectedResponse)
            })
            .catch(err => console.log(err))
    })
})

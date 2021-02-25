import {
    loadMusic,
    loadDetail,
    searchMusic,
    voiceSearchMusic,
} from "../../actions/musicAction"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const DEFAULT_STATE = { newsongs: [] }
const store = mockStore(DEFAULT_STATE)
const mock = new MockAdapter(axios)

describe("Action Creators", (id, keyword, res) => {
    test("load music action creator return expected action", () => {
        const mockedResponse = {
            storedValues: { song: 1 },
        }

        mock.onGet("/music").reply(200, mockedResponse)

        const expectedResponse = {
            type: "FETCH_SONGS",
            payload: mockedResponse.storedValues,
        }

        store
            .dispatch(loadMusic())
            .then(response => {
                expect(response).toEqual(expectedResponse)
            })
            .catch(err => console.log(err))
    })
    test("load detail action creator return expected action", () => {
        const mockedResponse = {
            storedValues: { song: 1 },
        }

        mock.onGet("/detail").reply(200, mockedResponse)

        const expectedResponse = {
            type: "FETCH_DETAIL",
            payload: mockedResponse.storedValues,
        }

        store
            .dispatch(loadDetail(id))
            .then(response => {
                expect(response).toEqual(expectedResponse)
            })
            .catch(err => console.log(err))
    })
    test("search music action creator return expected action", () => {
        const mockedResponse = {
            storedValues: { song: 1 },
        }

        mock.onGet("/music").reply(200, mockedResponse)

        const expectedResponse = {
            type: "SEARCH",
            payload: mockedResponse.storedValues,
        }

        store
            .dispatch(searchMusic(keyword))
            .then(response => {
                expect(response).toEqual(expectedResponse)
            })
            .catch(err => console.log(err))
    })
    test("voice search music action creator return expected action", () => {
        const mockedResponse = {
            storedValues: { song: 1 },
        }

        mock.onGet("/music").reply(200, mockedResponse)

        const expectedResponse = {
            type: "VOICE_SEARCH",
            payload: mockedResponse.storedValues,
        }

        store
            .dispatch(voiceSearchMusic(res))
            .then(response => {
                expect(response).toEqual(expectedResponse)
            })
            .catch(err => console.log(err))
    })
})

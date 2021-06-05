import axios from 'axios';
import { actionsTypes } from '../constants/stream'
const { REACT_APP_API_URL } = process.env;

const INITIAL_STATE = {
    pending: false,
    streams: [
        // {
        //     "id": 1,
        //     "title": "Stream Title",
        //     "description": "Stream Description",
        //     "imageUrl": null,
        //     "streamEnd": true,
        //     "user": {
        //         "id": 1,
        //         "username": "Stephulz",
        //         "name": "Stefan",
        //         "email": "stefansanches9@gmail.com",
        //         "streamKey": "407820a6-a644-4e2b-b4f7-5ad1afd65636",
        //         "imageUrl": null,
        //         "roles": [
        //             {
        //                 "id": 2,
        //                 "name": "USER"
        //             }
        //         ]
        //     }
        // }
    ],
    error: null
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.SEARCH_STREAM_PENDING: {
            return {
                ...state,
                pending: true
            }
        }
        case actionsTypes.SEARCH_STREAM_SUCCESS: {
            return {
                ...state,
                pending: false,
                streams: action.payload
            }
        }
        case actionsTypes.SEARCH_STREAM_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export { reducers };
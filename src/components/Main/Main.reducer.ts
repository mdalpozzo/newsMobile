import { Reducer } from 'redux';
import {
    State,
    SET_VIEW,
    GET_NEWS,
    SET_STORY,
    HOME,
    Stories,
    Story,
} from './Main.types';
import { ActionTypes } from './Main.actions';

export const defaultState: State = {
    view: HOME,
    stories: [],
    story: null,
};

const reducer: Reducer<State, ActionTypes> = (state: State = defaultState, {type, payload}: ActionTypes): State => {
    switch (type) {
        case SET_VIEW:
            state = {
                ...state,
                view: payload as string,
            };
            break;
        case GET_NEWS:
            state = {
                ...state,
                stories: payload as Stories,
            };
            break;
        case SET_STORY:
            state = {
                ...state,
                story: payload as Story,
            };
            break;
    }
    return state;
};

export default reducer;
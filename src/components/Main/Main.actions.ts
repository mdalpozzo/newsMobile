import {
    ActionType,
    createStandardAction,
    PayloadAC,
} from 'typesafe-actions';
import {
    SET_VIEW,
    GET_NEWS,
    SET_STORY,
    Stories,
    Story,
} from './Main.types';
import { Dispatch, AnyAction } from 'redux';
import {getNewsAPI} from '../../api/api';

export const setView = createStandardAction(SET_VIEW)<string>();

export const getNews = () => async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    const newsData =  await getNewsAPI();
    dispatch({
        type: GET_NEWS,
        payload: newsData,
    })
};

export const setStory = createStandardAction(SET_STORY)<Story>();

export const actions = {
    setView,
    getNews,
    setStory,
};

export type ActionTypes = ActionType<typeof actions | PayloadAC<string, Stories>>;
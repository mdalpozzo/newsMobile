import { createNamespacedConstFactory } from 'Utils/misc';
export const NAME_SPACE = '@Main';
export const cc = createNamespacedConstFactory(NAME_SPACE);

export interface State {
    view: string;
    stories: Stories;
    story: Story | null;
}

export interface NestedState {
    [NAME_SPACE]: State;
}

export interface Story {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string | null;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface Stories extends Array<Story> {
    [index: number]: Story;
}

// Reducer Cases
export const SET_VIEW = cc('SET_VIEW');
export const GET_NEWS = cc('GET_NEWS');
export const SET_STORY = cc('SET_STORY');

// View Cases
export const HOME = cc('HOME');
export const OTHER = cc('OTHER');
export const TEST = cc('TEST');

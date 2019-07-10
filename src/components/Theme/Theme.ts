import * as React from 'react';
import {StyleSheet} from 'react-native';

export const Theme = {
    light: StyleSheet.create({
        FeedItem: {
            backgroundColor: 'white',
            color: 'black',
        },
        Feed: {
            backgroundColor: '#eee',
        }
    }),
    dark: StyleSheet.create({
        FeedItem: {
            backgroundColor: '#444444',
            color: '#ccc',
        },
        Feed: {
            backgroundColor: '#333333',
        }
    }),
};

const ThemeContext = React.createContext(Theme.light);

export default ThemeContext;
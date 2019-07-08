import axios from 'axios';
import config from '../../config/config';
import {Story} from 'Components/Main';
import AsyncStorage from '@react-native-community/async-storage';

const expiryInMinutes = 60;
const cacheExpiryTime = expiryInMinutes * 1000 * 60;

export const getNewsAPI = async (): Promise<any> => {
    let data;
    try {
        const dataAsString = await AsyncStorage.getItem('@newsData');
        if (dataAsString) {
            const dataWithExp = JSON.parse(dataAsString);
            if (Date.now() < dataWithExp.expires) {
                data = dataWithExp.data;
            }
        }
    } catch (error) {
        console.log(error);
    }
        
    if (!data) {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.newsKey}`);
            data = response.data.articles.filter((story: Story) => story.source.name !== 'Youtube.com');
            const dataWithExp = {
                expires: Date.now() + cacheExpiryTime,
                data,
            }
            await AsyncStorage.setItem('@newsData', JSON.stringify(dataWithExp));
        } catch (error) {
            console.log(error);
        }
    }
    return data;
};
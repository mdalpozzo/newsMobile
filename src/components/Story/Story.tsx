import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Story.styles';
import Card from 'Components/Card';
import {msToHours} from 'Utils/misc';
import DefaultLayout from '../DefaultLayout';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

export interface Props {
    children?: React.ReactNode;
    stylesProp?: any;
    // story: any;
    navigation: NavigationScreenProp<NavigationRoute>;
}

const StoryFeedItem: React.FC<Props> = ({
    children,
    // story,
    stylesProp,
    navigation,
}): React.ReactElement => {
    let image;
    const story = navigation.getParam('story');
    if (story.urlToImage && story.urlToImage !== '') {
        image = <Image style={styles.Images} source={{uri: story.urlToImage}} />;
    }
    const hoursSincePublished = msToHours(Date.now() - Date.parse(story.publishedAt));
    return (
        <DefaultLayout>
            {image}
            <View style={styles.TextContainer}>
                <Text style={styles.Title}>{story.title}</Text>
                <Text style={styles.Content}>
                    {story.content}
                </Text>
            </View>
        </DefaultLayout>
    );
};

export default StoryFeedItem;
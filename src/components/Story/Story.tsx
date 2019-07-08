import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Story.styles';
import Card from 'Components/Card';
import {msToHours} from 'Utils/misc';
import DefaultLayout from '../DefaultLayout';

export interface Props {
    children?: React.ReactNode;
    stylesProp?: any;
    story: any;
}

const StoryFeedItem: React.FC<Props> = ({
    children,
    story,
    stylesProp,
}): React.ReactElement => {
    let image;
    if (story.urlToImage && story.urlToImage !== '') {
        image = <Image style={styles.Images} source={{uri: story.urlToImage}} />;
    }
    const hoursSincePublished = msToHours(Date.now() - Date.parse(story.publishedAt));
    return (
        <DefaultLayout>
            <Text>STORY</Text>
        </DefaultLayout>
    );
};

export default StoryFeedItem;
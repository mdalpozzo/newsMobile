import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoryFeedItem.styles';
import Card from 'Components/Card';
import {msToHours} from 'Utils/misc';

export interface Props {
    children?: React.ReactNode;
    stylesProp?: any;
    story: any;
    key?: number;
    onPress: () => void;
}

const StoryFeedItem: React.FC<Props> = ({
    children,
    story,
    key,
    stylesProp,
    onPress,
}): React.ReactElement => {
    let image;
    if (story.urlToImage && story.urlToImage !== '') {
        image = <Image style={styles.Images} source={{uri: story.urlToImage}} />;
    }
    const hoursSincePublished = msToHours(Date.now() - Date.parse(story.publishedAt));
    return (
        <Card onPress={onPress} stylesProp={[stylesProp, styles.Container]} key={key}>
            <View style={[styles.ViewContainer]}>
                {image}
                <View style={[styles.Details]}>
                    <Text numberOfLines={2} style={styles.Title}>{story.title}</Text>
                    <View style={styles.SourceAgeContainer}>
                        <Text style={styles.Source}>{story.source.name}</Text>
                        <Text style={styles.Age}> {Math.round((hoursSincePublished * 10)) / 10} hours ago</Text>
                    </View>
                </View>
            </View>
        </Card>
    );
};

export default StoryFeedItem;
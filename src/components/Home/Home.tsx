import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    Image
} from 'react-native';
import DefaultLayout from 'Components/DefaultLayout';
import styles from './Home.styles';
import StoryFeedItem from 'Components/StoryFeedItem';
import { Stories, Story, NestedState, ActionTypes } from 'Components/Main';
import { connect } from 'react-redux';
import { selectStories } from 'Components/Main/Main.selectors';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import ThemeContext from 'Components/Theme';

interface Props {
    stories: Stories;
    navigation: NavigationScreenProp<NavigationRoute>;
};

class Home extends Component<Props> {
    static navigationOptions = {
        header: null,
    };

    private feedItemOnPress = (story: Story) => {
        return () => {
            this.props.navigation.navigate('Story', {
                story: story,
            });
        }
    };

    render () {
        const {
            stories,
            navigation,
        } = this.props as Props;
        let Theme = this.context;
        let mainStory: Story;
        let mainStoryComponent;
        if (stories[1]) {
            mainStory = stories[1];
            mainStoryComponent = (
                <View style={styles.Headline}>
                    <Image style={styles.MainImage} source={{uri: mainStory.urlToImage}} />
                    <View style={styles.MainText}>
                        <Text style={styles.MainTextTitle}>{mainStory.title}</Text>
                    </View>
                </View>
            );
        }
        return (
            <DefaultLayout>
                {mainStoryComponent}
                <View style={[styles.Stories, {backgroundColor: Theme.Feed.backgroundColor}]}>
                    <FlatList
                        data={stories}
                        renderItem={({item}) => <StoryFeedItem
                            onPress={this.feedItemOnPress(item)}
                            story={item}
                        />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </DefaultLayout>
        );
    }
}
Home.contextType = ThemeContext;

const mapStateToProps = (state: NestedState) => ({
    stories: selectStories(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<NestedState, void, ActionTypes>) => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export {
    Home,
};
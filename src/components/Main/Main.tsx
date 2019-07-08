import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DefaultLayout from '../DefaultLayout';
import styles from './Main.styles';
import {
    NestedState,
    HOME,
    OTHER,
    TEST,
    Stories,
} from './Main.types';
import {
    selectView,
    selectStories,
} from './Main.selectors';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import {
    ActionTypes,
    setView,
    getNews,
} from './Main.actions';
import { connect } from 'react-redux';
import Home from 'Components/Home';
import TestComponentB from 'Components/TestComponentB';
import NavBar from 'Components/NavBar';
import FeedNavigator from 'Components/FeedNavigator';

interface Props {
    view: string;
    stories: Stories;
    setView: typeof setView;
    getNews: typeof getNews;
};

class Main extends Component<Props> {
    public componentDidMount() {
        this.props.getNews();
    }
    
    private handleViewChange = (view: string): void => {
        this.props.setView(view);
    };

    render () {
        const {
            view,
            stories,
        } = this.props as Props;

        let currentView: JSX.Element = <View style={styles.NoView}><Text>No View Selected</Text></View>;
        switch (view) {
            case HOME:
                currentView = (
                    // <Text>HELLO</Text>
                    <FeedNavigator />
                );
                break;
            case TEST:
                currentView = (
                    <TestComponentB></TestComponentB>
                );
                break;
        }        

        return (
            <DefaultLayout stylesProp={styles.Container}>
                {currentView}
                <NavBar stylesProp={styles.NavBar} handleViewChange={this.handleViewChange} view={view}></NavBar>
            </DefaultLayout>
        );
    }
}

const mapStateToProps = (state: NestedState) => ({
    view: selectView(state),
    stories: selectStories(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<NestedState, void, ActionTypes>) => bindActionCreators({
    setView,
    getNews,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);

export{
    Main,
};
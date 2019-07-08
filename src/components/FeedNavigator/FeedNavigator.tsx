import { createStackNavigator, createAppContainer, NavigationContainer } from 'react-navigation';
import Home from 'Components/Home';
import TestComponentB from 'Components/TestComponentB';
import Story from 'Components/Story';

const Navigator: NavigationContainer = createStackNavigator(
    {
        Home: {screen: Home},
        Story: {screen: Story},
        TestComponentB: {screen: TestComponentB},
    },
    {
        initialRouteName: "Home",
        // headerMode: 'none',
    },
);

const FeedNavigator = createAppContainer(Navigator);

export default FeedNavigator;
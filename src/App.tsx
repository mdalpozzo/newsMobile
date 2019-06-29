import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from 'Components/Main';


// const AppContainer: NavigationContainer = createAppContainer(Navigator);

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Main></Main>
      </Provider>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import MainView from './components/main-view/main-view';
import { Container } from 'react-bootstrap';
<script type="text" src="index.html"></script>

import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

const container = document.getElementsByClassName('app-container')[0];


ReactDOM.render(React.createElement(MyFlixApplication), container);

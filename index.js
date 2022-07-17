/**
 * @format
 */
import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
import store from './src/store/storeConfig'
import App from './src/App';
import {name as appName} from './app.json';

const Redux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

import { registerRootComponent } from 'expo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Redux);

//AppRegistry.registerComponent('maskdetector', () => App);

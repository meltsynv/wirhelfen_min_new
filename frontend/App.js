import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text, View } from 'react-native';
import NastedNavigator from './navigation/nestedNavigator';

import rootReducer from './Redux/Reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

// load fonts from assets packadge
let customFonts = {
  'Rubik-Black': require('./assets/fonts/rubik-v14-latin-900.ttf'),
  'Roboto-regular': require('./assets/fonts/roboto-v29-latin-regular.ttf')
}

const App = ({ ...props }) => {
  const [fontsLoaded, setFontsLoadedStatus] = useState(false);

  async function _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoadedStatus(true);
  }

  useEffect(() => {
    _loadFontsAsync();
  })

  if (fontsLoaded) {
    return (
      // app entry point 
      <Provider store={store}>
        <NastedNavigator />
      </Provider>

    );
  } else {
    return (
      <View>
        <Text>Failed</Text>
      </View>
    );
  }

}

export default App;
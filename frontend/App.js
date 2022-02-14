import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text, View } from 'react-native';
import NastedNavigator from './navigation/nastedNavigator';
import store from './Store/store';


import { Provider } from 'react-redux';



// load fonts from assets packadge
let customFonts = {
  'Rubik-Black': require('./assets/fonts/rubik-v14-latin-900.ttf'),
  'Roboto-regular': require('./assets/fonts/roboto-v29-latin-regular.ttf')
}

function App () {
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
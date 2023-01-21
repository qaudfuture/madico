import Button from 'components/button';
import React from 'react';
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components';
import { getSelectedTheme } from 'theme';


const App = () => {
  return (
    <ThemeProvider theme={getSelectedTheme("DarkTheme")}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button />
      </View>
    </ThemeProvider>
  );
};

export default App;
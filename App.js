import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppLoadingSwitch } from './src/components/navigation/LoadingSwitchNavigator';
import { ThemeProvider } from 'react-native-elements';

const AppContainer = createAppContainer(AppLoadingSwitch);

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AppContainer />
            </ThemeProvider>
        </Provider>
    );
};

export default App;

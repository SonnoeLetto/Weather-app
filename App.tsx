import React, { useEffect } from 'react';
import { View, StatusBar, useColorScheme, AppStateStatus, Platform, AppState } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useFlipperDevtools } from 'react-query-devtools-flipper';
import Toast from 'react-native-toast-message';
import {
  focusManager,
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { Navigation } from 'src/navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const queryClient = new QueryClient();

function App(): JSX.Element {
  useFlipperDevtools(queryClient);
  const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    });
  });

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const mode = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <View style={backgroundStyle}>
          <StatusBar barStyle={mode} backgroundColor={backgroundStyle.backgroundColor} />
          <Navigation />
        </View>
      </QueryClientProvider>
      <Toast />
    </>
  );
}

export default App;

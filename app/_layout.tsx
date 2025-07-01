import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { ToastProvider, ToastViewport } from '@tamagui/toast';
import config from '~/tamagui.config';

// import config from '../tamagui.config';

export default function Layout() {
   const [fontsLoaded, fontError] = useFonts({
      Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
      InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
   });

   useEffect(() => {
      if (fontsLoaded || fontError) {
         SplashScreen.hideAsync();
      }
   }, [fontsLoaded, fontError]);

   if (!fontsLoaded && !fontError) return null;

   return (
      <TamaguiProvider config={config}>
         <GestureHandlerRootView style={{ flex: 1 }}>
            <Theme name="orange">
               {/* <ToastProvider burntOptions={{ from: 'bottom' }} swipeDirection="horizontal">
                  <ToastViewport flexDirection="column-reverse" top={10} left={0} right={0} marginHorizontal="auto" /> */}
               <Slot />
               {/* </ToastProvider> */}
            </Theme>
         </GestureHandlerRootView>
      </TamaguiProvider>
   );
}

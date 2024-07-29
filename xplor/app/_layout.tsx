import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="categories" options={{ headerShown: false }}/>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="home" options={{ headerShown: false }}/>
        <Stack.Screen name="nightgallery" options={{ headerShown: false }}/>
        <Stack.Screen name="reserve" options={{ headerShown: false }}/>
        <Stack.Screen name="plaza" options={{ headerShown: false }}/>
        <Stack.Screen name="park" options={{ headerShown: false }}/>
        <Stack.Screen name="bakery" options={{ headerShown: false }}/>
        <Stack.Screen name="profile" options={{ headerShown: false }}/>
        <Stack.Screen name="music" options={{ headerShown: false }}/>
        <Stack.Screen name="maple" options={{ headerShown: false }}/>
        <Stack.Screen name="flowers" options={{ headerShown: false }}/>
      </Stack>
    </ThemeProvider>
  );
}
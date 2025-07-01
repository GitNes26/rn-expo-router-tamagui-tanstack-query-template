import React from 'react';
import { Stack } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useTheme } from 'tamagui';

const Layout = () => {
   const theme = useTheme();

   return (
      <Stack
         screenOptions={{
            headerStyle: {
               backgroundColor: theme.color10.get(),
            },
            headerTitleStyle: {
               fontWeight: '800',
            },
            title: 'Inicio',
            headerLeft: () => <DrawerToggleButton tintColor={theme.color.get()} />,
         }}></Stack>
   );
};

export default Layout;

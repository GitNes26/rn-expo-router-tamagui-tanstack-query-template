import React from 'react';
import Drawer from 'expo-router/drawer';
import { Text, useTheme, View } from 'tamagui';
import DrawerGroup from '~/components/navigation/DrawerComponent';

import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { usePathname, useRouter } from 'expo-router';
import { Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { images } from '~/constants';
import TouchableContentComponent from '~/components/TouchableContentComponent';
import AvatarComponent from '~/components/AvatarComponent';
import ButtonCompnent from '~/components/ButtonCompnent';

const data = [
   {
      name: 'home',
      label: 'Inicio',
      headerShown: false,
      show: true,
      title: 'Inicio',
      //  header: () =><HeaderComponent />,
      icon: {
         focus: 'home',
         disfocus: 'home-outline',
      },
   },
   {
      name: 'favorites',
      label: 'Favoritos',
      headerShown: false,
      show: true,
      title: 'Favoritos 💖',
      //  header: () =><HeaderComponent />,
      icon: {
         focus: 'heart',
         disfocus: 'heart-outline',
      },
   },
   {
      name: '[id]',
      label: 'Los ID',
      headerShown: false,
      show: false,
      title: 'Titulo en la Pagina',
      //  header: () =><HeaderComponent />,
      icon: {
         focus: 'heart',
         disfocus: 'heart-outline',
      },
   },
   // {
   //   name: '[reportname]',
   //   label: 'Nuevo Reporte',
   //   title: 'Nuevo Reporte',
   //   // header: () => <HeaderComponent />,
   //   headerShown: false,
   //   show: false,
   //   icon: {
   //     focus: 'newspaper',
   //     disfocus: 'newspaper-outline',
   //   },
   // },
   // {
   //   name: 'my-reports',
   //   label: 'Mis Reportes',
   //   title: 'Mis Reportes',
   //   headerShown: false,
   //   show: true,
   //   icon: {
   //     focus: 'reader',
   //     disfocus: 'reader-outline',
   //   },
   // },
   // {
   //   name: 'profile',
   //   label: 'Mi Perfil',
   //   title: 'Mi Perfil',
   //   headerShown: false,
   //   show: false,
   //   icon: {
   //     focus: 'person',
   //     disfocus: 'person-outline',
   //   },
   // },
   // {
   //   name: 'demo',
   //   label: 'Demo',
   //   title: 'Demo',
   //   headerShown: false,
   //   show: false,
   //   icon: {
   //     focus: 'settings',
   //     disfocus: 'settings-outline',
   //   },
   // },
];

function CustomDrawerContent(props: DrawerContentComponentProps) {
   const theme = useTheme();

   // const { setIsLoading } = useGlobalStore();
   // const { auth } = useAuthStore();

   const menuItems = [
      { id: 42, title: 'Item 42' },
      { id: 43, title: 'Item 43' },
      { id: 44, title: 'Item 44' },
   ];
   const router = useRouter();
   const pathname = usePathname();

   const handlePressLogout = async () => {
      // setIsLoading(true);
      // await logout();
      // setIsLoading(false);
      // // return <Redirect href={"(auth)"} />;
      // if (router.canDismiss()) router.dismissAll();
      // else return <Redirect href={"(auth)"} />;
   };

   return (
      // <View className={'flex-1'}>
      <View flex={1}>
         <DrawerContentScrollView {...props}>
            <TouchableContentComponent onPress={() => router.push('profile')}>
               <AvatarComponent
                  size={'md'}
                  img={images.profile_manada}
                  caption={
                     <View justifyContent="center" alignItems="center" mt={5}>
                        <Text color={theme.color1} fontWeight={'bold'} className={`font-msemibold text-primary-100 text-[15px]`}>
                           {'auth?.email'}
                        </Text>
                        <Text color={theme.color1} mt={5} textAlign="center" className={`font-mmedium text-primary-100 text-[15px] text-center mt-2`}>
                           <Ionicons name="arrow-forward-outline" className={`my-auto`} size={13} color={theme.color1} />
                           &nbsp; Ir a mi perfil
                        </Text>
                     </View>
                  }
                  // styleContainer={`py-5`}
               />
            </TouchableContentComponent>

            <DrawerItemList {...props} />

            <View style={{ padding: 16, paddingTop: 40 }}>
               <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Items</Text>
            </View>

            {menuItems.map((item) => {
               const isActive = pathname === `/${item.id}`;

               return <DrawerItem activeTintColor="red" focused={isActive} key={item.id} label={item.title} onPress={() => router.push(`/${item.id}`)} />;
            })}
         </DrawerContentScrollView>

         <View
            // className={`pb-[${20 + bottom}]`}
            style={{ borderTopColor: theme.gray5.get(), borderTopWidth: 1 }}>
            <ButtonCompnent
               containerStyles={`w-full bg-gray-100/50 rounded-none`}
               textStyles={`text-gray-500`}
               icon={<Ionicons name="arrow-back-circle-sharp" size={22} color={theme.gray10.get()} />}
               title={'Cerrar Sesión'}
               handleOnPress={() => handlePressLogout()}
            />
         </View>
      </View>

      // </View>
   );
}

const Layout = () => {
   const theme = useTheme();

   return (
      <Drawer
         drawerContent={CustomDrawerContent}
         screenOptions={{
            drawerActiveBackgroundColor: theme.color8.get(),
            drawerActiveTintColor: theme.color1.get(),
            // drawerHideStatusBarOnOpen: true,
            headerTitleStyle: {
               fontWeight: '800',
            },
            headerTitleContainerStyle: {
               // backgroundColor: "red",
               width: '100%',
               alignItems: 'center',
            },
            headerStyle: {
               // backgroundColor: "yellow",
               // height: "10%",
            },
            headerShown: false,
            headerShadowVisible: true,
            // header: () => <HeaderComponent />,
            // headerLeft: () => (
            //    <ImagePressableComponent
            //       image={images.profile_manada}
            //       imageClassesStyle={`rounded-full ml-2`}
            //    />
            // ),
            // headerRight: () => (
            //    <View className={`mr-2`}>
            //       <LogoComponent />
            //    </View>
            // ),
         }}>
         {data.map(
            (item: {
               name: string | undefined;
               show: any;
               headerShown: any;
               header: any;
               label: any;
               title: any;
               icon: { focus: string | undefined; disfocus: string | undefined };
            }) => (
               <Drawer.Screen
                  key={`key-drawer-screen-${item.name}`}
                  name={item.name} // This is the name of the page and must match the url from root
                  
                  options={() => ({
                     drawerItemStyle: {
                        display: !item.show ? 'none' : 'flex',
                     },
                     drawerLabel: item.label,
                     headerShown: item.headerShown,
                     header: item.header,
                     headerTitle: item.title,
                     // title: item.title,
                     drawerIcon: ({ size, color, focused }) => {
                        return <Ionicons name={focused ? item.icon.focus : item.icon.disfocus} size={size} color={color} />;
                     },
                  })}
               />
            )
         )}
      </Drawer>
   );
};

export default Layout;

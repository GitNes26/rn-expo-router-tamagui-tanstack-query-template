import { Image } from 'react-native';
import images from '../constants/images';
import { useEffect, useState } from 'react';
import { stringAvatar } from '../utils/formats';
import colors from '../constants/colors';
import { Avatar, Text, useTheme, View, XStack } from 'tamagui';
// import useAuthStore from "../stores/authStore";

const AvatarComponent = ({ caption, img = false, size, styleContainer }) => {
   const theme = useTheme();
   // const { auth } = useAuthStore();

   // const letters = auth ? `${auth.name.slice(0, 1)}${auth.paternal_last_name.slice(0, 1)}` : "?";
   const letters = 'AD';

   let bgSize;
   let fontSize;
   switch (size) {
      case 'sm':
         bgSize = 'w-[50px] h-[50px]';
         fontSize = 'text-[20px]';
         break;
      case 'md':
         bgSize = 'w-[100px] h-[100px]';
         fontSize = 'text-[45px]';
         break;
      case 'lg':
         bgSize = 'w-[150px] h-[150px]';
         fontSize = 'text-[65px]';
         break;
      default:
         bgSize = 'w-[100px] h-[100px]';
         fontSize = 'text-[45px]';
         break;
   }

   // useEffect(() => {
   //    console.log("el efect");
   //    (async () => {
   //       console.log("el async del efect");
   //       if (name) {
   //          setAvatar(stringAvatar(name));
   //          console.log("🚀 ~ stringAvatar(name):", stringAvatar(name));
   //       }
   //    })();
   // }, []);

   return (
      <View
         justifyContent="center"
         alignItems="center"
         backgroundColor={theme.color10}
         margin={-15}
         mb={15}
         pt={25}
         pb={30}
         className={`justify-center items-center my-4 ${styleContainer}`}>
         {img ? (
            <Avatar circular size="$10">
               <Avatar.Image accessibilityLabel="Foto de perfil" src={images.profile_manada} resizeMethod="resize" />
               <Avatar.Fallback delayMs={600} backgroundColor="$orange10" />
            </Avatar>
         ) : (
            <View justifyContent="center" alignItems="center" className={`${bgSize} bg-primary text-center rounded-full flex items-center justify-center mb-1`}>
               <Text fontWeight={'$10'} className={`${fontSize} text-primary-100 font-mbold`}>
                  {letters.toUpperCase()}
               </Text>
            </View>
         )}
         {caption && caption}
      </View>
   );
};
export default AvatarComponent;

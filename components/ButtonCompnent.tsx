import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Button, useTheme, Text } from 'tamagui';
// import Toast from './Toast';
// import colors from "../constants/colors";

const ButtonCompnent = ({ title, handleOnPress, containerStyles, textStyles, isLoading, colorisLoading = '#fefefe', icon = null, positionIcon = 'start' }) => {
   const theme = useTheme();
  //  const toast = useToastController()

   return (
      <TouchableOpacity
          onPress={handleOnPress}
        //  onPress={() => {
        //     Toast.show('Successfully saved!', {
        //        message: "Don't worry, we've got your data.",
        //       //  true,
        //        demo: true,
        //     });
        //  }}
         activeOpacity={0.7}
         style={{ backgroundColor: theme.gray3.get(), display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 20 }}
         className={`bg-primary rounded-xl min-h-[62px] flex-row space-x-2 justify-center items-center px-2 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
         disabled={isLoading}>
         {icon && positionIcon === 'start' && icon}
         <Text color={theme.color12} marginHorizontal={5} className={`text-white font-mbold text-lg ${textStyles}`}>
            {title.toUpperCase()}
            &nbsp; &nbsp;
            {isLoading && (
               <ActivityIndicator
                  size={'small'}
                  color={colorisLoading}
                  className={`ml-2 pt-2`}
                  // className={`absolute -top-[50%] left-[40%]`}
               />
            )}
         </Text>
         {icon && positionIcon === 'end' && icon}
      </TouchableOpacity>
   );
};

export default ButtonCompnent;

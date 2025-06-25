import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
// import { styled } from 'tamagui';
// import { styled } from 'nativewind';

// const StyledPressable = styled(Pressable);

// export const Circle = styled(Pressable, {
//   borderRadius: 100_000_000,

//   variants: {
//     pin: {
//       top: {
//         position: 'absolute',
//         top: 0,
//       },
//     },

//     centered: {
//       true: {
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     },

//     size: {
//       '...size': (size, { tokens }) => {
//         return {
//           width: tokens.size[size] ?? size,
//           height: tokens.size[size] ?? size,
//         };
//       },
//     },
//   } as const,
// });

export default function TouchableContentComponent({ children, styleContet, onPress }) {
  return (
    <TouchableOpacity
      className={`active:opacity-40 ${styleContet}`}
      // activeOpacity={0.7}
      delayPressOut={100}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

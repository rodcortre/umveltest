import React, {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start()
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const startMovingPosition = (
    initPosition: number = -100,
    duration: number = 3000,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };
  return {opacity, fadeIn, fadeOut, startMovingPosition, position};
};

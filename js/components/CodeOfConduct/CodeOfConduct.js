import React, {useState} from 'react';
import {
  Platform,
  UIManager,
  Animated,
  LayoutAnimation,
  Easing,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CodeOfConduct = ({item}) => {
  const [spinIcon] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);
  const [expandItem, setExpandItem] = useState(0);

  const animate = () => {
    if (open === false) {
      spinIcon.setValue(0);
      const createAnimation = (value, duration, easing, opacity, delay = 0) => {
        return Animated.timing(value, {
          toValue: 1,
          duration,
          easing,
          delay,
          opacity,
        });
      };
      LayoutAnimation.configureNext({
        duration: 500,
        create: {
          type: 'spring',
          property: 'scaleXY',
          springDamping: 0.7,
          opacity: 1,
        },
        update: {
          type: 'spring',
          property: 'scaleXY',
          springDamping: 0.7,
          opacity: 0,
        },
        delete: {
          type: 'linear',
          property: 'scaleXY',
        },
      });
      Animated.parallel([createAnimation(spinIcon, 1000, Easing.ease)]).start();

      setExpandItem('auto');
      setOpen(true);
    } else {
      LayoutAnimation.configureNext({
        duration: 1000,
        create: {
          type: 'spring',
          property: 'scaleXY',
          springDamping: 0.7,
        },
      });
      setExpandItem(0);
      setOpen(false);
    }
  };

  const spin = spinIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  return (
    <TouchableOpacity
      onPress={() => {
        animate();
      }}
      style={styles.item}>
      <View style={styles.header}>
        {expandItem === 0 && (
          <Animated.View style={{transform: [{rotate: spin}], width: 10}}>
            <Icon name="plus" style={styles.icon} />
          </Animated.View>
        )}
        {expandItem === 'auto' && <Icon name="minus" style={styles.icon} />}

        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text style={{height: expandItem}}>{item.description}</Text>
    </TouchableOpacity>
  );
};
export default CodeOfConduct;

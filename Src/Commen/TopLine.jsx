import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from '../../Style';

const {TextColor, styles, width, height} = Styles();
const TopLine = ({customStyle}) => {
  return (
    <View
      style={[
        {
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'center',
        },
        {...customStyle},
      ]}>
      <View
        style={{
          backgroundColor: 'pink',
          width: (width / 100) * 15,
          height: (height / 100) * 0.6,
          borderRadius: (width / 100) * 4,
          position: 'absolute',
          zIndex: 10,
        }}></View>
      <View
        style={{
          backgroundColor: 'grey',
          width: (width / 100) * 75,
          height: (height / 100) * 0.6,
          borderRadius: (width / 100) * 4,
        }}></View>
    </View>
  );
};

export default TopLine;

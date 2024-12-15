import React from 'react';
import {Text} from 'react-native';
import {Styles} from '../../Style';

const {TextColor, styles, width, height} = Styles();
const SubtitleText = ({text, customStyles}) => {
  return <Text style={[{...styles.summery}, {...customStyles}]}>{text}</Text>;
};

export default SubtitleText;

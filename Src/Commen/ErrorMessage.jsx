import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from '../../Style';

const {TextColor, styles, width, height} = Styles();

const ErrorMessage = ({message}) => {
  return (
    <View>
      <Text style={[{...styles.summery}, {color: 'red'}]}>
        Please Select {message}
      </Text>
    </View>
  );
};

export default ErrorMessage;

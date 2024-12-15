import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Styles} from '../../Style';
import {Icon} from '@rneui/base';

const {TextColor, styles, width, height} = Styles();

const CustomButton = ({
  color,
  title,
  iconName,
  textColor,
  iconColor,
  customStyle,
  Function,
  iconPosition,
  iconType,
}) => {


  return (
    <Button
      iconPosition={iconPosition}
      onPress={Function}
      icon={
        iconName && (
          <Icon
            size={(width / 100) * 6}
            color={iconColor}
            name={iconName}
            type={!iconType && 'font-awesome'}
            style={{
              width: '100%',
            }}
          />
        )
      }
      titleStyle={[
        {...styles.summery},
        {
          color: `${textColor ?? 'black'}`,
          textTransform: 'capitalize',
          fontSize: (width / 100) * 4.5,
          width: '75%',
        },
      ]}
      color={color}
      title={title}
      containerStyle={[
        {...style2.buttonContainer},
        {...customStyle},
        {backgroundColor: color},
      ]}
    />
  );
};

export default CustomButton;

const style2 = StyleSheet.create({
  buttonContainer: {
    borderRadius: (width / 100) * 45,
    width: (width / 100) * 75,
    alignSelf: 'center',
    padding: (width / 100) * 2,
    marginBottom: (height / 100) * 5,
    borderStyle: 'solid',
  },
});

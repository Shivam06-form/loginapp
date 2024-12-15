import {Text} from '@rneui/themed';
import React from 'react';
import {Styles} from '../../Style';
import {SafeAreaView, View} from 'react-native';
import TopLine from '../Commen/TopLine';
import CustomButton from '../Commen/CustomButton';

const {TextColor, styles, width, height} = Styles();
const WelcomePage = ({Data, setData}) => {
  return (
    <SafeAreaView
      style={[{...styles.Display}, {justifyContent: 'space-between'}]}>
      <TopLine customStyle={{marginTop: (height / 100) * 5}} />
      <View>
        <Text
          style={[
            {...styles.title},
            {
              alignSelf: 'center',
            },
          ]}>
          Welcome
        </Text>
        <Text
          style={[
            {...styles.title},
            {
              alignSelf: 'center',
              color: 'black',
              marginTop: (height / 100) * 1,
              fontWeight: '900',
            },
          ]}>
          {Data.name ? Data.name : Data.newName}
        </Text>
        <Text
          style={[
            {...styles.summery},
            {
              marginTop: (height / 100) * 1,
              fontWeight: '100',
              width: (width / 100) * 85,
            },
          ]}>
          {Data.detials && Data.detials.email}
          {'dummeyEmail@gmail.com'}
        </Text>
      </View>
      <CustomButton
        iconType={'material'}
        iconColor={'whitesmoke'}
        iconName={'logout'}
        color={'red'}
        textColor={'whitesmoke'}
        title={'Log Out'}
        Function={() => {
          setData({
            login: false,
            name: '',
            age: '',
            gender: '',
            newName: '',
            detials: '',
            Welcome: false,
          });
        }}
      />
    </SafeAreaView>
  );
};

export default WelcomePage;

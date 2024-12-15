import React, {useEffect, useState} from 'react';
import {BackHandler, SafeAreaView, Text, View} from 'react-native';
import SubtitleText from '../Commen/SubtitleText';
import {Styles} from '../../Style';
import TopLine from '../Commen/TopLine';
import {Input} from '@rneui/themed';
import CustomButton from '../Commen/CustomButton';
import ErrorMessage from '../Commen/ErrorMessage';

const {TextColor, styles, width, height} = Styles();
const Name = ({Data, setData}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(Data.name);
  }, [Data.name]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      setData({...Data, name: '', newName: ''});
      return false;
    });
  }, []);

  return (
    <SafeAreaView style={styles.Display}>
      <SafeAreaView
        style={[{...styles.insideView}, {height: (height / 100) * 40}]}>
        <TopLine />
        <View>
          <SubtitleText text={'Let’s get to know each other'} />
          <View style={{flexDirection: 'row', marginTop: (height / 100) * 1.2}}>
            <Text style={[{...styles.title}, {fontWeight: '800'}]}>What</Text>
            <Text
              style={[{...styles.title}, {fontWeight: '500', color: 'black'}]}>
              {' '}
              should we call
            </Text>
            <Text
              style={[{...styles.title}, {fontWeight: '800', color: 'grey'}]}>
              {' '}
              You?
            </Text>
          </View>
        </View>
        <Input
          inputStyle={[
            {
              ...styles.summery,
            },
            {fontSize: (width / 100) * 5},
          ]}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          defaultValue={name ?? 'newName'}
          placeholder="Name"
          containerStyle={{
            borderColor: 'black',
            borderWidth: (width / 100) * 0.5,
            width: (width / 100) * 85,
            borderRadius: (width / 100) * 45,
            overflow: 'hidden',
            height: (height / 100) * 6,
          }}
          onChangeText={e => {
            setName(e);
          }}
        />
        {!name && <ErrorMessage message={'name'} />}
      </SafeAreaView>
      <CustomButton
        color={TextColor}
        textColor={'white'}
        title={'continue'}
        Function={() => {
          setData({...Data, newName: name});
          if (!name) {
            setName(Data.name);
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Name;

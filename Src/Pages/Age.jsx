import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SubtitleText from '../Commen/SubtitleText';
import {Styles} from '../../Style';
import TopLine from '../Commen/TopLine';
import {Input} from '@rneui/themed';
import CustomButton from '../Commen/CustomButton';
import ErrorMessage from '../Commen/ErrorMessage';

const {TextColor, styles, width, height} = Styles();

const Age = ({Data, setData}) => {
  const [selectAge, setSelectAge] = useState('');

  //////////////////////////////////

  const DATA = [
    {id: 1, title: 'Under 18'},
    {id: 2, title: '18-24'},
    {id: 3, title: '25-34'},
    {id: 4, title: '35-44'},
    {id: 5, title: '45-54'},
    {id: 6, title: '55+'},
  ];

  //////////////////////////////////

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      setData({...Data, age: ''});
      return false;
    });
  }, []);

  return (
    <SafeAreaView style={styles.Display}>
      {/* /////////////////////////// TOP PART ///////////////////////////// */}
      <SafeAreaView
        style={[{...styles.insideView}, {height: (height / 100) * 26}]}>
        <TopLine />
        <View>
          <SubtitleText text={'Great, Let’s make Mynd all about you!'} />
          <View style={{marginTop: (height / 100) * 1.2}}>
            <Text
              style={[{...styles.title}, {fontWeight: '700', color: 'black'}]}>
              How long have you been
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  {...styles.title},
                  {fontWeight: '700', color: 'black'},
                ]}>
                rocking this
              </Text>
              <Text style={[{...styles.title}, {fontWeight: '700'}]}>
                {' '}
                world?🎂
              </Text>
            </View>
          </View>
        </View>

        {!selectAge && <ErrorMessage message={'Age'} />}
      </SafeAreaView>
      {/* //////////////////////////////////////////////////////////////// */}

      {/* /////////////////////////// AGE LIST  //////////////////////////// */}
      <FlatList
        contentContainerStyle={{marginTop: (height / 100) * 8}}
        columnWrapperStyle={{
          gap: (width / 100) * 2,
          justifyContent: 'center',
        }}
        numColumns={2}
        data={DATA}
        renderItem={({item}) => {
          return (
            <View>
              {selectAge !== item.title && (
                <CustomButton
                  color={'#F4F6F7'}
                  textColor={'black'}
                  title={item.title}
                  customStyle={{
                    width: (width / 100) * 45,
                  }}
                  Function={() => {
                    setSelectAge(item.title);
                  }}
                />
              )}
              {selectAge === item.title && (
                <CustomButton
                  iconPosition={'right'}
                  iconName={'check'}
                  iconColor={'white'}
                  color={TextColor}
                  textColor={'white'}
                  title={item.title}
                  customStyle={{
                    width: (width / 100) * 45,
                  }}
                />
              )}
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      {/* //////////////////////////////////////////////////////////////// */}

      {/* ///////////////////////   BUTTON   //////////////////////////////////// */}
      <CustomButton
        color={TextColor}
        textColor={'white'}
        title={'continue'}
        Function={() => {
          setData({...Data, age: selectAge});
        }}
      />
    </SafeAreaView>
  );
};

export default Age;

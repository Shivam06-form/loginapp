import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Styles} from '../../Style';
import {Text} from '@rneui/themed';
import TopLine from '../Commen/TopLine';
import CustomButton from '../Commen/CustomButton';
import ErrorMessage from '../Commen/ErrorMessage';

const {TextColor, styles, width, height} = Styles();
const Gender = ({Data, setData}) => {
  //////////////////////////////

  const DATA = [
    {id: 1, title: 'Female'},
    {id: 2, title: 'Male'},
    {id: 3, title: 'Non-Binary'},
    {id: 4, title: 'Other'},
  ];

  /////////////////////////////////

  const [selectGender, setSelectGender] = useState('');

  return (
    <SafeAreaView style={styles.Display}>
      <SafeAreaView
        style={[{...styles.insideView}, {height: (height / 100) * 20}]}>
        <TopLine />
        <View style={{marginTop: (height / 100) * 1.2}}>
          <Text style={[{...styles.title}, {fontWeight: '400', color: 'gray'}]}>
            Choose the{' '}
            <Text style={[{...styles.title}, {fontWeight: '700'}]}>
              identity
            </Text>{' '}
            that
          </Text>
          <Text style={[{...styles.title}, {fontWeight: '400', color: 'gray'}]}>
            feels right for{' '}
            <Text
              style={[{...styles.title}, {fontWeight: '700', color: 'black'}]}>
              you?
            </Text>
          </Text>
        </View>
      </SafeAreaView>
      {!selectGender && <ErrorMessage message={'gender'} />}

      {/* /////////////////////////// Gender LIST  //////////////////////////// */}
      <FlatList
        contentContainerStyle={{marginTop: (height / 100) * 4}}
        // columnWrapperStyle={{
        //   gap: (width / 100) * 2,
        //   justifyContent: 'center',
        // }}
        data={DATA}
        renderItem={({item}) => {
          return (
            <View>
              {selectGender !== item.title && (
                <CustomButton
                  Function={() => {
                    setSelectGender(item.title);
                  }}
                  color={'#F4F6F7'}
                  textColor={'black'}
                  title={item.title}
                  customStyle={{
                    width: (width / 100) * 75,
                  }}
                />
              )}
              {selectGender === item.title && (
                <CustomButton
                  iconPosition={'right'}
                  iconName={'check'}
                  iconColor={'white'}
                  color={TextColor}
                  textColor={'white'}
                  title={item.title}
                  customStyle={{
                    width: (width / 100) * 75,
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
          setData({...Data, age: selectGender, Welcome: true});
        }}
      />
    </SafeAreaView>
  );
};

export default Gender;

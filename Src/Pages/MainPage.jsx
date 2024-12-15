import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Login from './Login';
import Name from './Name';
import Age from './Age';
import Gender from './Gender';
import WelcomePage from './WelcomePage';

const MainPage = () => {
  const [Data, setData] = useState({
    login: false,
    name: '',
    age: '',
    gender: '',
    newName: '',
    detials: '',
    Welcome: false,
  });

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      {!Data.Welcome && !Data.login && <Login Data={Data} setData={setData} />}
      {!Data.Welcome && !Data.newName && <Name Data={Data} setData={setData} />}
      {!Data.Welcome && !Data.age && <Age Data={Data} setData={setData} />}
      {!Data.Welcome && !Data.gender && (
        <Gender Data={Data} setData={setData} />
      )}
      {Data.Welcome && <WelcomePage Data={Data} setData={setData} />}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default MainPage;

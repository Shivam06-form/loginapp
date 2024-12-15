import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Styles} from '../../Style';
import SubtitleText from '../Commen/SubtitleText';
import TopLine from '../Commen/TopLine';
import CustomButton from '../Commen/CustomButton';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const {TextColor, styles, width, height} = Styles();
const Login = ({Data, setData}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '539276406200-63bi23lvlp97s53t6ckk9k96hlahchhf.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
    console.log(signInResult)
    const user = signInResult.data.user;
    setData({...Data, login: true, name: user.name, detials: user});
    // Try the new style of google-sign in result, from v13+ of that module
    idToken = signInResult.data?.idToken;
    if (!idToken) {
      // if you are using older versions of google-signin, try old style result
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      signInResult.data.token,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <SafeAreaView style={styles.Display}>
      <SafeAreaView style={styles.insideView}>
        <TopLine />
        <View>
          <Text
            style={[
              {...styles.title},
              {fontSize: (width / 100) * 7, fontWeight: '500'},
            ]}>
            Begin Your
          </Text>
          <Text
            style={[
              {...styles.title},
              {fontSize: (width / 100) * 8, fontWeight: '800'},
            ]}>
            MindFul Journey
          </Text>
          <SubtitleText
            text={'Log in or sign up to begin your journey with '}
            customStyles={{marginTop: (height / 100) * 1}}
          />
          <SubtitleText text={'personalized, human-like wellness support '} />
        </View>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: '#F3A8CE',
          height: (height / 100) * 45,
          borderTopLeftRadius: (width / 100) * 8,
          borderTopRightRadius: (width / 100) * 8,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            height: (height / 100) * 18,
            justifyContent: 'space-between',
          }}>
          <CustomButton
            color={'black'}
            title={'continue with Apple'}
            iconName="apple"
            textColor={'white'}
            iconColor={'white'}
            Function={() => {
              setData({login: true});
            }}
          />
          <CustomButton
            color={'white'}
            title={'continue with Google'}
            iconName="google"
            textColor={'black'}
            Function={() => {
              // setData({login: true});
              onGoogleButtonPress();
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: (width / 100) * 75,
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <View style={[{...style2.divider}]}></View>
          <Text style={[{...styles.summery}, {width: 'auto'}]}>or</Text>
          <View style={style2.divider}></View>
        </View>
        <SubtitleText
          customStyles={{color: 'grey'}}
          text={'I agree to Privacy Policy & Terms of Service'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const style2 = StyleSheet.create({
  divider: {
    backgroundColor: 'grey',
    width: (width / 100) * 32,
    height: (height / 100) * 0.2,
  },
});

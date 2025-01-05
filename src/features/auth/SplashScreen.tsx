import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Colors } from '@utils/Constants';
import { screenHeight, screenWidth } from '@utils/Scaling';
import logo from '@assets/images/splash_logo.jpeg';
import { useAuthStore } from '@state/authStore';
import { tokenStorage } from '@state/storage';
import { resetAndNavigate } from '@utils/NavigationUtils';

const SplashScreen = () => {

  const {user , setUser} = useAuthStore()
  

  const tokenCheck = async() =>{
    const accessToken = tokenStorage.getString('accessToken') as string
    const refreshToken = tokenStorage.getString('refreshToken') as string

    if(accessToken)
    {

    }
    resetAndNavigate('CustomerLogin')
    return false

  }

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This app needs to access your location to provide better service.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          tokenCheck()

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location permission granted');
          } else {
            Alert.alert(
              'Permission Denied',
              'Location permission is required to use this app properly.'
            );
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        // For iOS: No need for explicit permission request if Info.plist is configured
     
      }
    };

    const timeoutId = setTimeout(() => {
      requestLocationPermission();
    }, 1000);

    return () => clearTimeout(timeoutId); // Clear timeout on unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;

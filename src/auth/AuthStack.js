import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
// import Main from '../components/Main';
// import BottomNavigator from '../BottomNavigator';
// import Carlist from '../screens/Home/Carlist.js';
// import CarRegisterForm from '../screens/Home/CarRegisterForm.js';
// import Map from '../screens/Home/Map.js';
// import Home from '../screens/Home/index.js';
// import ServiceStack from '../screens/Home/ServiceStack.js';
// import MessageChat from '../screens/MessageChat/index.js';
// import Profile from '../screens/Profile';
// import PrivacyPolicy from '../screens/PrivacyPolicy/index.js';
// import RequestCharging from '../screens/Home/RequestCharging.js';
// import Charging from '../screens/Home/Charging.js';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;

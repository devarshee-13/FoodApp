import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '/Users/devarshee/Desktop/unicode/FoodApp/assets/images/favourties.jpg';
import Cuisines from '../Cuisines';
import Support from '../Support';
import Favourites from '../Favourites';
import ProfileScreen from '../ProfileScreen';
import ApiData from '../../service/ApiData';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
  //const email = route.params.text;
  return (
    <Tab.Navigator initialRouteName="Profile" activeColor="#fff">
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: false,
          tabBarLabel: 'Support',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <View style={styles.root}>
              <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarLabel: 'Favourites',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <View style={styles.root}>
              <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={ApiData}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <View style={styles.root}>
              <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        //initialParams={{text: email}}
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <View style={styles.root}>
              <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: '40%',
  },
});
export default Tabs;

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Cuisines from '../Cuisines';
// import HomeScreen from '../HomeScreen';
// import Support from '../Support';
// import Favourites from '../Favourites';
// import ProfileScreen from '../ProfileScreen';
// import Icon from 'react-native-vector-icons';

// const Tab = createBottomTabNavigator();

// const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarStyle: {height: 60},
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Cuisines') {
//             iconName = focused ? 'pizza' : 'pizza-outline';
//           } else if (route.name === 'Favourites') {
//             iconName = focused ? 'heart' : 'heart-outline';
//           } else if (route.name === 'Support') {
//             iconName = focused ? 'settings' : 'settings-outline';
//           }

//           // You can return any component that you like here!
//           return <Icon name={iconName} size={35} color={color} />;
//         },
//         tabBarActiveTintColor: '#315e26',
//         tabBarInactiveTintColor: 'gray',

//         //         Navigation.mergeOptions(componentId, {
//         //             bottomTabs: {
//         //                 visible: true
//         //   },
//         // });

//         headerShown: false,
//         tabBarShowLabel: false,
//       })}>
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="Cuisines" component={Cuisines} />
//       <Tab.Screen name="Favourites" component={Favourites} />
//       <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
//       <Tab.Screen name="Support" component={Support} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTab;

// const styles = StyleSheet.create({});

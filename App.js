import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Ionicons } from "@expo/vector-icons";

import { Image, Platform } from "react-native"
import HomeScreen from './component/Screens/Home-Screen';
import AboutScreen from './component/Screens/About-Screen';
import ContactScreen from './component/Screens/Contact-Screen';
import { BorderlessButton } from 'react-native-gesture-handler';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

// function Logoicon() {
//   return (
//     <Image
//       style={{ width: 50, height: 50, marginLeft: 140 }} 
//       source={require('./assets/download.jpg')} />);
// }

   /////////////////////bottom tab navigation
// const Tab = createBottomTabNavigator();
const drawer =createDrawerNavigator();
function App(props) {   
  return (
    <NavigationContainer>
      
      <drawer.Navigator
        screenOptions={(props) =>({
          tabBarIcon: ({ Focused, color, size }) => {
            let iconName;
            if (props.route.name === "Home") {
              iconName = Focused ? "ios-information-circle" : "ios-information-circle-outline"
            } 
            else if (props.route.name === "About") {
              iconName = Focused ?
                "ios-information-circle" :
                "ios-information-circle-outline"
            } else if (props.route.name === "Contact") {
              iconName = Focused ?
                "ios-information-circle" :
                "ios-information-circle-outline"
            }
            return (<Ionicons name={iconName} size={size} color={color} />)
          },
        })}
        tabBarOptions={{
          activeTintColor:'tomato',
          inactiveTintColor:'gray'
        }}>
        <drawer.Screen
          name="Home"
          initialParams={{ name: 'default' }}
          options={{ title: "Navigate to Home ", }}
          component={HomeScreen} />
        <drawer.Screen
          name="About"
          initialParams={{ name: 'default' }}
          options={{ title: "About Us ", }}
          component={AboutScreen} />
        <drawer.Screen
          name="Contact"
          initialParams={{ name: 'default' }}
          options={{ title: "Contact Us", }}
          component={ContactScreen} />
      </drawer.Navigator>
    </NavigationContainer >
  );
}
  ////////////////////////////stack navigation
// function App() {
//   // const Data="hi I am developer M.Sohail"
//   // const Stack = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={      /////best option for styling no 1
//           {
//             headerStyle: {
//               backgroundColor: 'gray',
//             },
//             headerTintColor: "blue",
//             headerTitleStyle: {
//               fontWeight: "bold",
//               fontSize: 25,
//               textAlign: "center",
//               ...Platform.select({   ////// just android device styling not for ios
//                 android:{
//                   // marginLeft:180
//                 }
//               })                         ////// close session styling
//             }
//           }}>
//         <Stack.Screen name="Home" initialParams={{ name: 'default' }} options={{
//           headerTitle: props => <Logoicon {...props} />,
//         }}
//           component={HomeScreen} />

//         <Stack.Screen name="Contact"
//           // ///// daynamic route name   in two way
//           initialParams={{ name: 'default contact' }}
//           options={({ route }) => ({
//             title: route.params.name ? route.params.name : "Contact Us",
//             headerStyle: {       ///// option for styling no 2 indeviual
//               backgroundColor: 'green'
//             },
//             headerTintColor: "blue",
//             headerTitleStyle: {
//               fontWeight: "bold",
//               fontSize: 25,
//               textAlign: "center"
//             }
//           })}
//           component={ContactScreen} />
//         <Stack.Screen name="About" initialParams={{ name: 'default contact' }} options={{ headerTitle: "About Us" }} component={AboutScreen} />

//       </Stack.Navigator>
//     </NavigationContainer >

//   );
// }

export default App;
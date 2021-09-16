
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import Navigator from './routes/homeStack'

import mealPlanScreen from './src/screens/mealPlan/MealPlanScreen';
import fastingScreen from './src/screens/fasting/FastingScreen';
import settingsScreen from './src/screens/settings/SettingScreen';
import statisticsScreen from './src/screens/statistics/StatisticsScreen';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
import "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlRPOm-N6KwRY8J-TFrA2F5sKe1BQN2IQ",
  authDomain: "ass2-de510.firebaseapp.com",
  projectId: "ass2-de510",
  storageBucket: "ass2-de510.appspot.com",
  messagingSenderId: "854043785229",
  appId: "1:854043785229:web:06b18a8dc79cd9e8fcfd44",
  measurementId: "G-YTWRJS2C64"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const dbh = firebase.firestore();

  dbh.collection("test").doc("testDoc").set({
    a : "dog",
    b : "busy-bee"
  });

  
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//////////////////////////////////////////// not sure if my code works lol i didnt save it o ma goodness
//i havent done any functionality stuff
//do you have separate scripts for each action

const Tab = createBottomTabNavigator();

 

 const Navigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
    
            if(route.name == "Meal Plans"){
                iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
            }else if(route.name == "Fasting") {
            iconName = focused ? "timer" : "timer-outline"; 
            }else if(route.name == "Settings") {
                iconName = focused ? "settings" : "cog-outline"; 
            }else if(route.name == "Statistics") {
                iconName = focused ? "stats-chart" : "stats-chart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarInactiveTintColor:'grey',
        tabBarActiveTintColor:'black',
        })}
        >
    
        <Tab.Screen name="Meal Plans"  component={mealPlanScreen} options={{headerTitleAlign : 'center'}}/>
        <Tab.Screen name="Fasting" component={fastingScreen}  options={{headerTitleAlign : 'center'}}/>
        <Tab.Screen name="Statistics" component={statisticsScreen}  options={{headerTitleAlign : 'center'}}/>
        <Tab.Screen name="Settings" component={settingsScreen}  options={{headerTitleAlign : 'center'}}/>
    
  
    </Tab.Navigator>
    </NavigationContainer>
  );

 }

export default Navigator 

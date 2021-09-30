
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//import screens
import mealPlanScreen from './src/screens/mealPlan/MealPlanScreen';
import fastingScreen from './src/screens/fasting/FastingScreen';
import galleryScreen from './src/screens/gallery/GalleryScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealScreen from './src/screens/mealPlan/MealScreen';
import NotificationsScreen from './src/screens/settings/NotificationsScreen';
import PersonalScreen from './src/screens/settings/PersonalScreen';
import settingsScreen from './src/screens/settings/SettingScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//define the meal plan stack navigation
function mealStackNavigator() {
    return (
        <Stack.Navigator initialRouteName = 'Meal Plans' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Meal Plans' component={mealPlanScreen} options={{title: 'Meal Plans'}}/>
            <Stack.Screen name='Meals' component={MealScreen} options={{title: 'Your Meals'}}/>
        </Stack.Navigator>
    )
}

//define the settings stack navigation
function settingStackNavigator() {
    return (
        <Stack.Navigator initialRouteName = 'Your Settings' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Your Settings' component={settingsScreen} options={{title: 'Your Settings'}}/>
            <Stack.Screen name='Notifications' component={NotificationsScreen} options={{title: 'Notifications'}}/>
            <Stack.Screen name='Personal Information' component={PersonalScreen} options={{title: 'Your Personal Information'}}/>
        </Stack.Navigator>
    )
}

 

 const Navigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName = 'Fasting'
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            //highlight icons if they are the focused route
            if(route.name == "Planning"){
                iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
            }else if(route.name == "Fasting") {
            iconName = focused ? "timer" : "timer-outline"; 
            }else if(route.name == "Settings") {
                iconName = focused ? "settings" : "cog-outline"; 
            }else if(route.name == "Gallery") {
                iconName = focused ? "copy" : "copy-outline";
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarInactiveTintColor:'grey',
        tabBarActiveTintColor:'black',
        })}
        >
        
        {/* Define the screens with the component*/}
        <Tab.Screen name="Planning"  component={mealStackNavigator} options={{headerTitleAlign : 'center'}}/>
        <Tab.Screen name="Fasting" component={fastingScreen}  options={{headerTitleAlign : 'center'}}/>
        <Tab.Screen name="Gallery" component={galleryScreen}  options={{headerTitleAlign : 'center'}}/>
        <Tab.Screen name="Settings" component={settingStackNavigator}  options={{headerTitleAlign : 'center'}}/>
    
  
    </Tab.Navigator>
    </NavigationContainer>
  );

 }

export default Navigator 

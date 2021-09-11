
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import Navigator from './routes/homeStack'

import mealPlanScreen from './src/screens/mealPlan/MealPlanScreen';
import fastingScreen from './src/screens/fasting/FastingScreen';
import settingsScreen from './src/screens/settings/SettingScreen';
import statisticsScreen from './src/screens/statistics/StatisticsScreen';


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
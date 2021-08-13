import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function mealPlanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meal Planning!</Text>
    </View>
  );
}

function fastingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fasting!</Text>
    </View>
  );
}

function statsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stats!</Text>
    </View>
  );
}

function settingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
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
            }else if(route.name == "Stats") {
                iconName = focused ? "stats-chart" : "stats-chart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor:'grey',
          tabBarActiveTintColor:'black',
        })}
        >
      
        <Tab.Screen name="Meal Plans" component={mealPlanScreen} />
        <Tab.Screen name="Fasting" component={fastingScreen} />
        <Tab.Screen name="Stats" component={statsScreen} />
        <Tab.Screen name="Settings" component={fastingScreen} />
      

      </Tab.Navigator>
    </NavigationContainer>
  );
}